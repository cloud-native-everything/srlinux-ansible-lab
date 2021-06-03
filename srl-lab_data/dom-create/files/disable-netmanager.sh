guestfish -a $1 -i ln-sf /dev/null /etc/systemd/system/NetworkManager.service
guestfish -a $1 -i ln-sf /dev/null /etc/systemd/system/NetworkManager-dispatcher.service
guestfish -a $1 -i ln-sf /dev/null /etc/systemd/system/NetworkManager-wait-online.service
guestfish -a $1 -i upload /tmp/temp-ifcfg-eth /etc/sysconfig/network-scripts/ifcfg-eth0
