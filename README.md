# Intro
IMPORTANT: If you havent installed containerlab in advance, stop right here. More details at https://containerlab.srlinux.dev/
Create a server infrastructure on top of srlinux container lab for testing purposes
We assuming you have already installed containerlab for SRL Linux, and you are having a sucessfully deployment of any topology

qemu instances are runnig in a container to make easier the connectivity to srl containers.

This is a high level topology

![High level topology](https://www.cloud-native-everything.com/wp-content/uploads/2021/07/srl-srlinux-evpn-bgp-topology.png)

Details depends on the option you choose: 
srl02-evpn option: EVPN-VXLAN https://github.com/cloud-native-everything/srlinux-ansible-lab/tree/main/cfg/srl02-evpn/READM.md
![BGP overlay Topology option srl02-evpn](https://www.cloud-native-everything.com/wp-content/uploads/2021/07/srl-srlinux-evpn-vxlan-k8s-cluster-calico-topology-overlay-BGP.png)


# Requirements

1. Containerlab and access to download srl images: https://github.com/orgs/nokia/packages/container/package/srlinux
2. Bare Metal server with docker installed and at least 64GB memory and 12 cores.
3. Fedora 34 qcow2 cloud image. I recommend to extend disk to at lest 20G using guestfish

If you have fedora34 as 'baremetal' server, you can use those scripts with all the required steps to prepare it:

Before reboot (fedora34):
```
## disable firewall

systemctl disable --now firewalld
systemctl disable --now systemd-resolved

## disable selinux
sudo setenforce 0
sudo sed -i 's/^SELINUX=.*$/SELINUX=disabled/' /etc/selinux/config

## install git and docker

dnf -y install git
dnf -y install docker
systemctl enable --now docker

## Applying fix for docker. details at https://www.linuxuprising.com/2019/11/how-to-install-and-use-docker-on-fedora.html
dnf -y install grubby
grubby --update-kernel=ALL --args="systemd.unified_cgroup_hierarchy=0"

echo "docker ix in fedora needs reboot"
echo "reboot in 10s"
pause 10
```

After reboot
```
## Install container lab
bash -c "$(curl -sL https://get-clab.srlinux.dev)" -- -v 0.16.1
mkdir clab-quickstart
cd ~/clab-quickstart

## copy license.key (you should contact someone from Nokia to get it)

## guestfish tools
dnf -y install bridge-utils
dnf -y install libguestfs libguestfs-tools qemu-kvm libvirt
system start libvirtd
system enable --now  libvirtd

mkdir -p /home/qemu
chown -R qemu:qemu /home/qemu

## Copy image fedora qcow2 in /home/qemu

## Install gnmic
bash -c "$(curl -sL https://get-gnmic.kmrd.dev)"

## clone project

cd
git clone https://github.com/cloud-native-everything/srlinux-ansible-lab
cd ~/srlinux-ansible-lab
sudo docker build -t srl-lab:0.1 .
```

# Install

Assuming you are cloning this repo in your home folder: ``` ~/srlinux-ansible-lab```

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
I recommend to use the defined topology inside of any of the configuation options inside cfg folder

Example:
```
## Delete previous configuration files
[root@baremetal clab-quickstart]# rm -rf ./clab-srl02
[root@baremetal clab-quickstart]# cp -R ~/srlinux-ansible-lab/cfg/srl02-evpn/clab-srl02 ./clab-srl02
[root@baremetal clab-quickstart]# containerlab deploy --topo ~/srlinux-ansible-lab/cfg/srl02-evpn/srl02.clab.yml
INFO[0000] Parsing & checking topology file: srl02.clab.yml
INFO[0000] Creating lab directory: /root/clab-quickstart/clab-srl02
INFO[0000] Creating root CA
INFO[0000] Creating docker network: Name='clab', IPv4Subnet='172.20.20.0/24', IPv6Subnet='2001:172:20:20::/64', MTU='1500'
INFO[0000] Creating container: client-2
INFO[0000] Creating container: client-3
INFO[0000] Creating container: client-1
INFO[0000] Creating container: client-4
INFO[0000] Creating container: leaf3
INFO[0000] Creating container: leaf1
INFO[0000] Creating container: border
INFO[0000] Creating container: spine2
INFO[0000] Creating container: spine1
INFO[0000] Creating container: leaf2
INFO[0001] Creating virtual wire: client-2:eth1 <--> border:e1-10
INFO[0001] Creating virtual wire: leaf2:e1-2 <--> spine2:e1-2
INFO[0001] Creating virtual wire: leaf1:e1-2 <--> spine2:e1-1
INFO[0001] Creating virtual wire: client-4:eth1 <--> border:e1-12
INFO[0001] Creating virtual wire: client-3:eth1 <--> border:e1-11
INFO[0001] Creating virtual wire: client-1:eth1 <--> leaf1:e1-11
INFO[0001] Creating virtual wire: leaf3:e1-1 <--> spine1:e1-3
INFO[0001] Creating virtual wire: leaf2:e1-1 <--> spine1:e1-2
INFO[0001] Creating virtual wire: leaf3:e1-2 <--> spine2:e1-3
INFO[0001] Creating virtual wire: border:e1-1 <--> spine1:e1-4
INFO[0001] Creating virtual wire: border:e1-2 <--> spine2:e1-4
INFO[0001] Creating virtual wire: leaf1:e1-1 <--> spine1:e1-1
INFO[0002] Writing /etc/hosts file
+----+---------------------+--------------+------------------------+-------+-------+---------+-----------------+----------------------+
| #  |        Name         | Container ID |         Image          | Kind  | Group |  State  |  IPv4 Address   |     IPv6 Address     |
+----+---------------------+--------------+------------------------+-------+-------+---------+-----------------+----------------------+
|  1 | clab-srl02-border   | e42adc8db282 | srlinux                | srl   |       | running | 172.20.20.8/24  | 2001:172:20:20::8/64 |
|  2 | clab-srl02-client-1 | e94e2418b31d | pinrojas/net-test:v0.2 | linux |       | running | 172.20.20.2/24  | 2001:172:20:20::2/64 |
|  3 | clab-srl02-client-2 | 5b9579532f03 | pinrojas/net-test:v0.2 | linux |       | running | 172.20.20.3/24  | 2001:172:20:20::3/64 |
|  4 | clab-srl02-client-3 | d02e912b3a72 | pinrojas/net-test:v0.2 | linux |       | running | 172.20.20.4/24  | 2001:172:20:20::4/64 |
|  5 | clab-srl02-client-4 | 8cffa1764ea0 | pinrojas/net-test:v0.2 | linux |       | running | 172.20.20.5/24  | 2001:172:20:20::5/64 |
|  6 | clab-srl02-leaf1    | 02a0181f4535 | srlinux                | srl   |       | running | 172.20.20.6/24  | 2001:172:20:20::6/64 |
|  7 | clab-srl02-leaf2    | aa06064d7957 | srlinux                | srl   |       | running | 172.20.20.11/24 | 2001:172:20:20::b/64 |
|  8 | clab-srl02-leaf3    | 1696d14f27fe | srlinux                | srl   |       | running | 172.20.20.7/24  | 2001:172:20:20::7/64 |
|  9 | clab-srl02-spine1   | 1093c10a70b9 | srlinux                | srl   |       | running | 172.20.20.10/24 | 2001:172:20:20::a/64 |
| 10 | clab-srl02-spine2   | e4265d22cecc | srlinux                | srl   |       | running | 172.20.20.9/24  | 2001:172:20:20::9/64 |
+----+---------------------+--------------+------------------------+-------+-------+---------+-----------------+----------------------+
```

If you need to recreate your lab, I recommend to use:
```
containerlab destroy --cleanup --topo ~/srlinux-ansible-lab/cfg/srl02-evpn/srl02.clab.yml
```
that way you will clean all configuration files.


KVM instances will connect to the same management bridge used by the srl instances.
Ansible playbook have tasks will auto-detect that bridge. You dont need to do anything.

```
[root@baremetal clab-quickstart]# ip a | grep 'br-'
200: br-6e41ac564147: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    inet 172.20.20.1/24 scope global br-6e41ac564147
202: vethb70c533@if201: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-6e41ac564147 state UP group default
204: veth6466efa@if203: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-6e41ac564147 state UP group default
```

In this case the bridge is br-6e41ac564147
Ansible playbook have tasks will auto-detect that bridge. You dont need to do anything.
This is only informative

# Running playbook

Now it's time to run the playbook and connect QEMU instances to the SRL device.
I added a folder inside cfg to manage different configurations in case is required. You just need to point it with cfg_option

```
ansible-playbook -e cfg_option=srl02-evpn -i servers/hosts playbook-deploy.yml
```

After it finishes, youb have to run other playbook to setup ethernet-1/10 interfaces
You can do that manually
IMPORTANT: the following playbook  will require gnmic client and all certicates should have been created and configured previously.

```
ansible-playbook -e cfg_option=srl02-evpn -i servers/hosts playbook-srl.yml
```

# Destroy configuration

```
ansible-playbook  -e cfg_option=srl01 -i servers/hosts destroy.yml
```


