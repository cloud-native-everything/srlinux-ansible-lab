# Intro
IMPORTANT: If you havent installed containerlab in advance, stop right here. More details at https://containerlab.srlinux.dev/
Create a Kubernetes lab on top of srlinux container lab for testing purposes
We assuming you have already installed containerlab for SRL Linux, and you are having a sucessfully deployment of any topology

# Install

Assuming you are cloning this repo in your home folder

```
sudo docker build -t srl-lab:0.1 .
sudo docker run -d -t -i --name srl-ansible -v ~/srlinux-ansible-lab:/srl-lab srl-ansible:0.1
sudo docker exec -ti srl-ansible bash
```

As soon as you are inside te container, you have to create your own ssh keys and ssh-copy-id to the host that would be affected with the tasks

```
cd
ssh-keygen -t rsa
cp /root/.ssh/* .ssh/. 
ssh-copy-id root@10.99.99.1
```

Don't forget to modify the hosts inventory file (i.e. servers/hosts )

# Preping
IMPORTANT: If you havent installed containerlab in advance, stop right here. More details at https://containerlab.srlinux.dev/

Example:
```
## Delete previous configuration files
[root@baremetal clab-quickstart]# rm -rf ./clab-srl01
[root@baremetal clab-quickstart]# containerlab deploy --topo ~/srlinux-ansible-lab/cfg/srl01/srl01.clab.yml
INFO[0000] Parsing & checking topology file: srl01.clab.yml
INFO[0000] Creating lab directory: /root/clab-quickstart/clab-srl01
INFO[0000] Creating docker network: Name='clab', IPv4Subnet='172.20.20.0/24', IPv6Subnet='2001:172:20:20::/64', MTU='1500'
INFO[0000] Creating container: leaf1
INFO[0000] Creating container: leaf2
INFO[0000] Creating virtual wire: leaf1:e1-1 <--> leaf2:e1-1
INFO[0000] Writing /etc/hosts file
INFO[0000] 🎉 New containerlab version 0.14.4 is available! Release notes: https://containerlab.srlinux.dev/rn/0.14.4
Run 'containerlab version upgrade' to upgrade or go check other installation options at https://containerlab.srlinux.dev/install/
+---+------------------+--------------+---------+------+-------+---------+----------------+----------------------+
| # |       Name       | Container ID |  Image  | Kind | Group |  State  |  IPv4 Address  |     IPv6 Address     |
+---+------------------+--------------+---------+------+-------+---------+----------------+----------------------+
| 1 | clab-srl01-leaf1 | 5ca26d284c2d | srlinux | srl  |       | running | 172.20.20.3/24 | 2001:172:20:20::3/64 |
| 2 | clab-srl01-leaf2 | 53c991329c16 | srlinux | srl  |       | running | 172.20.20.2/24 | 2001:172:20:20::2/64 |
+---+------------------+--------------+---------+------+-------+---------+----------------+----------------------+
```

After deploying, check the bridge created by the lab for the management network:
```
[root@baremetal clab-quickstart]# ip a | grep 'br-'
200: br-6e41ac564147: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    inet 172.20.20.1/24 scope global br-6e41ac564147
202: vethb70c533@if201: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-6e41ac564147 state UP group default
204: veth6466efa@if203: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-6e41ac564147 state UP group default
```

In this case the bridge is br-6e41ac564147

# Running playbook

Now it's time to run the playbook and connect KVM domains of you K8s instances to the SRL device.

I added a folder inside cfg to manage different configurations in case is required. You just need to point it with cfg_option

```
ansible-playbook -e mgmt_bridge='br-6e41ac564147' -e cfg_option=srl01 -i servers/hosts playbook-servers.yml

```

# Destroy configuration

```
ansible-playbook -e mgmt_bridge='br-6e41ac564147' -e  cfg_option=srl01 -i servers/hosts destroy-servers.yml
```
