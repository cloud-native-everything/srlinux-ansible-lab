rm -rf /var/run/netns/qemu-$1
pid=$(docker inspect -f '{{.State.Pid}}' qemu-$1)
sudo ln -sf /proc/$pid/ns/net /var/run/netns/qemu-$1
br_srl="fss-bridge"

ip netns exec qemu-$1 ip link set eth0 down
ip netns exec qemu-$1 ip link delete eth0

sudo ip link add $1-veth0 type veth peer name $1-veth1
sudo ip link set $1-veth0 netns qemu-$1
sudo ip netns exec qemu-$1 ip link set $1-veth0 name eth0

sudo brctl addif $br_srl $1-veth1

sudo ip netns exec qemu-$1 ip link set eth0 up
sudo ip link set $1-veth1 up

sudo ip link set $1-veth1 mtu 9000
sudo ip netns exec qemu-$1 ip link set eth0 mtu 9000
sudo ip netns exec qemu-$1 ip link set tap0 mtu 9000
sudo ip netns exec qemu-$1 ip link set tap1 mtu 9000
