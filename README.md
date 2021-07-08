
#REQUIRES UPDATE. DO NOT USE!!!
#REQUIRES UPDATE. DO NOT USE!!!
#REQUIRES UPDATE. DO NOT USE!!!

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
I recommend to use the defined topology inside of any of the configuation options inside cfg folder

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

KVM instances will connect to the same management bridge used by the srl instances

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
ansible-playbook  -e cfg_option=srl01 -i servers/hosts playbook-servers.yml

```

# Destroy configuration

```
ansible-playbook  -e cfg_option=srl01 -i servers/hosts destroy-servers.yml
```

# Example, deploy EVPN topology

I will show how I am creating a EVPN topology from the scratch using this application.
You will require gnmic (GNMI client) installed previously in your server.
You can install it using: 
```
bash -c "$(curl -sL https://get-gnmic.kmrd.dev)"
```
More info at https://gnmic.kmrd.dev/

## Considerations
Consider I am using previous settings in this case, including certicates for gnmi connectivity
- All srl instances have certificates installed in a tls profile
- All eBGP, iBGP, EVPN/VPN settings are defined in the containerlab lab folder: srlinux-ansible-lab/cfg/srl02-evpn/clab-srl02 

Details of the settings at https://github.com/cloud-native-everything/srlinux-ansible-lab/blob/main/cfg/srl02-evpn/srl_settings.md

```
[root@baremetal ~]# ls
clab-quickstart srlinux-ansible-lab
[root@baremetal ~]# cd clab-quickstart/
[root@baremetal clab-quickstart]#
[root@baremetal clab-quickstart]# containerlab destroy --cleanup --topo ~/srlinux-ansible-lab/cfg/srl02-evpn/srl02.clab.yml
INFO[0000] Parsing & checking topology file: srl02.clab.yml
INFO[0000] Destroying lab: srl02
INFO[0000] Removed container: clab-srl02-spine1
INFO[0000] Removed container: clab-srl02-leaf1
INFO[0000] Removed container: clab-srl02-leaf2
INFO[0001] Removed container: clab-srl02-leaf3
INFO[0001] Removed container: clab-srl02-spine2
INFO[0001] Removing container entries from /etc/hosts file
INFO[0001] Deleting docker network 'clab'...
[root@baremetal clab-quickstart]# cp -R ~/srlinux-ansible-lab/cfg/srl02-evpn/clab-srl02 ./clab-srl02
[root@baremetal clab-quickstart]# containerlab deploy --topo ~/srlinux-ansible-lab/cfg/srl02-evpn/srl02.clab.yml
INFO[0000] Parsing & checking topology file: srl02.clab.yml
INFO[0000] Creating lab directory: /root/clab-quickstart/clab-srl02
INFO[0000] Creating root CA
INFO[0000] Creating docker network: Name='clab', IPv4Subnet='172.20.20.0/24', IPv6Subnet='2001:172:20:20::/64', MTU='1500'
INFO[0001] Creating container: spine2
INFO[0001] Creating container: leaf1
INFO[0001] Creating container: spine1
INFO[0001] Creating container: leaf2
INFO[0001] Creating container: leaf3
INFO[0001] Creating virtual wire: leaf1:e1-2 <--> spine2:e1-1
INFO[0001] Creating virtual wire: leaf3:e1-1 <--> spine1:e1-3
INFO[0001] Creating virtual wire: leaf2:e1-1 <--> spine1:e1-2
INFO[0001] Creating virtual wire: leaf2:e1-2 <--> spine2:e1-2
INFO[0001] Creating virtual wire: leaf3:e1-2 <--> spine2:e1-3
INFO[0001] Creating virtual wire: leaf1:e1-1 <--> spine1:e1-1
INFO[0001] Writing /etc/hosts file
+---+-------------------+--------------+---------+------+-------+---------+----------------+----------------------+
| # |       Name        | Container ID |  Image  | Kind | Group |  State  |  IPv4 Address  |     IPv6 Address     |
+---+-------------------+--------------+---------+------+-------+---------+----------------+----------------------+
| 1 | clab-srl02-leaf1  | 6ebddf4f430d | srlinux | srl  |       | running | 172.20.20.3/24 | 2001:172:20:20::3/64 |
| 2 | clab-srl02-leaf2  | 89b71f58b550 | srlinux | srl  |       | running | 172.20.20.5/24 | 2001:172:20:20::5/64 |
| 3 | clab-srl02-leaf3  | b7fb8dc13cd9 | srlinux | srl  |       | running | 172.20.20.6/24 | 2001:172:20:20::6/64 |
| 4 | clab-srl02-spine1 | 4c1b4f563494 | srlinux | srl  |       | running | 172.20.20.4/24 | 2001:172:20:20::4/64 |
| 5 | clab-srl02-spine2 | e2cdd72200bb | srlinux | srl  |       | running | 172.20.20.2/24 | 2001:172:20:20::2/64 |
+---+-------------------+--------------+---------+------+-------+---------+----------------+----------------------+
[root@baremetal clab-quickstart]# docker exec -ti srl-ansible bash
bash-4.2# cd /srl-lab/
bash-4.2# ansible-playbook -e cfg_option=srl02-evpn -i servers/hosts playbook-servers.yml

PLAY [baremetals] **********************************************************************************************************************************************************************************************************

TASK [include_vars] ********************************************************************************************************************************************************************************************************
ok: [10.5.0.104]

TASK [Get management BRIDGE for the recently created leaf/spine instances] *************************************************************************************************************************************************
ok: [10.5.0.104]
```

I am excluding the full output from this playbook.
After it's done you can add the ethernet-1/10 interface settings.

```
TASK [Create container for dns-server container at 172.21.21.2] ************************************************************************************************************************************************************
changed: [10.5.0.104]

TASK [start bind service in dns-server] ************************************************************************************************************************************************************************************
changed: [10.5.0.104]

PLAY RECAP *****************************************************************************************************************************************************************************************************************
10.5.0.104                 : ok=36   changed=21   unreachable=0    failed=0    skipped=4    rescued=0    ignored=0

bash-4.2# ansible-playbook -i servers/hosts playbook-srl.yml

PLAY [baremetals] **********************************************************************************************************************************************************************************************************

TASK [get list of srl leaf instances] **************************************************************************************************************************************************************************************
ok: [10.5.0.104]

TASK [DEBUG] ***************************************************************************************************************************************************************************************************************
ok: [10.5.0.104] => (item=clab-srl02-leaf3) => {
    "msg": "item: clab-srl02-leaf3"
}
ok: [10.5.0.104] => (item=clab-srl02-leaf2) => {
    "msg": "item: clab-srl02-leaf2"
}
ok: [10.5.0.104] => (item=clab-srl02-leaf1) => {
    "msg": "item: clab-srl02-leaf1"
}

TASK [Copying certs files] *************************************************************************************************************************************************************************************************
ok: [10.5.0.104] => (item=client.crt)
ok: [10.5.0.104] => (item=client_key.pem)
ok: [10.5.0.104] => (item=rootCA.crt)

TASK [Copying gnmi JSON files] *********************************************************************************************************************************************************************************************
ok: [10.5.0.104] => (item=mac-vrf1-add-interface-e10.json)
ok: [10.5.0.104] => (item=ethernet-10.json)

TASK [add interface ethernet-1/10 to leaf] *********************************************************************************************************************************************************************************
changed: [10.5.0.104] => (item=clab-srl02-leaf3)
changed: [10.5.0.104] => (item=clab-srl02-leaf2)
changed: [10.5.0.104] => (item=clab-srl02-leaf1)

TASK [add interface ethernet-1/10 to mac-vrf1] *****************************************************************************************************************************************************************************
changed: [10.5.0.104] => (item=clab-srl02-leaf3)
changed: [10.5.0.104] => (item=clab-srl02-leaf2)
changed: [10.5.0.104] => (item=clab-srl02-leaf1)

PLAY RECAP *****************************************************************************************************************************************************************************************************************
10.5.0.104                 : ok=6    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
```

And you're done

## Testing

```
[root@baremetal srlinux-ansible-lab]# virsh list
 Id    Name                           State
----------------------------------------------------
 241   worker-A1                      running
 242   worker-A2                      running
 243   ControlA                       running

[root@baremetal srlinux-ansible-lab]# virsh console 241
Connected to domain worker-A1
Escape character is ^]

CentOS Linux 7 (Core)
Kernel 3.10.0-1127.19.1.el7.x86_64 on an x86_64

worker-A1 login: root
Password:
Last login: Wed Jun  2 14:26:32 on ttyS0
[root@worker-A1 ~]#
[root@worker-A1 ~]# ping 192.168.101.1
PING 192.168.101.1 (192.168.101.1) 56(84) bytes of data.
64 bytes from 192.168.101.1: icmp_seq=1 ttl=64 time=2.33 ms
64 bytes from 192.168.101.1: icmp_seq=2 ttl=64 time=4.73 ms

--- 192.168.101.1 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1001ms
rtt min/avg/max/mdev = 2.331/3.531/4.731/1.200 ms
[root@worker-A1 ~]# ping 192.168.101.4
PING 192.168.101.4 (192.168.101.4) 56(84) bytes of data.
64 bytes from 192.168.101.4: icmp_seq=1 ttl=64 time=2.86 ms
64 bytes from 192.168.101.4: icmp_seq=2 ttl=64 time=1.33 ms

--- 192.168.101.4 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1001ms
rtt min/avg/max/mdev = 1.337/2.100/2.864/0.764 ms
[root@worker-A1 ~]# ping 192.168.101.3
PING 192.168.101.3 (192.168.101.3) 56(84) bytes of data.
64 bytes from 192.168.101.3: icmp_seq=1 ttl=64 time=2.51 ms
64 bytes from 192.168.101.3: icmp_seq=2 ttl=64 time=1.39 ms
```
