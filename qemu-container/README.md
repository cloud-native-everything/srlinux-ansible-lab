#Image build

```
docker build -t pinrojas/qemu:v0.2 .
```

#Example of use

```
docker run -ti --rm --privileged --device /dev/kvm --name qemu-container --network none -v /home/qemu/f34-test.qcow2:/tmp/f34-test.qcow2  -e QEMU_HDA=/tmp/f34-test.qcow2 -e QEMU_CPU=4 -e QEMU_RAM=4096 pinrojas/qemu:v0.2
```
