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

# Routing settings

## Routing settings in Leaf1


```
enter candidate
/network-instance default
static-routes {
        route 192.168.201.0/30 {
            admin-state enable
            metric 1
            preference 5
            next-hop-group NHG-leaf-2
        }
    }
    next-hop-groups {
        group NHG-leaf-2 {
            admin-state enable
            nexthop 1 {
                ip-address 10.1.1.0
                admin-state enable
                resolve true
            }
            nexthop 2 {
                ip-address 10.1.2.0
                admin-state enable
                resolve true
            }
        }
    }

/network-instance default
protocols bgp {
            autonomous-system 65001
            router-id 1.1.1.1
            group spines {
                peer-as 64999
                failure-detection {
                    enable-bfd true
                    fast-failover true
                }
                timers {
                    minimum-advertisement-interval 1
                }
            }
            ipv4-unicast {
                multipath {
                    max-paths-level-1 2
                    max-paths-level-2 2
                }
            }
            neighbor 10.1.1.0 {
                export-policy export-hosts
                peer-group spines
            }
            neighbor 10.1.2.0 {
                export-policy export-hosts
                peer-group spines
            }
            route-advertisement {
                rapid-withdrawal true
            }
        }
/routing-policy
prefix-set hosts {
        prefix 192.168.101.0/24 mask-length-range exact {
        }
    }
    community-set no-export {
        member [
            no-export
        ]
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
        statement 20 {
            action {
                accept {
                    bgp {
                        communities {
                            add no-export
                        }
                    }
                }
            }
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
/
commit stay
commit save
```
