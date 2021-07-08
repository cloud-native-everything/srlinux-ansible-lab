docker exec $1 tc qdisc add dev eth0 ingress
docker exec $1 tc filter add dev eth0 parent ffff: protocol all u32 match u8 0 0 action mirred egress redirect dev tap0
docker exec $1 tc qdisc add dev tap0 ingress
docker exec $1 tc filter add dev tap0 parent ffff: protocol all u32 match u8 0 0 action mirred egress redirect dev eth0
docker exec $1 tc qdisc add dev eth1 ingress
docker exec $1 tc filter add dev eth1 parent ffff: protocol all u32 match u8 0 0 action mirred egress redirect dev tap1
docker exec $1 tc qdisc add dev tap1 ingress
docker exec $1 tc filter add dev tap1 parent ffff: protocol all u32 match u8 0 0 action mirred egress redirect dev eth1
