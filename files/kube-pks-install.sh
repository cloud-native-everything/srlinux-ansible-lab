cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-\$basearch
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
exclude=kubelet kubeadm kubectl
EOF

# Set SELinux in permissive mode (effectively disabling it)
sudo setenforce 0
sudo sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config

# Enable iptables bridge routing
cat <<EOF >  /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
sysctl --system


sudo yum -y clean all
sudo yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes
sudo yum -y clean all
systemctl restart kubelet
sudo systemctl enable --now kubelet

# initialize your node. Set the --pod-network-cidr argument to the network segment you will use with Calico

#sudo kubeadm init --pod-network-cidr=10.140.0.0/16
#sudo pause 5

# overwrite your previous config 
#sudo mkdir -p $HOME/.kube 
#sudo /usr/bin/cp -rf  /etc/kubernetes/admin.conf $HOME/.kube/config 
#sudo chown $(id -u):$(id -g) $HOME/.kube/config

# install calico after kubeadm init
# kubectl create -f calico.yaml
# and check pods: kubectl get pods --all-namespaces




