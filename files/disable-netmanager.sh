guestfish -a $1 -i ln-sf /dev/null /etc/systemd/system/NetworkManager.service
guestfish -a $1 -i ln-sf /dev/null /etc/systemd/system/NetworkManager-dispatcher.service
guestfish -a $1 -i ln-sf /dev/null /etc/systemd/system/NetworkManager-wait-online.service
guestfish -a $1 -i upload /tmp/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
guestfish -a $1 -i upload /tmp/resolv.conf /etc/resolv.conf
guestfish -a $1 -i upload /tmp/network /etc/sysconfig/network
