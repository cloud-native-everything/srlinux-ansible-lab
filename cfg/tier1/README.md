# Notes

## Checking out the k8s install of the fiest controller
```
[root@ctl-a1 ~]# kubectl get pods --all-namespaces
NAMESPACE     NAME                             READY   STATUS    RESTARTS   AGE
kube-system   coredns-74ff55c5b-hcgnl          0/1     Pending   0          90s
kube-system   coredns-74ff55c5b-hn6fg          0/1     Pending   0          90s
kube-system   etcd-ctl-a1                      1/1     Running   0          92s
kube-system   kube-apiserver-ctl-a1            1/1     Running   0          92s
kube-system   kube-controller-manager-ctl-a1   1/1     Running   0          92s
kube-system   kube-proxy-bcfcg                 1/1     Running   0          90s
kube-system   kube-scheduler-ctl-a1            1/1     Running   0          92s
```


## Install Helm
To install helm, you need proxy settings:
```
export HTTPS_PROXY="http://172.20.20.253:3128"
export NO_PROXY="localhost,127.0.0.1,3.0.0.0/8,172.0.0.0/8,192.168.0.0/16,10.0.0.0/8"
export VERIFY_CHECKSUM=false
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh
```


## Install Cilium
After installing helm, you can proceed installing cilium
```
helm repo add cilium https://helm.cilium.io/
helm install cilium cilium/cilium --version 1.10.0 --namespace kube-system --set operator.replicas=1
```

Check out the install
```
[root@ctl-a1 ~]# kubectl get pods --all-namespaces
NAMESPACE     NAME                               READY   STATUS    RESTARTS   AGE
kube-system   cilium-operator-656654bd5c-928dc   1/1     Running   0          8m22s
kube-system   cilium-tr9d5                       1/1     Running   0          8m22s
kube-system   coredns-74ff55c5b-hcgnl            0/1     Running   4          16m
kube-system   coredns-74ff55c5b-hn6fg            0/1     Running   3          16m
kube-system   etcd-ctl-a1                        1/1     Running   0          16m
kube-system   kube-apiserver-ctl-a1              1/1     Running   0          16m
kube-system   kube-controller-manager-ctl-a1     1/1     Running   0          16m
kube-system   kube-proxy-bcfcg                   1/1     Running   0          16m
kube-system   kube-scheduler-ctl-a1              1/1     Running   0          16m
```
