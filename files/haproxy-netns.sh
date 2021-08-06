## usage: ./haproxy-netns.sh clab-srl02-leaf1 e1-19 
## reload haproxy.cfg: docker kill -s HUP <container-name>
## check settings in haproxy: curl -k https://ip-address:6443/livez?verbose
## check settings in haproxy: curl -k https://ip-address:6443/healthz
## docker run -d --name k8s-haproxy -p 6443:6443 -v /root/haproxy:/usr/local/etc/haproxy haproxy
## source: https://www.linuxtechi.com/setup-highly-available-kubernetes-cluster-kubeadm/

rm -rf /var/run/netns/k8s-haproxy
pid=$(docker inspect -f '{{.State.Pid}}' k8s-haproxy)
sudo ln -sf /proc/$pid/ns/net /var/run/netns/k8s-haproxy
br_srl=$(brctl show | grep 'br-' | grep 'veth' | awk '{print $1}')

ip netns exec k8s-haproxy ip link set eth0 down
ip netns exec k8s-haproxy ip link delete eth0

sudo ip link add hap-veth0 type veth peer name hap-veth1
sudo ip link set hap-veth0 netns k8s-haproxy
sudo ip netns exec k8s-haproxy ip link set hap-veth0 name eth0

sudo ip link set hap-veth1 netns $1
sudo ip netns exec $1 ip link set hap-veth1 name $2

sudo ip netns exec k8s-haproxy ip link set eth0 up
sudo ip netns exec $1 ip link set $2 up
