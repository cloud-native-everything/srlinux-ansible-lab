# Some examples how to use cli advanced features

## Show commands

### Show route-table example
```
A:leaf1# show network-instance default route-table all
----------------------------------------------------------------------------------------------------------------------------------------------------------------
IPv4 Unicast route table of network instance default
----------------------------------------------------------------------------------------------------------------------------------------------------------------
+-------------------------------+-------+------------+-----------------+---------+-------+-------------------------------------------+-------------------+
|            Prefix             |  ID   |   Active   |      Owner      | Metric  | Pref  |              Next-hop (Type)              |     Next-hop      |
|                               |       |            |                 |         |       |                                           |     Interface     |
+===============================+=======+============+=================+=========+=======+===========================================+===================+
| 1.1.1.1/32                    | 0     | true       | host            | 0       | 0     | None (extract)                            | None              |
| 1.1.1.2/32                    | 0     | true       | bgp             | 0       | 170   | 10.1.1.0 (indirect)                       | None              |
| 1.1.1.3/32                    | 0     | true       | bgp             | 0       | 170   | 10.1.1.0 (indirect)                       | None              |
| 1.1.1.11/32                   | 0     | true       | bgp             | 0       | 170   | 10.1.1.0 (indirect)                       | None              |
| 1.1.1.12/32                   | 0     | true       | bgp             | 0       | 170   | 10.2.1.0 (indirect)                       | None              |
| 10.1.1.0/31                   | 0     | true       | local           | 0       | 0     | 10.1.1.1 (direct)                         | ethernet-1/1.0    |
| 10.1.1.1/32                   | 0     | true       | host            | 0       | 0     | None (extract)                            | None              |
| 10.1.2.0/31                   | 0     | true       | bgp             | 0       | 170   | 10.1.1.0 (indirect)                       | None              |
| 10.1.3.0/31                   | 0     | true       | bgp             | 0       | 170   | 10.1.1.0 (indirect)                       | None              |
| 10.2.1.0/31                   | 0     | true       | local           | 0       | 0     | 10.2.1.1 (direct)                         | ethernet-1/2.0    |
| 10.2.1.1/32                   | 0     | true       | host            | 0       | 0     | None (extract)                            | None              |
| 10.2.2.0/31                   | 0     | true       | bgp             | 0       | 170   | 10.2.1.0 (indirect)                       | None              |
| 10.2.3.0/31                   | 0     | true       | bgp             | 0       | 170   | 10.2.1.0 (indirect)                       | None              |
| 192.168.101.0/24              | 0     | true       | local           | 0       | 0     | 192.168.101.1 (direct)                    | irb0.0            |
| 192.168.101.1/32              | 0     | true       | host            | 0       | 0     | None (extract)                            | None              |
| 192.168.101.255/32            | 0     | true       | host            | 0       | 0     | None (broadcast)                          | None              |
| 192.168.102.0/24              | 0     | true       | bgp             | 0       | 170   | 10.1.1.0 (indirect)                       | None              |
| 192.168.103.0/24              | 0     | true       | bgp             | 0       | 170   | 10.1.1.0 (indirect)                       | None              |
+-------------------------------+-------+------------+-----------------+---------+-------+-------------------------------------------+-------------------+
----------------------------------------------------------------------------------------------------------------------------------------------------------------
18 IPv4 routes total
18 IPv4 prefixes with active routes
0 IPv4 prefixes with active ECMP routes
----------------------------------------------------------------------------------------------------------------------------------------------------------------
```

### Show platform

```
A:leaf1# show platform
  +-------------+----+-------------+-------------------+-------------------------------+--------------------------+
  | Module Type | ID | Admin State | Operational State |             Model             |       Last Change        |
  +=============+====+=============+===================+===============================+==========================+
  | control     | A  | N/A         | up                | imm48-25g-sfp28+8-100g-qsfp28 | 2021-06-15T19:13:10.336Z |
  | linecard    | 1  | N/A         | empty             |                               |                          |
  +-------------+----+-------------+-------------------+-------------------------------+--------------------------+
--{ + running }--[  ]--
```

## Info commands

You can use 'info' or 'info from state'.
'info' just show settings. 'info from state' gives you also the actual state of the datastore. latter gives you a lot of more info, including stats and operational state. 

### Info from bgp neighbors

```
A:leaf1# info from state network-instance default protocols bgp neighbor *
    network-instance default {
        protocols {
            bgp {
                neighbor 10.1.1.0 {
                    admin-state enable
                    description uplink1
                    under-maintenance false
                    maintenance-group ""
                    export-policy export-hosts
                    import-policy pass-all
                    local-preference 100
                    next-hop-self false
                    peer-as 64999
                    peer-group spines
                    session-state established
                    last-state active
                    last-event recvOpen
                    last-established "10 minutes ago"
                    established-transitions 2
                    last-notification-error-code Cease
                    last-notification-error-subcode "Administrative Shutdown"
                    advertised-capabilities [
                        ROUTE_REFRESH
                        4-OCTET_ASN
                        MP_BGP
                        GRACEFUL_RESTART
                    ]
                    received-capabilities [
                        ROUTE_REFRESH
                        4-OCTET_ASN
                        MP_BGP
                        GRACEFUL_RESTART
                    ]
                    received-afi-safi [
                        ipv4-unicast
                    ]
                    received-end-of-rib [
                        ipv4-unicast
                    ]
                    sent-end-of-rib [
                        ipv4-unicast
                    ]
                    as-path-options {
                        allow-own-as 0
                        replace-peer-as false
                        remove-private-as {
                            mode disabled
                            leading-only false
                            ignore-peer-as false
                        }
                    }
                    failure-detection {
                        enable-bfd true
                        fast-failover true
                    }
                    graceful-restart {
                        admin-state disable
                        stale-routes-time 360
                        number-of-restarts 0
                        last-restart-time "11 minutes ago"
                        neighbor-capability {
                            restart-time 120
                        }
                    }
                    ipv4-unicast {
                        admin-state enable
                        oper-state up
                        advertise-ipv6-next-hops false
                        receive-ipv6-next-hops false
                        received-routes 8
                        sent-routes 2
                        active-routes 7
                        rejected-routes 0
                        prefix-limit {
                            max-received-routes 4294967295
                            warning-threshold-pct 90
                        }
                    }
                    ipv6-unicast {
                        admin-state disable
                        oper-state down
                        received-routes 0
                        sent-routes 0
                        active-routes 0
                        rejected-routes 0
                        prefix-limit {
                            max-received-routes 4294967295
                            warning-threshold-pct 90
                        }
                    }
                    evpn {
                        admin-state disable
                        oper-state down
                        advertise-ipv6-next-hops false
                        received-routes 0
                        sent-routes 0
                        active-routes 0
                        rejected-routes 0
                        prefix-limit {
                            warning-threshold-pct 90
                        }
                    }
                    local-as 65001 {
                        prepend-global-as true
                        prepend-local-as true
                    }
                    route-reflector {
                        client false
                    }
                    send-community {
                        standard true
                        large true
                    }
                    send-default-route {
                        ipv4-unicast false
                        ipv6-unicast false
                    }
                    timers {
                        connect-retry 120
                        hold-time 90
                        keepalive-interval 30
                        minimum-advertisement-interval 1
                        negotiated-hold-time 90
                        negotiated-keepalive-interval 30
                    }
                    transport {
                        tcp-mss 1024
                        passive-mode false
                        local-address 10.1.1.1
                        local-port 53076
                        remote-port 179
                    }
                    sent-messages {
                        queue-depth 0
                        total-updates 2
                        total-non-updates 23
                        route-refresh 0
                        total-messages 25
                    }
                    received-messages {
                        queue-depth 0
                        total-updates 4
                        total-non-updates 23
                        malformed-updates 0
                        route-refresh 0
                        total-messages 27
                    }
                }
                neighbor 10.2.1.0 {
                    admin-state enable
                    description uplink2
                    under-maintenance false
                    maintenance-group ""
                    export-policy export-hosts
                    import-policy pass-all
                    local-preference 100
                    next-hop-self false
                    peer-as 64999
                    peer-group spines
                    session-state established
                    last-state active
                    last-event recvOpen
                    last-established "30 minutes ago"
                    established-transitions 1
                    advertised-capabilities [
                        ROUTE_REFRESH
                        4-OCTET_ASN
                        MP_BGP
                        GRACEFUL_RESTART
                    ]
                    received-capabilities [
                        ROUTE_REFRESH
                        4-OCTET_ASN
                        MP_BGP
                        GRACEFUL_RESTART
                    ]
                    received-afi-safi [
                        ipv4-unicast
                    ]
                    received-end-of-rib [
                        ipv4-unicast
                    ]
                    sent-end-of-rib [
                        ipv4-unicast
                    ]
                    as-path-options {
                        allow-own-as 0
                        replace-peer-as false
                        remove-private-as {
                            mode disabled
                            leading-only false
                            ignore-peer-as false
                        }
                    }
                    failure-detection {
                        enable-bfd true
                        fast-failover true
                    }
                    graceful-restart {
                        admin-state disable
                        stale-routes-time 360
                        number-of-restarts 0
                        last-restart-time "34 minutes ago"
                        neighbor-capability {
                            restart-time 120
                        }
                    }
                    ipv4-unicast {
                        admin-state enable
                        oper-state up
                        advertise-ipv6-next-hops false
                        receive-ipv6-next-hops false
                        received-routes 8
                        sent-routes 2
                        active-routes 3
                        rejected-routes 0
                        prefix-limit {
                            max-received-routes 4294967295
                            warning-threshold-pct 90
                        }
                    }
                    ipv6-unicast {
                        admin-state disable
                        oper-state down
                        received-routes 0
                        sent-routes 0
                        active-routes 0
                        rejected-routes 0
                        prefix-limit {
                            max-received-routes 4294967295
                            warning-threshold-pct 90
                        }
                    }
                    evpn {
                        admin-state disable
                        oper-state down
                        advertise-ipv6-next-hops false
                        received-routes 0
                        sent-routes 0
                        active-routes 0
                        rejected-routes 0
                        prefix-limit {
                            warning-threshold-pct 90
                        }
                    }
                    local-as 65001 {
                        prepend-global-as true
                        prepend-local-as true
                    }
                    route-reflector {
                        client false
                    }
                    send-community {
                        standard true
                        large true
                    }
                    send-default-route {
                        ipv4-unicast false
                        ipv6-unicast false
                    }
                    timers {
                        connect-retry 120
                        hold-time 90
                        keepalive-interval 30
                        minimum-advertisement-interval 1
                        negotiated-hold-time 90
                        negotiated-keepalive-interval 30
                    }
                    transport {
                        tcp-mss 1024
                        passive-mode false
                        local-address 10.2.1.1
                        local-port 36194
                        remote-port 179
                    }
                    sent-messages {
                        queue-depth 0
                        total-updates 2
                        total-non-updates 62
                        route-refresh 0
                        total-messages 64
                    }
                    received-messages {
                        queue-depth 0
                        total-updates 4
                        total-non-updates 63
                        malformed-updates 0
                        route-refresh 0
                        total-messages 67
                    }
                }
            }
        }
    }
--{ + running }--[  ]--
```

## Info commands with filters

```
--{ + running }--[  ]--
A:leaf1# info from state network-instance default protocols bgp neighbor * | filter fields admin-state session-state
    network-instance default {
        protocols {
            bgp {
                neighbor 10.1.1.0 {
                    admin-state enable
                    session-state established
                }
                neighbor 10.2.1.0 {
                    admin-state enable
                    session-state established
                }
            }
        }
    }
--{ + running }--[  ]--
```

## Info commands as json and as a table

```
--{ + running }--[  ]--
A:leaf1# info from state network-instance default protocols bgp neighbor * | filter fields admin-state session-state | as json
{
  "network-instance": [
    {
      "name": "default",
      "protocols": {
        "bgp": {
          "neighbor": [
            {
              "peer-address": "10.1.1.0",
              "admin-state": "enable",
              "session-state": "established"
            },
            {
              "peer-address": "10.2.1.0",
              "admin-state": "enable",
              "session-state": "established"
            }
          ]
        }
      }
    }
  ]
}
--{ + running }--[  ]--
A:leaf1# info from state network-instance default protocols bgp neighbor * | filter fields admin-state session-state | as table
+-------------------------------------------------------------+------------------------------------------------------------------+-------------+---------------+
|                      Network-instance                       |                           Peer-address                           | Admin-state | Session-state |
+=============================================================+==================================================================+=============+===============+
| default                                                     | 10.1.1.0                                                         | enable      | established   |
| default                                                     | 10.2.1.0                                                         | enable      | established   |
+-------------------------------------------------------------+------------------------------------------------------------------+-------------+---------------+
--{ + running }--[  ]--
```

## Creating alias

### Alias for info commands
```
--{ + running }--[  ]--
A:leaf1# info from state network-instance default protocols bgp neighbor * | filter fields admin-state session-state | as table
--{ + running }--[  ]--
A:leaf1# environment alias mybgp "info from state network-instance default protocols bgp neighbor * | filter fields admin-state session-state | as table"
--{ + running }--[  ]--
A:leaf1# mybgp
+-------------------------------------------------------------+------------------------------------------------------------------+-------------+---------------+
|                      Network-instance                       |                           Peer-address                           | Admin-state | Session-state |
+=============================================================+==================================================================+=============+===============+
| default                                                     | 10.1.1.0                                                         | enable      | established   |
| default                                                     | 10.2.1.0                                                         | enable      | established   |
+-------------------------------------------------------------+------------------------------------------------------------------+-------------+---------------+
--{ + running }--[  ]--
```


### Alias with argument
```
--{ + running }--[  ]--
A:leaf1# environment alias mybgp "info from state network-instance default protocols bgp neighbor {} | filter fields admin-state session-state | as table"
--{ + running }--[  ]--
A:leaf1# mybgp 10.1.1.0
+-------------------------------------------------------------+------------------------------------------------------------------+-------------+---------------+
|                      Network-instance                       |                           Peer-address                           | Admin-state | Session-state |
+=============================================================+==================================================================+=============+===============+
| default                                                     | 10.1.1.0                                                         | enable      | established   |
+-------------------------------------------------------------+------------------------------------------------------------------+-------------+---------------+
--{ + running }--[  ]--
A:leaf1# environment alias mybgp "info from state network-instance default protocols bgp neighbor {neighbor} | filter fields admin-state session-state | as tabl
e"
--{ + running }--[  ]--
A:leaf1# mybgp neighbor 10.1.1.0
+-------------------------------------------------------------+------------------------------------------------------------------+-------------+---------------+
|                      Network-instance                       |                           Peer-address                           | Admin-state | Session-state |
+=============================================================+==================================================================+=============+===============+
| default                                                     | 10.1.1.0                                                         | enable      | established   |
+-------------------------------------------------------------+------------------------------------------------------------------+-------------+---------------+
--{ + running }--[  ]--
```





