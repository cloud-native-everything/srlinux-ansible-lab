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
    description leaf1-host1
    admin-state enable
    subinterface 0 {
        type bridged
        admin-state enable
    }
/interface system0
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 1.1.1.1/32 {
            }
        }
    }
/interface irb0 
    subinterface 0 {
        ipv4 {
            address 192.168.101.1/24 {
                anycast-gw true
            }
        }
        anycast-gw {
        }
    }
    subinterface 1 {
        ipv4 {
            address 192.168.201.1/24 {
                anycast-gw true
            }
        }
        anycast-gw {
        }
    }

/tunnel-interface vxlan1
    vxlan-interface 1 {
        type bridged
        ingress {
            vni 1
        }
    }
    vxlan-interface 2 {
        type bridged
        ingress {
            vni 2
        }
    }
/network-instance default
    type default
    admin-state enable
    interface ethernet-1/1.0 {
    }
    interface ethernet-1/2.0 {
    }
    interface system0.0 {
    }
/network-instance mac-vrf1
    type mac-vrf
    admin-state enable
    interface ethernet-1/10.0 {
    }
    interface irb0.0 {
    }
    vxlan-interface vxlan1.1 {
    }
    protocols {
        bgp-evpn {
            bgp-instance 1 {
                admin-state enable
                vxlan-interface vxlan1.1
                evi 1
                ecmp 2
            }
        }
        bgp-vpn {
            bgp-instance 1 {
                route-target {
                    export-rt target:65123:1
                    import-rt target:65123:1
                }
            }
        }
    }
/network-instance mac-vrf2
    type mac-vrf
    admin-state enable
    interface irb0.1 {
    }
    vxlan-interface vxlan1.2 {
    }
    protocols {
        bgp-evpn {
            bgp-instance 1 {
                admin-state enable
                vxlan-interface vxlan1.2
                evi 2
            }
        }
        bgp-vpn {
        }
    }
/network-instance ip-vrf1
    type ip-vrf
    interface irb0.0 {
    }
    interface irb0.1 {
    }
/network-instance default
protocols bgp {
            autonomous-system 65001
            router-id 1.1.1.1
            group eBGP-underlay {
                admin-state enable
                export-policy export-all
                import-policy import-all
                peer-as 64999
                timers {
                    connect-retry 5
                    hold-time 5
                    keepalive-interval 2
                    minimum-advertisement-interval 2
                }    
                failure-detection {
                    enable-bfd true
                    fast-failover true
                }
            }
            group iBGP-evpn {
                admin-state enable
                peer-as 65123
                export-policy export-all
                import-policy import-all
                evpn {
                    admin-state enable
                }
                local-as 65123 {
                }
                timers {
                    minimum-advertisement-interval 1
                }    
                
            }
            neighbor 1.1.1.11 {
                admin-state enable
                peer-group iBGP-evpn
            }
            neighbor 1.1.1.12 {
                admin-state enable
                peer-group iBGP-evpn
            }
            neighbor 10.1.1.0 {
                admin-state enable
                peer-group eBGP-underlay
            }
            neighbor 10.2.1.0 {
                admin-state enable
                peer-group eBGP-underlay
            }
            ipv4-unicast {
                admin-state enable
            }
            trace-options {
                flag packets {
                    modifier detail
                }
                flag update {
                    modifier detail
                }
                flag route {
                    modifier detail
                }
                flag socket {
                    modifier detail
                }
                flag notification {
                    modifier detail
                }
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
/routing-policy
    policy export-all {
        default-action {
            accept {
            }
        }
    }
    policy import-all {
        default-action {
            accept {
            }
        }
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
    description leaf2-host2
    admin-state enable
    subinterface 0 {
        type bridged
        admin-state enable
    }
/interface system0
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 1.1.1.2/32 {
            }
        }
    }
/interface irb0 
    subinterface 0 {
        ipv4 {
            address 192.168.101.1/24 {
                anycast-gw true
            }
        }
        anycast-gw {
        }
    }
    subinterface 1 {
        ipv4 {
            address 192.168.201.1/24 {
                anycast-gw true
            }
        }
        anycast-gw {
        }
    }

/tunnel-interface vxlan1
    vxlan-interface 1 {
        type bridged
        ingress {
            vni 1
        }
    }
    vxlan-interface 2 {
        type bridged
        ingress {
            vni 2
        }
    }
/network-instance default
    type default
    admin-state enable
    interface ethernet-1/1.0 {
    }
    interface ethernet-1/2.0 {
    }
    interface system0.0 {
    }
/network-instance mac-vrf1
    type mac-vrf
    admin-state enable
    interface ethernet-1/10.0 {
    }
    interface irb0.0 {
    }
    vxlan-interface vxlan1.1 {
    }
    protocols {
        bgp-evpn {
            bgp-instance 1 {
                admin-state enable
                vxlan-interface vxlan1.1
                evi 1
                ecmp 2
            }
        }
        bgp-vpn {
            bgp-instance 1 {
                route-target {
                    export-rt target:65123:1
                    import-rt target:65123:1
                }
            }
        }
    }
/network-instance mac-vrf2
    type mac-vrf
    admin-state enable
    interface irb0.1 {
    }
    vxlan-interface vxlan1.2 {
    }
    protocols {
        bgp-evpn {
            bgp-instance 1 {
                admin-state enable
                vxlan-interface vxlan1.2
                evi 2
            }
        }
        bgp-vpn {
        }
    }
/network-instance ip-vrf1
    type ip-vrf
    interface irb0.0 {
    }
    interface irb0.1 {
    }
/network-instance default
protocols bgp {
            autonomous-system 65002
            router-id 1.1.1.2
            group eBGP-underlay {
                admin-state enable
                export-policy export-all
                import-policy import-all
                peer-as 64999
                timers {
                    connect-retry 5
                    hold-time 5
                    keepalive-interval 2
                    minimum-advertisement-interval 2
                }    
                failure-detection {
                    enable-bfd true
                    fast-failover true
                }
            }
            group iBGP-evpn {
                admin-state enable
                peer-as 65123
                export-policy export-all
                import-policy import-all
                evpn {
                    admin-state enable
                }
                local-as 65123 {
                }
                timers {
                    minimum-advertisement-interval 1
                }    
                
            }
            neighbor 1.1.1.11 {
                admin-state enable
                peer-group iBGP-evpn
            }
            neighbor 1.1.1.12 {
                admin-state enable
                peer-group iBGP-evpn
            }
            neighbor 10.1.2.0 {
                admin-state enable
                peer-group eBGP-underlay
            }
            neighbor 10.2.2.0 {
                admin-state enable
                peer-group eBGP-underlay
            }
            ipv4-unicast {
                admin-state enable
            }
            trace-options {
                flag packets {
                    modifier detail
                }
                flag update {
                    modifier detail
                }
                flag route {
                    modifier detail
                }
                flag socket {
                    modifier detail
                }
                flag notification {
                    modifier detail
                }
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
/routing-policy
    policy export-all {
        default-action {
            accept {
            }
        }
    }
    policy import-all {
        default-action {
            accept {
            }
        }
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
    description leaf3-host3
    admin-state enable
    subinterface 0 {
        type bridged
        admin-state enable
    }
/interface system0
    admin-state enable
    subinterface 0 {
        admin-state enable
        ipv4 {
            address 1.1.1.3/32 {
            }
        }
    }
/interface irb0 
    subinterface 0 {
        ipv4 {
            address 192.168.101.1/24 {
                anycast-gw true
            }
        }
        anycast-gw {
        }
    }
    subinterface 1 {
        ipv4 {
            address 192.168.201.1/24 {
                anycast-gw true
            }
        }
        anycast-gw {
        }
    }

/tunnel-interface vxlan1
    vxlan-interface 1 {
        type bridged
        ingress {
            vni 1
        }
    }
    vxlan-interface 2 {
        type bridged
        ingress {
            vni 2
        }
    }
/network-instance default
    type default
    admin-state enable
    interface ethernet-1/1.0 {
    }
    interface ethernet-1/2.0 {
    }
    interface system0.0 {
    }
/network-instance mac-vrf1
    type mac-vrf
    admin-state enable
    interface ethernet-1/10.0 {
    }
    interface irb0.0 {
    }
    vxlan-interface vxlan1.1 {
    }
    protocols {
        bgp-evpn {
            bgp-instance 1 {
                admin-state enable
                vxlan-interface vxlan1.1
                evi 1
                ecmp 2
            }
        }
        bgp-vpn {
            bgp-instance 1 {
                route-target {
                    export-rt target:65123:1
                    import-rt target:65123:1
                }
            }
        }
    }
/network-instance mac-vrf2
    type mac-vrf
    admin-state enable
    interface irb0.1 {
    }
    vxlan-interface vxlan1.2 {
    }
    protocols {
        bgp-evpn {
            bgp-instance 1 {
                admin-state enable
                vxlan-interface vxlan1.2
                evi 2
            }
        }
        bgp-vpn {
        }
    }
/network-instance ip-vrf1
    type ip-vrf
    interface irb0.0 {
    }
    interface irb0.1 {
    }
/network-instance default
protocols bgp {
            autonomous-system 65003
            router-id 1.1.1.3
            group eBGP-underlay {
                admin-state enable
                export-policy export-all
                import-policy import-all
                peer-as 64999
                timers {
                    connect-retry 5
                    hold-time 5
                    keepalive-interval 2
                    minimum-advertisement-interval 2
                }    
                failure-detection {
                    enable-bfd true
                    fast-failover true
                }
            }
            group iBGP-evpn {
                admin-state enable
                peer-as 65123
                export-policy export-all
                import-policy import-all
                evpn {
                    admin-state enable
                }
                local-as 65123 {
                }
                timers {
                    minimum-advertisement-interval 1
                }    
                
            }
            neighbor 1.1.1.11 {
                admin-state enable
                peer-group iBGP-evpn
            }
            neighbor 1.1.1.12 {
                admin-state enable
                peer-group iBGP-evpn
            }
            neighbor 10.1.3.0 {
                admin-state enable
                peer-group eBGP-underlay
            }
            neighbor 10.2.3.0 {
                admin-state enable
                peer-group eBGP-underlay
            }
            ipv4-unicast {
                admin-state enable
            }
            trace-options {
                flag packets {
                    modifier detail
                }
                flag update {
                    modifier detail
                }
                flag route {
                    modifier detail
                }
                flag socket {
                    modifier detail
                }
                flag notification {
                    modifier detail
                }
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
/routing-policy
    policy export-all {
        default-action {
            accept {
            }
        }
    }
    policy import-all {
        default-action {
            accept {
            }
        }
    }
/
commit stay
commit save
```


## Settings Spine1


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
/network-instance default protocols bgp
    autonomous-system 64999
    router-id 1.1.1.11
    group eBGP-underlay {
        export-policy import-all
        import-policy export-all
        failure-detection {
            enable-bfd true
            fast-failover true
        }
        timers {
            minimum-advertisement-interval 1
        }
    }
    group iBGP-evpn {
        admin-state enable
        peer-as 65123
        export-policy export-all
        import-policy import-all
        evpn {
            admin-state enable
        }
        local-as 65123 {
        }
        route-reflector {
            client true
            cluster-id 1.1.1.11
        }
        timers {
            minimum-advertisement-interval 1
        }    
        
    }
    neighbor 10.1.1.1 {
        peer-as 65001
        peer-group eBGP-underlay
    }
    neighbor 10.1.2.1 {
        peer-as 65002
        peer-group eBGP-underlay
    }
    neighbor 10.1.3.1 {
        peer-as 65003
        peer-group eBGP-underlay
    }
    neighbor 10.2.1.1 {
        peer-as 65001
        peer-group eBGP-underlay
    }
    neighbor 10.2.2.1 {
        peer-as 65002
        peer-group eBGP-underlay
    }
    neighbor 10.2.3.1 {
        peer-as 65003
        peer-group eBGP-underlay
    }
    neighbor 1.1.1.1 {
        admin-state enable
        peer-group iBGP-evpn
    }
    neighbor 1.1.1.2 {
        admin-state enable
        peer-group iBGP-evpn
    }
    neighbor 1.1.1.3 {
        admin-state enable
        peer-group iBGP-evpn
    }
    route-advertisement {
        rapid-withdrawal true
    }
    ipv4-unicast {
    admin-state enable
    }
    trace-options {
        flag packets {
            modifier detail
        }
        flag update {
            modifier detail
        }
        flag route {
            modifier detail
        }
        flag socket {
            modifier detail
        }
        flag notification {
            modifier detail
        }
    }
    route-advertisement {
        rapid-withdrawal true
    }
/bfd
    subinterface ethernet-1/1.0 {
        admin-state enable
    }
    subinterface ethernet-1/2.0 {
        admin-state enable
    }
/network-instance default protocols bgp group eBGP-underlay
    failure-detection {
        enable-bfd true
        fast-failover true
    }
/routing-policy
    policy export-all {
        default-action {
            accept {
            }
        }
    }
    policy import-all {
        default-action {
            accept {
            }
        }
    }
/
commit stay
commit save

```

## Settings Spine2


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
/network-instance default protocols bgp
    autonomous-system 64999
    router-id 1.1.1.12
    group eBGP-underlay {
        export-policy import-all
        import-policy export-all
        failure-detection {
            enable-bfd true
            fast-failover true
        }
        timers {
            minimum-advertisement-interval 1
        }
    }
    group iBGP-evpn {
        admin-state enable
        peer-as 65123
        export-policy export-all
        import-policy import-all
        evpn {
            admin-state enable
        }
        local-as 65123 {
        }
        route-reflector {
            client true
            cluster-id 1.1.1.12
        }
        timers {
            minimum-advertisement-interval 1
        }    
        
    }
    neighbor 10.1.1.1 {
        peer-as 65001
        peer-group eBGP-underlay
    }
    neighbor 10.1.2.1 {
        peer-as 65002
        peer-group eBGP-underlay
    }
    neighbor 10.1.3.1 {
        peer-as 65003
        peer-group eBGP-underlay
    }
    neighbor 10.2.1.1 {
        peer-as 65001
        peer-group eBGP-underlay
    }
    neighbor 10.2.2.1 {
        peer-as 65002
        peer-group eBGP-underlay
    }
    neighbor 10.2.3.1 {
        peer-as 65003
        peer-group eBGP-underlay
    }
    neighbor 1.1.1.1 {
        admin-state enable
        peer-group iBGP-evpn
    }
    neighbor 1.1.1.2 {
        admin-state enable
        peer-group iBGP-evpn
    }
    neighbor 1.1.1.3 {
        admin-state enable
        peer-group iBGP-evpn
    }
    route-advertisement {
        rapid-withdrawal true
    }
    ipv4-unicast {
    admin-state enable
    }
    trace-options {
        flag packets {
            modifier detail
        }
        flag update {
            modifier detail
        }
        flag route {
            modifier detail
        }
        flag socket {
            modifier detail
        }
        flag notification {
            modifier detail
        }
    }
    route-advertisement {
        rapid-withdrawal true
    }
/bfd
    subinterface ethernet-1/1.0 {
        admin-state enable
    }
    subinterface ethernet-1/2.0 {
        admin-state enable
    }
/network-instance default protocols bgp group eBGP-underlay
    failure-detection {
        enable-bfd true
        fast-failover true
    }
/routing-policy
    policy export-all {
        default-action {
            accept {
            }
        }
    }
    policy import-all {
        default-action {
            accept {
            }
        }
    }
/
commit stay
commit save

```

