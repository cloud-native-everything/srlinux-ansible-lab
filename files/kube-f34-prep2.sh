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

echo "you can use kubeadm init or join now"

## Installing k8s with kubeadm
# >> kubeadm init --apiserver-advertise-address=192.168.101.30 --cri-socket=unix:///var/run/crio/crio.sock --kubernetes-version=1.20.5
# workers: sudo kubeadm join ...

## Install calico
# overwrite your previous config 
# >> sudo mkdir -p $HOME/.kube 
# >> sudo /usr/bin/cp -rf  /etc/kubernetes/admin.conf $HOME/.kube/config 
# >> sudo chown $(id -u):$(id -g) $HOME/.kube/config

# install calico after kubeadm init
# >> kubectl create -f calico.yaml
# and check pods: kubectl get pods --all-namespaces

## Download calicoctl
# >> export https_proxy="http://172.20.20.253:3128"; curl -o calicoctl -O -L  "https://github.com/projectcalico/calicoctl/releases/download/v3.20.0/calicoctl" 
# >> unset https_proxy
# >> chmod ./calicoctl
# >> ./calicoctl get ipPool
# >> ./calicoctl node status
# >> ./calicoctl get ipPool default-ipv4-ippool -o yaml

## Expose services with metallb
# >> kubectl expose deploy hello-node2-deploy --port 8080 --type LoadBalancer

## kubernetes HA cluster
# >> kubeadm init --apiserver-advertise-address=192.168.101.30 --cri-socket=unix:///var/run/crio/crio.sock --kubernetes-version=1.20.5 --upload-certs --control-plane-endpoint=192.168.101.99:6443
# requirements: haproxy
