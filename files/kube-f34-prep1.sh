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
echo "rebooting server in 10 seconds"
pause 10
reboot

