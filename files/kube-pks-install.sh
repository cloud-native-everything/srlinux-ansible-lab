dnf -y install iptables ethtool ebtables

cat > /etc/sysctl.d/99-k8s-cri.conf <<EOF
net.bridge.bridge-nf-call-iptables=1
net.ipv4.ip_forward=1
net.bridge.bridge-nf-call-ip6tables=1
EOF

echo -e overlay\\nbr_netfilter > /etc/modules-load.d/k8s.conf

sed -E -i 's/^GRUB_CMDLINE_LINUX="/GRUB_CMDLINE_LINUX="systemd.unified_cgroup_hierarchy=0 /g' /etc/default/grub
grub2-mkconfig -o /boot/grub2/grub.cfg


touch /etc/systemd/zram-generator.conf

sed -E -i 's/^(\[main\])$/\1\ndns=default/g' /etc/NetworkManager/NetworkManager.conf
systemctl disable --now firewalld
systemctl disable --now systemd-resolved
unlink /etc/resolv.conf
touch /etc/resolv.conf
echo "nameserver 172.20.20.254" > /etc/resolv.conf
echo "search srl.nokialab.net" >> /etc/resolv.conf

sudo setenforce 0
sudo sed -i 's/^SELINUX=.*$/SELINUX=disabled/' /etc/selinux/config

#######  reboot  server
reboot

echo "search srl.nokialab.net" >> /etc/resolv.conf
dnf module -y install cri-o:1.20/default
systemctl enable --now cri-o
dnf -y install kubernetes-kubeadm kubernetes-node kubernetes-client cri-tools iproute-tc container-selinux
dnf -y update
dnf -y clean all
hostnamectl set-hostname $(cat /etc/hosts | grep 192.168 | awk '{print $3}')
sed -E -i 's/^KUBELET_ADDRESS=.*$/KUBELET_ADDRESS="--address=0.0.0.0"/g' /etc/kubernetes/kubelet
sed -E -i 's/^# (KUBELET_PORT=.*)$/\1/g' /etc/kubernetes/kubelet
sed -E -i "s/^KUBELET_HOSTNAME=.*$/KUBELET_HOSTNAME=\"--hostname-override=$(hostname)\"/g" /etc/kubernetes/kubelet
sed -E -i 's/^(Environment="KUBELET_EXTRA_ARGS=.*)"$/\1 --container-runtime=remote --container-runtime-endpoint=unix:\/\/\/var\/run\/crio\/crio.sock"/g' /etc/systemd/system/kubelet.service.d/kubeadm.conf
dnf -y install iptables
echo 'NO_PROXY="localhost,127.0.0.1,3.0.0.0/8,192.168.0.0/16,10.0.0.0/8"'  >> /etc/sysconfig/crio
echo 'HTTP_PROXY="http://172.20.20.253:3128"'  >> /etc/sysconfig/crio
echo 'HTTPS_PROXY="http://172.20.20.253:3128"'  >> /etc/sysconfig/crio
systemctl restart cri-o
systemctl enable kubelet.service
kubeadm config images pull

# kubeadm init --apiserver-advertise-address=192.168.101.30 --pod-network-cidr=10.140.0.0/16 --cri-socket=unix:///var/run/crio/crio.sock --kubernetes-version=1.20.5

kubeadm config images pull
#controller: sudo kubeadm init --pod-network-cidr=10.140.0.0/16
#workers: sudo kubeadm join ...

## Install calico
# overwrite your previous config 
sudo mkdir -p $HOME/.kube 
sudo /usr/bin/cp -rf  /etc/kubernetes/admin.conf $HOME/.kube/config 
sudo chown $(id -u):$(id -g) $HOME/.kube/config

# install calico after kubeadm init
kubectl create -f calico.yaml
#and check pods: kubectl get pods --all-namespaces
