nmcli con add type vlan con-name srv-${1} ifname VLAN-${1} dev eth1 id ${1} ip4 192.168.${1}.${2}/24
