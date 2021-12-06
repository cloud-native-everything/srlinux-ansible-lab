# srl02-evpn option configuration

This folder contain configurations to create your containerlab and also global var for the k8s based in qemu containers deployment

## BGP underlay topology

![BGP underlay Topology option srl02-evpn](https://www.cloud-native-everything.com/wp-content/uploads/2021/07/srl-srlinux-evpn-vxlan-k8s-cluster-calico-topology-underlay-BGP.png)

Spines are interconnecting all leaf instances.
Then, leaf instances communicates via spines.
Also, we have defined a border leaf to connect external clients (constainers) and simulate some scenarios.

## BGP overlay topology

![BGP overlay Topology option srl02-evpn](https://www.cloud-native-everything.com/wp-content/uploads/2021/07/srl-srlinux-evpn-vxlan-k8s-cluster-calico-topology-overlay-BGP.png)

Spines works as router reflector for BGP overlay routes
We have defined bridged vxlan tunnels for K8s instances, they wil be inthe same broadcasti or layer2  domain.
Border leaf have different subnet that will be connected via Layer3 or routed vxlan tunnel.
