for j in {30,20,21}
do
        for i in {20,251,252,253,254}; do ssh root@172.20.20.$j /root/nmcli_add_con.sh $i $j ; done
done
