# SRL Settings

## Setting up clab-srl02-leaf1

```
enter candidate
/interface ethernet-1/1
    description "Interface to Spine1"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 10.1.1.1/31 {
            }
        }
    }
/interface ethernet-1/2
    description "Interface to spine-2"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 10.2.1.1/31 {
            }
        }
    }
/interface ethernet-1/10
    admin-state enable
    subinterface 0 {
        type bridged
        admin-state enable
    }
/interface lo0
    description "Loopback Interface"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 1.1.1.1/32 {
            }
        }
    }
/interface irb0
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 192.168.101.1/24 {
            }
        }
    }
/network-instance default
    admin-state enable
    interface ethernet-1/1.0 {
    }
    interface ethernet-1/2.0 {
    }
    interface irb0.0 {
    }
    interface lo0.0 {
    }
/network-instance layer2
    type mac-vrf
    admin-state enable
    interface ethernet-1/10.0 {
    }
    interface irb0.0 {
    }
/
commit stay
commit save
```

## Setting up clab-srl02-leaf2

```
enter candidate
/interface ethernet-1/1
    description "Interface to Spine1"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 10.1.2.1/31 {
            }
        }
    }
/interface ethernet-1/2
    description "Interface to spine-2"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 10.2.2.1/31 {
            }
        }
    }
/interface ethernet-1/10
    admin-state enable
    subinterface 0 {
        type bridged
        admin-state enable
    }
/interface lo0
    description "Loopback Interface"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 1.1.1.2/32 {
            }
        }
    }
/interface irb0
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 192.168.102.1/24 {
            }
        }
    }
/network-instance default
    admin-state enable
    interface ethernet-1/1.0 {
    }
    interface ethernet-1/2.0 {
    }
    interface irb0.0 {
    }
    interface lo0.0 {
    }
/network-instance layer2
    type mac-vrf
    admin-state enable
    interface ethernet-1/10.0 {
    }
    interface irb0.0 {
    }
/
commit stay
commit save
```

## Setting up clab-srl02-leaf3

```
enter candidate
/interface ethernet-1/1
    description "Interface to Spine1"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 10.1.3.1/31 {
            }
        }
    }
/interface ethernet-1/2
    description "Interface to spine-2"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 10.2.3.1/31 {
            }
        }
    }
/interface ethernet-1/10
    admin-state enable
    subinterface 0 {
        type bridged
        admin-state enable
    }
/interface lo0
    description "Loopback Interface"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 1.1.1.3/32 {
            }
        }
    }
/interface irb0
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 192.168.103.1/24 {
            }
        }
    }
/network-instance default
    admin-state enable
    interface ethernet-1/1.0 {
    }
    interface ethernet-1/2.0 {
    }
    interface irb0.0 {
    }
    interface lo0.0 {
    }
/network-instance layer2
    type mac-vrf
    admin-state enable
    interface ethernet-1/10.0 {
    }
    interface irb0.0 {
    }
/
commit stay
commit save
```


## Setting up clab-srl02-spine1

```
enter candidate
/interface ethernet-1/1
    description "Interface to Leaf1"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 10.1.1.0/31 {
            }
        }
    }
/interface ethernet-1/2
    description "Interface to Leaf2"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 10.1.2.0/31 {
            }
        }
    }
/interface ethernet-1/3
    description "Interface to Leaf3"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 10.1.3.0/31 {
            }
        }
    }
/interface lo0
    description "Loopback Interface"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 1.1.1.11/32 {
            }
        }
    }
/network-instance default
    admin-state enable
    interface ethernet-1/1.0 {
    }
    interface ethernet-1/2.0 {
    }
    interface ethernet-1/3.0 {
    }
    interface lo0.0 {
    }
/
commit stay
commit save
```


## Setting up clab-srl02-spine2

```
enter candidate
/interface ethernet-1/1
    description "Interface to Leaf1"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 10.2.1.0/31 {
            }
        }
    }
/interface ethernet-1/2
    description "Interface to Leaf2"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 10.2.2.0/31 {
            }
        }
    }
/interface ethernet-1/3
    description "Interface to Leaf3"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 10.2.3.0/31 {
            }
        }
    }
/interface lo0
    description "Loopback Interface"
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 1.1.1.12/32 {
            }
        }
    }
/network-instance default
    admin-state enable
    interface ethernet-1/1.0 {
    }
    interface ethernet-1/2.0 {
    }
    interface ethernet-1/3.0 {
    }
    interface lo0.0 {
    }
/
commit stay
commit save
```

# Check neighbors: 
```
show system lldp neighbor
```

# BGP routing settings

## BGP routing settings in Leaf1


```
enter candidate
/network-instance default
protocols bgp {
            autonomous-system 65001
            router-id 1.1.1.1
            group spines {
                export-policy export-hosts
                import-policy pass-all
                peer-as 64999
                failure-detection {
                    enable-bfd true
                    fast-failover true
                }
                timers {
                    minimum-advertisement-interval 1
                }
            }
            neighbor 10.1.1.0 {
                peer-group spines
            }
            neighbor 10.2.1.0 {
                peer-group spines
            }
            route-advertisement {
                rapid-withdrawal true
            }
        }
/bfd
    subinterface ethernet-1/1.0 {
        admin-state enable
    }
    subinterface ethernet-1/2.0 {
        admin-state enable
    }
/network-instance default protocols bgp group spines
    failure-detection {
        enable-bfd true
        fast-failover true
    }
/routing-policy
    prefix-set hosts {
        prefix 1.1.1.1/32 mask-length-range exact {
        }
        prefix 192.168.101.0/24 mask-length-range exact {
        }
    }
    policy export-hosts {
        default-action {
            reject {
            }
        }
        statement 10 {
            match {
                prefix-set hosts
            }
            action {
                accept {
                }
            }
        }
    }
    policy pass-all {
        default-action {
            reject {
            }
        }
        statement 10 {
            match {
                protocol bgp
            }
            action {
                accept {
                }
            }
        }
    }
/
commit stay
commit save
```

## BGP routing settings in Leaf1


```
enter candidate
/network-instance default
protocols bgp {
            autonomous-system 65002
            router-id 1.1.1.2
            group spines {
                export-policy export-hosts
                import-policy pass-all
                peer-as 64999
                failure-detection {
                    enable-bfd true
                    fast-failover true
                }
                timers {
                    minimum-advertisement-interval 1
                }
            }
            neighbor 10.1.2.0 {
                peer-group spines
            }
            neighbor 10.2.2.0 {
                peer-group spines
            }
            route-advertisement {
                rapid-withdrawal true
            }
        }
/bfd
    subinterface ethernet-1/1.0 {
        admin-state enable
    }
    subinterface ethernet-1/2.0 {
        admin-state enable
    }
/network-instance default protocols bgp group spines
    failure-detection {
        enable-bfd true
        fast-failover true
    }
/routing-policy
    prefix-set hosts {
        prefix 1.1.1.2/32 mask-length-range exact {
        }
        prefix 192.168.102.0/24 mask-length-range exact {
        }
    }
    policy export-hosts {
        default-action {
            reject {
            }
        }
        statement 10 {
            match {
                prefix-set hosts
            }
            action {
                accept {
                }
            }
        }
    }
    policy pass-all {
        default-action {
            reject {
            }
        }
        statement 10 {
            match {
                protocol bgp
            }
            action {
                accept {
                }
            }
        }
    }
/
commit stay
commit save
```


## BGP routing settings in Leaf3


```
enter candidate
/network-instance default
protocols bgp {
            autonomous-system 65003
            router-id 1.1.1.3
            group spines {
                export-policy export-hosts
                import-policy pass-all
                peer-as 64999
                failure-detection {
                    enable-bfd true
                    fast-failover true
                }
                timers {
                    minimum-advertisement-interval 1
                }
            }
            neighbor 10.1.3.0 {
                peer-group spines
            }
            neighbor 10.2.3.0 {
                peer-group spines
            }
            route-advertisement {
                rapid-withdrawal true
            }
        }
/bfd
    subinterface ethernet-1/1.0 {
        admin-state enable
    }
    subinterface ethernet-1/2.0 {
        admin-state enable
    }
/network-instance default protocols bgp group spines
    failure-detection {
        enable-bfd true
        fast-failover true
    }
/routing-policy
    prefix-set hosts {
        prefix 1.1.1.3/32 mask-length-range exact {
        }
        prefix 192.168.103.0/24 mask-length-range exact {
        }
    }
    policy export-hosts {
        default-action {
            reject {
            }
        }
        statement 10 {
            match {
                prefix-set hosts
            }
            action {
                accept {
                }
            }
        }
    }
    policy pass-all {
        default-action {
            reject {
            }
        }
        statement 10 {
            match {
                protocol bgp
            }
            action {
                accept {
                }
            }
        }
    }
/
commit stay
commit save
```

## bgp routing settings spine1


```
enter candidate
/network-instance default protocols bgp
    autonomous-system 64999
    router-id 1.1.1.11
    group leaf {
        export-policy underlay
        import-policy pass-all
        failure-detection {
            enable-bfd true
            fast-failover true
        }
        timers {
            minimum-advertisement-interval 1
        }
    }
    group spines {
        failure-detection {
            enable-bfd true
            fast-failover true
        }
    }
    neighbor 10.1.1.1 {
        peer-as 65001
        peer-group leaf
    }
    neighbor 10.1.2.1 {
        peer-as 65002
        peer-group leaf
    }
    neighbor 10.1.3.1 {
        peer-as 65003
        peer-group leaf
    }
    neighbor 10.2.1.1 {
        peer-as 65001
        peer-group leaf
    }
    neighbor 10.2.2.1 {
        peer-as 65002
        peer-group leaf
    }
    neighbor 10.2.3.1 {
        peer-as 65003
        peer-group leaf
    }
    route-advertisement {
        rapid-withdrawal true
    }
/routing-policy
    prefix-set undelay {
        prefix 1.1.1.11/32 mask-length-range exact {
        }
        prefix 192.168.0.0/16 mask-length-range 16..24 {
        }
        prefix 10.1.0.0/22 mask-length-range 22..31 {
        }
        prefix 10.2.0.0/22 mask-length-range 22..31 {
        }
    }
    policy pass-all {
        default-action {
            reject {
            }
        }
        statement 10 {
            match {
                protocol bgp
            }
            action {
                accept {
                }
            }
        }
    }
    policy underlay {
        default-action {
            reject {
            }
        }
        statement 10 {
            match {
                prefix-set undelay
            }
            action {
                accept {
                }
            }
        }
    }
/
commit stay
commit save
```

## bgp routing settings spine2


```
enter candidate
/network-instance default protocols bgp
    autonomous-system 64999
    router-id 1.1.1.12
    group leaf {
        export-policy underlay
        import-policy pass-all
        failure-detection {
            enable-bfd true
            fast-failover true
        }
        timers {
            minimum-advertisement-interval 1
        }
    }
    neighbor 10.1.1.1 {
        peer-as 65001
        peer-group leaf
    }
    neighbor 10.1.2.1 {
        peer-as 65002
        peer-group leaf
    }
    neighbor 10.1.3.1 {
        peer-as 65003
        peer-group leaf
    }
    neighbor 10.2.1.1 {
        peer-as 65001
        peer-group leaf
    }
    neighbor 10.2.2.1 {
        peer-as 65002
        peer-group leaf
    }
    neighbor 10.2.3.1 {
        peer-as 65003
        peer-group leaf
    }
    route-advertisement {
        rapid-withdrawal true
    }
/routing-policy
    prefix-set undelay {
        prefix 1.1.1.12/32 mask-length-range exact {
        }
        prefix 192.168.0.0/16 mask-length-range 16..24 {
        }
        prefix 10.1.0.0/22 mask-length-range 22..31 {
        }
        prefix 10.2.0.0/22 mask-length-range 22..31 {
        }
    }
    policy pass-all {
        default-action {
            reject {
            }
        }
        statement 10 {
            match {
                protocol bgp
            }
            action {
                accept {
                }
            }
        }
    }
    policy underlay {
        default-action {
            reject {
            }
        }
        statement 10 {
            match {
                prefix-set undelay
            }
            action {
                accept {
                }
            }
        }
    }
/
commit stay
commit save
```
