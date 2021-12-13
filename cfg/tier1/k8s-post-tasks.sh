echo "" > ~/.ssh/know_hosts
for i in {30,20,21}; do ssh -o StrictHostKeyChecking=no root@172.20.20.$i echo > /dev/null ; done
docker cp ./config-tier1-leaf1-6.js clab-srl02-leaf1:/home/admin/.
docker exec clab-srl02-leaf1 sr_cli --candidate-mode --commit-at-end -- load file /home/admin/config-tier1-leaf1-6.js
for i in {30,20,21}; do scp ../../files/nmcli_*_con.sh root@172.20.20.$i:/root/. ; done
for j in {30,20,21};
do
	for i in {20,252,253}; do ssh root@172.20.20.$j /root/nmcli_del_con.sh $i $j ; done 
done

echo "sleep 15 seconds"
sleep 15

ssh root@172.20.20.30 kubectl delete pods -l k8s-app=calico-node -n kube-system
echo "sleep 180 seconds"
sleep 180
for j in {30,20,21}
do
        for i in {20,252,253}; do ssh root@172.20.20.$j /root/nmcli_add_con.sh $i $j ; done
done
echo "sleep 10 seconds"
sleep 10
ssh root@172.20.20.30 kubectl get pods --all-namespaces
leaf1_ip=`docker exec clab-srl02-leaf1 sr_cli "info from state / interface mgmt0 | grep 172 " | head -1 | awk -F ' ' '{print $2}' | sed -n  's/\(.*[^0-9]\|\)\([0-9]\+\.[0-9]\+\.[0-9]\+\.[0-9]\+\).*/\2/p'`
echo $leaf1_ip

ssh root@172.20.20.30 "cat /root/orca-files/fsc-secret.yaml | sed -r 's/(\b[0-9]{1,3}\.){3}[0-9]{1,3}\b'/$leaf1_ip/ > /root/orca-files/fsc-secret-new.yaml"
ssh root@172.20.20.30 "cat /root/orca-files/fsc-srlinux-secret.yaml | sed -r 's/(\b[0-9]{1,3}\.){3}[0-9]{1,3}\b'/$leaf1_ip/ > /root/orca-files/fsc-srlinux-secret-new.yaml"
ssh root@172.20.20.30 kubectl apply -f /root/orca-files/fsc-secret-new.yaml
ssh root@172.20.20.30 kubectl apply -f /root/orca-files/fsc-srlinux-secret-new.yaml

ssh root@172.20.20.30 kubectl delete pod -l control-plane=controller-manager -n fsc-system

echo "fin"

