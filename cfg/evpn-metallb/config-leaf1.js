{
  "srl_nokia-acl:acl": {
    "cpm-filter": {
      "ipv4-filter": {
        "statistics-per-entry": true,
        "entry": [
          {
            "sequence-id": 10,
            "description": "Accept incoming ICMP unreachable messages",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "protocol": "icmp",
              "icmp": {
                "type": "dest-unreachable",
                "code": [
                  0,
                  1,
                  2,
                  3,
                  4,
                  13
                ]
              }
            }
          },
          {
            "sequence-id": 20,
            "description": "Accept incoming ICMP time-exceeded messages",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "protocol": "icmp",
              "icmp": {
                "type": "time-exceeded"
              }
            }
          },
          {
            "sequence-id": 30,
            "description": "Accept incoming ICMP parameter problem messages",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "protocol": "icmp",
              "icmp": {
                "type": "param-problem"
              }
            }
          },
          {
            "sequence-id": 40,
            "description": "Accept incoming ICMP echo messages",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "protocol": "icmp",
              "icmp": {
                "type": "echo"
              }
            }
          },
          {
            "sequence-id": 50,
            "description": "Accept incoming ICMP echo-reply messages",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "protocol": "icmp",
              "icmp": {
                "type": "echo-reply"
              }
            }
          },
          {
            "sequence-id": 60,
            "description": "Accept incoming SSH when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 22
              }
            }
          },
          {
            "sequence-id": 70,
            "description": "Accept incoming SSH when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 22
              }
            }
          },
          {
            "sequence-id": 80,
            "description": "Accept incoming Telnet when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 23
              }
            }
          },
          {
            "sequence-id": 90,
            "description": "Accept incoming Telnet when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 23
              }
            }
          },
          {
            "sequence-id": 100,
            "description": "Accept incoming TACACS+ when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 49
              }
            }
          },
          {
            "sequence-id": 110,
            "description": "Accept incoming TACACS+ when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 49
              }
            }
          },
          {
            "sequence-id": 120,
            "description": "Accept incoming DNS response messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "source-port": {
                "operator": "eq",
                "value": 53
              }
            }
          },
          {
            "sequence-id": 130,
            "description": "Accept incoming DHCP messages targeted for BOOTP/DHCP client",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 68
              }
            }
          },
          {
            "sequence-id": 140,
            "description": "Accept incoming TFTP read-request and write-request messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 69
              }
            }
          },
          {
            "sequence-id": 150,
            "description": "Accept incoming HTTP(JSON-RPC) when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 80
              }
            }
          },
          {
            "sequence-id": 160,
            "description": "Accept incoming HTTP(JSON-RPC) when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 80
              }
            }
          },
          {
            "sequence-id": 170,
            "description": "Accept incoming NTP messages from servers",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "source-port": {
                "operator": "eq",
                "value": 123
              }
            }
          },
          {
            "sequence-id": 180,
            "description": "Accept incoming SNMP GET/GETNEXT messages from servers",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 161
              }
            }
          },
          {
            "sequence-id": 190,
            "description": "Accept incoming BGP when the other router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 179
              }
            }
          },
          {
            "sequence-id": 200,
            "description": "Accept incoming BGP when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 179
              }
            }
          },
          {
            "sequence-id": 210,
            "description": "Accept incoming HTTPS(JSON-RPC) when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 443
              }
            }
          },
          {
            "sequence-id": 220,
            "description": "Accept incoming HTTPS(JSON-RPC) when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 443
              }
            }
          },
          {
            "sequence-id": 230,
            "description": "Accept incoming single-hop BFD session messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 3784
              }
            }
          },
          {
            "sequence-id": 240,
            "description": "Accept incoming multi-hop BFD session messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 4784
              }
            }
          },
          {
            "sequence-id": 250,
            "description": "Accept incoming uBFD session messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 6784
              }
            }
          },
          {
            "sequence-id": 260,
            "description": "Accept incoming gNMI messages when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 57400
              }
            }
          },
          {
            "sequence-id": 270,
            "description": "Accept incoming UDP traceroute messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "range": {
                  "start": 33434,
                  "end": 33464
                }
              }
            }
          },
          {
            "sequence-id": 280,
            "description": "Accept incoming ICMP timestamp messages",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "protocol": "icmp",
              "icmp": {
                "type": "timestamp"
              }
            }
          },
          {
            "sequence-id": 290,
            "description": "Accept incoming OSPF messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": 89
            }
          },
          {
            "sequence-id": 300,
            "description": "Accept incoming DHCP relay messages targeted for BOOTP/DHCP server",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 67
              }
            }
          },
          {
            "sequence-id": 310,
            "description": "Accept ICMP fragment packets",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "fragment": true,
              "protocol": "icmp"
            }
          },
          {
            "sequence-id": 320,
            "description": "Accept incoming LDP packets",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "udp",
              "source-port": {
                "operator": "eq",
                "value": 646
              }
            }
          },
          {
            "sequence-id": 330,
            "description": "Accept incoming LDP packets with source-port 646",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 646
              }
            }
          },
          {
            "sequence-id": 340,
            "description": "Accept incoming LDP packets with destination-port 646",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "protocol": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 646
              }
            }
          },
          {
            "sequence-id": 350,
            "description": "Drop all else",
            "action": {
              "drop": {
                "log": true
              }
            }
          }
        ]
      },
      "ipv6-filter": {
        "statistics-per-entry": true,
        "entry": [
          {
            "sequence-id": 10,
            "description": "Accept incoming ICMPv6 unreachable messages",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "dest-unreachable",
                "code": [
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6
                ]
              }
            }
          },
          {
            "sequence-id": 20,
            "description": "Accept incoming ICMPv6 packet-too-big messages",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "packet-too-big"
              }
            }
          },
          {
            "sequence-id": 30,
            "description": "Accept incoming ICMPv6 time-exceeded messages",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "time-exceeded"
              }
            }
          },
          {
            "sequence-id": 40,
            "description": "Accept incoming ICMPv6 parameter problem messages",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "param-problem"
              }
            }
          },
          {
            "sequence-id": 50,
            "description": "Accept incoming ICMPv6 echo-request messages",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "echo-request"
              }
            }
          },
          {
            "sequence-id": 60,
            "description": "Accept incoming ICMPv6 echo-reply messages",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "echo-reply"
              }
            }
          },
          {
            "sequence-id": 70,
            "description": "Accept incoming ICMPv6 router-advertisement messages",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "router-advertise"
              }
            }
          },
          {
            "sequence-id": 80,
            "description": "Accept incoming ICMPv6 neighbor-solicitation messages",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "neighbor-solicit"
              }
            }
          },
          {
            "sequence-id": 90,
            "description": "Accept incoming ICMPv6 neighbor-advertisement messages",
            "action": {
              "accept": {
                "rate-limit": {
                  "system-cpu-policer": "icmp"
                }
              }
            },
            "match": {
              "next-header": "icmp6",
              "icmp6": {
                "type": "neighbor-advertise"
              }
            }
          },
          {
            "sequence-id": 100,
            "description": "Accept incoming SSH when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 22
              }
            }
          },
          {
            "sequence-id": 110,
            "description": "Accept incoming SSH when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 22
              }
            }
          },
          {
            "sequence-id": 120,
            "description": "Accept incoming Telnet when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 23
              }
            }
          },
          {
            "sequence-id": 130,
            "description": "Accept incoming Telnet when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 23
              }
            }
          },
          {
            "sequence-id": 140,
            "description": "Accept incoming TACACS+ when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 49
              }
            }
          },
          {
            "sequence-id": 150,
            "description": "Accept incoming TACACS+ when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 49
              }
            }
          },
          {
            "sequence-id": 160,
            "description": "Accept incoming DNS response messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "source-port": {
                "operator": "eq",
                "value": 53
              }
            }
          },
          {
            "sequence-id": 170,
            "description": "Accept incoming TFTP read-request and write-request messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 69
              }
            }
          },
          {
            "sequence-id": 180,
            "description": "Accept incoming HTTP(JSON-RPC) when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 80
              }
            }
          },
          {
            "sequence-id": 190,
            "description": "Accept incoming HTTP(JSON-RPC) when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 80
              }
            }
          },
          {
            "sequence-id": 200,
            "description": "Accept incoming NTP messages from servers",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "source-port": {
                "operator": "eq",
                "value": 123
              }
            }
          },
          {
            "sequence-id": 210,
            "description": "Accept incoming SNMP GET/GETNEXT messages from servers",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 161
              }
            }
          },
          {
            "sequence-id": 220,
            "description": "Accept incoming BGP when the other router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 179
              }
            }
          },
          {
            "sequence-id": 230,
            "description": "Accept incoming BGP when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 179
              }
            }
          },
          {
            "sequence-id": 240,
            "description": "Accept incoming HTTPS(JSON-RPC) when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 443
              }
            }
          },
          {
            "sequence-id": 250,
            "description": "Accept incoming HTTPS(JSON-RPC) when this router initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "source-port": {
                "operator": "eq",
                "value": 443
              }
            }
          },
          {
            "sequence-id": 260,
            "description": "Accept incoming DHCPv6 client messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 546
              }
            }
          },
          {
            "sequence-id": 270,
            "description": "Accept incoming single-hop BFD session messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 3784
              }
            }
          },
          {
            "sequence-id": 280,
            "description": "Accept incoming multi-hop BFD session messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 4784
              }
            }
          },
          {
            "sequence-id": 290,
            "description": "Accept incoming uBFD session messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 6784
              }
            }
          },
          {
            "sequence-id": 300,
            "description": "Accept incoming gNMI messages when the other host initiates the TCP connection",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "tcp",
              "destination-port": {
                "operator": "eq",
                "value": 57400
              }
            }
          },
          {
            "sequence-id": 310,
            "description": "Accept incoming UDP traceroute messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "range": {
                  "start": 33434,
                  "end": 33464
                }
              }
            }
          },
          {
            "sequence-id": 320,
            "description": "Accept incoming IPV6 hop-in-hop messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": 0
            }
          },
          {
            "sequence-id": 330,
            "description": "Accept incoming IPV6 fragment header messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": 44
            }
          },
          {
            "sequence-id": 340,
            "description": "Accept incoming OSPF messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": 89
            }
          },
          {
            "sequence-id": 350,
            "description": "Accept incoming DHCPv6 relay messages",
            "action": {
              "accept": {
                
              }
            },
            "match": {
              "next-header": "udp",
              "destination-port": {
                "operator": "eq",
                "value": 547
              }
            }
          },
          {
            "sequence-id": 360,
            "description": "Drop all else",
            "action": {
              "drop": {
                "log": true
              }
            }
          }
        ]
      }
    },
    "policers": {
      "system-cpu-policer": [
        {
          "name": "icmp",
          "entry-specific": false,
          "peak-packet-rate": 1000,
          "max-packet-burst": 1000
        }
      ]
    }
  },
  "srl_nokia-bfd:bfd": {
    "subinterface": [
      {
        "id": "ethernet-1/1.0",
        "admin-state": "enable"
      },
      {
        "id": "ethernet-1/2.0",
        "admin-state": "enable"
      }
    ]
  },
  "srl_nokia-interfaces:interface": [
    {
      "name": "ethernet-1/1",
      "description": "Interface to Spine1",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ip-mtu": 5000,
          "ipv4": {
            "address": [
              {
                "ip-prefix": "10.1.1.1/31"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "ethernet-1/2",
      "description": "Interface to spine-2",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ip-mtu": 5000,
          "ipv4": {
            "address": [
              {
                "ip-prefix": "10.2.1.1/31"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "ethernet-1/3",
      "admin-state": "enable"
    },
    {
      "name": "ethernet-1/12",
      "admin-state": "enable",
      "srl_nokia-interfaces-vlans:vlan-tagging": true,
      "subinterface": [
        {
          "index": 0,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable",
          "srl_nokia-interfaces-vlans:vlan": {
            "encap": {
              "single-tagged": {
                "vlan-id": 10
              }
            }
          }
        },
        {
          "index": 20,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable",
          "srl_nokia-interfaces-vlans:vlan": {
            "encap": {
              "single-tagged": {
                "vlan-id": 20
              }
            }
          }
        }
      ]
    },
    {
      "name": "ethernet-1/13",
      "admin-state": "enable",
      "srl_nokia-interfaces-vlans:vlan-tagging": true,
      "subinterface": [
        {
          "index": 0,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable",
          "srl_nokia-interfaces-vlans:vlan": {
            "encap": {
              "single-tagged": {
                "vlan-id": 10
              }
            }
          }
        },
        {
          "index": 20,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable",
          "srl_nokia-interfaces-vlans:vlan": {
            "encap": {
              "single-tagged": {
                "vlan-id": 20
              }
            }
          }
        }
      ]
    },
    {
      "name": "ethernet-1/14",
      "admin-state": "enable",
      "srl_nokia-interfaces-vlans:vlan-tagging": true,
      "subinterface": [
        {
          "index": 0,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable",
          "srl_nokia-interfaces-vlans:vlan": {
            "encap": {
              "single-tagged": {
                "vlan-id": 10
              }
            }
          }
        }
      ]
    },
    {
      "name": "irb0",
      "subinterface": [
        {
          "index": 0,
          "ipv4": {
            "address": [
              {
                "ip-prefix": "192.168.101.1/24",
                "anycast-gw": true
              }
            ],
            "srl_nokia-interfaces-nbr:arp": {
              "learn-unsolicited": true,
              "host-route": {
                "populate": [
                  {
                    "route-type": "dynamic"
                  }
                ]
              },
              "srl_nokia-interfaces-nbr-evpn:evpn": {
                "advertise": [
                  {
                    "route-type": "dynamic"
                  }
                ]
              }
            }
          },
          "anycast-gw": {
            
          }
        }
      ]
    },
    {
      "name": "lo1",
      "description": "Loopback Interface",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ipv4": {
            "address": [
              {
                "ip-prefix": "6.5.3.1/32"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "mgmt0",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ipv4": {
            "srl_nokia-interfaces-ip-dhcp:dhcp-client": {
              
            }
          },
          "ipv6": {
            "srl_nokia-interfaces-ip-dhcp:dhcp-client": {
              
            }
          }
        }
      ]
    },
    {
      "name": "system0",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ipv4": {
            "address": [
              {
                "ip-prefix": "1.1.1.1/32"
              }
            ]
          }
        }
      ]
    }
  ],
  "srl_nokia-system:system": {
    "srl_nokia-aaa:aaa": {
      "authentication": {
        "idle-timeout": 7200,
        "authentication-method": [
          "local"
        ],
        "user": [
          {
            "username": "pinrojas",
            "password": "$ar2$kJs2xZ+ZC7Q=$ackiAahFz/WYPCnOkcV/OA==",
            "role": [
              "gnmi"
            ]
          }
        ]
      },
      "authorization": {
        "role": [
          {
            "rolename": "gnmi"
          }
        ]
      },
      "server-group": [
        {
          "name": "local"
        }
      ]
    },
    "srl_nokia-gnmi-server:gnmi-server": {
      "admin-state": "enable",
      "timeout": 7200,
      "rate-limit": 100,
      "session-limit": 30,
      "network-instance": [
        {
          "name": "mgmt",
          "admin-state": "enable",
          "use-authentication": true,
          "port": 57400,
          "tls-profile": "tls-profile-1"
        }
      ]
    },
    "srl_nokia-tls:tls": {
      "server-profile": [
        {
          "name": "clab-profile",
          "key": "$aes$fCg+QJfc/YCo=$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",
          "certificate": "-----BEGIN CERTIFICATE-----\nMIIEAzCCAuugAwIBAgIUcyQ3bUci9G7pLi+M74eqfaSa69gwDQYJKoZIhvcNAQEL\nBQAwXzELMAkGA1UEBhMCQkUxEDAOBgNVBAcTB0FudHdlcnAxDjAMBgNVBAoTBU5v\na2lhMRYwFAYDVQQLEw1Db250YWluZXIgbGFiMRYwFAYDVQQDEw1zcmwwMiBSb290\nIENBMB4XDTIxMTIwMzIwMDkwMFoXDTIyMTIwMzIwMDkwMFowYDELMAkGA1UEBhMC\nQkUxEDAOBgNVBAcTB0FudHdlcnAxDjAMBgNVBAoTBU5va2lhMRYwFAYDVQQLEw1D\nb250YWluZXIgbGFiMRcwFQYDVQQDEw5sZWFmMS5zcmwwMi5pbzCCASIwDQYJKoZI\nhvcNAQEBBQADggEPADCCAQoCggEBAMNOKvZnp2hY0Vg7BTqSX/mdsv41f7KXsZtG\njmFkDmNPHDu3g+hXU1H62HB9gLL72zhn4OIdPYcDozh7qxSmn1KdtsVQ6H8E/hWl\nG0xPvmPIdbJDRlKfi68L+SvkxN78vIQ9KDhIBYwKjfqvS1ftOmg79QcT+BLDRj0O\nikaEE3Q3huVp7bSkHi0GVsn4LKph0uC8P6qq5+JMS8kEZXEOGwcQ9InZrE0jSEpO\nstvLiGTWl6lCKcMGkZYYirijOCtj2rVQPt6zaPc63IiZbr4I37CZYS+RhtHKi7wB\nxW5iKCh5HIo2M529xp2k4Zqm8BJfPEyQo1AxBJfuw/xnuDY3ckUCAwEAAaOBtTCB\nsjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMC\nMAwGA1UdEwEB/wQCMAAwHQYDVR0OBBYEFC9XbpTRq09dsN3/NK4DlAtSh9mkMB8G\nA1UdIwQYMBaAFKfXojSWD1N72oHw+mjAmvsDGGN+MDMGA1UdEQQsMCqCBWxlYWYx\nghBjbGFiLXNybDAyLWxlYWYxgg9sZWFmMS5zcmwwMi4uaW8wDQYJKoZIhvcNAQEL\nBQADggEBAJr7MGk5r4P3DMi0qfkLt360BTFR48tgGuHNJ1ngJNRC6wCv77ureDKW\nCLjXHyjLYBk+XgqbBQBA5sIeUEIsl03wKdP6CHivCQ2tSE16d81lZEIF7q9e7kun\n15zA1mb34HGNsfliG971tnmNyARXnVtGDu3Mnq8zY/e+DJpz1Ma6Pt2R28fcZ5yj\nsB22enF7Zpiq6ozjATzpZQNBQLlBtrZg8juFWqyNt6N5Q/jonsFoCeIs4arSQoN8\n5/Hj+xJ7Zir518ov4SWFbT59SwqxemDNJKqvXfYezjGFKC/vHWT2inVP55E0kGVF\nr9R6PmTpPM7RX8o2bjYo0bNK5tNtn9M=\n-----END CERTIFICATE-----\n",
          "authenticate-client": false
        },
        {
          "name": "tls-profile-1",
          "key": "$aes$aoGbVND0JX0E=$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",
          "certificate": "-----BEGIN CERTIFICATE-----\nMIIDpjCCAo6gAwIBAgIJAOMhrE6Rcp65MA0GCSqGSIb3DQEBCwUAMH4xCzAJBgNV\nBAYTAlVTMQ4wDAYDVQQIDAVUZXhhczEPMA0GA1UEBwwGRGFsbGFzMQ4wDAYDVQQK\nDAVOb2tpYTELMAkGA1UECwwCTkkxDTALBgNVBAMMBG15Q0ExIjAgBgkqhkiG9w0B\nCQEWE21hdS5yb2phc0Bub2tpYS5jb20wHhcNMjEwNjE3MTYyNDQ0WhcNMjQwNDA2\nMTYyNDQ0WjBbMQswCQYDVQQGEwJVUzEOMAwGA1UECAwFVGV4YXMxDzANBgNVBAcM\nBkRhbGxhczEOMAwGA1UECgwFTm9raWExCzAJBgNVBAsMAk5JMQ4wDAYDVQQDDAVs\nZWFmMTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALhvtDZuhh4Q+MKd\ns9KG0uY+XXzpAg7h627GrVutP7bZ9nqx48qnmIucC3214+1vh0zLNMM6LXVKzitC\nj8YUkYTnoN1v3RqU7Y7BlpaVKaRjXG0N2I4Hdr5/5Hm+K6hAD+Vbo2f7CNomUwlx\nLxiQuwuBz9qtvSpuLG5fHtClmFOK6NQ100tmyvFTN04CWRQKWXW8CyRo8WITx6dg\nAoiKKvQi9Gs5lNHGhdPYBvtjXyi5D37et0xTwDHBAgzzrq7TnX5t3mCVv/PiD3Z+\nuqfZMJCvDeaPyN8TgJv1MQgW5k3nM8lIWGV5cI+ZpGweZBFOjnfkVDS5fKOIZP+s\nFBjx2LUCAwEAAaNKMEgwCQYDVR0TBAIwADALBgNVHQ8EBAMCBeAwHQYDVR0lBBYw\nFAYIKwYBBQUHAwEGCCsGAQUFBwMCMA8GA1UdEQQIMAaHBKwUFAQwDQYJKoZIhvcN\nAQELBQADggEBADbE+l/D2dIa1+hzyw1vskVoTuii6vdWUxNkSqV0AGAlEUEiGaiT\nouhTtxH1faKMkUKs1RonuTs5JjVVerJvuKDPKBny5kF11k/ClczOqWKx/FUSQJZ9\n63sTpX5rbldyARUNfrQBnQgYpcJo93a7D1juBld/BxpFYwaeFAr2pAgrsIA0wadE\nd49thlHb2ZX0V3PqTC5X+OvTBO9BjbsiaAzUlsF8UdSbk9OgITwVw1Uxd1jjtT8J\nHlLQWu23L2xlNTutmA1pJDW0ZhEo9k8IhwE7yev3NJce7xIyoWazrp91SNibX8/u\noYrHxeHlAOoKsHjSlB8aXER1nnl4PeKCVb4=\n-----END CERTIFICATE-----",
          "authenticate-client": false
        }
      ]
    },
    "srl_nokia-json-rpc:json-rpc-server": {
      "admin-state": "enable",
      "network-instance": [
        {
          "name": "mgmt",
          "http": {
            "admin-state": "enable"
          },
          "https": {
            "admin-state": "enable",
            "tls-profile": "clab-profile"
          }
        }
      ]
    },
    "srl_nokia-ssh:ssh-server": {
      "network-instance": [
        {
          "name": "mgmt",
          "admin-state": "enable"
        }
      ]
    },
    "srl_nokia-lldp:lldp": {
      "admin-state": "enable",
      "management-address": [
        {
          "subinterface": "mgmt0.0"
        }
      ],
      "interface": [
        {
          "name": "ethernet-1/12",
          "admin-state": "enable"
        },
        {
          "name": "ethernet-1/13",
          "admin-state": "enable"
        },
        {
          "name": "ethernet-1/14",
          "admin-state": "enable"
        }
      ]
    },
    "srl_nokia-logging:logging": {
      "buffer": [
        {
          "buffer-name": "messages",
          "rotate": 3,
          "size": "10000000",
          "facility": [
            {
              "facility-name": "local6",
              "priority": {
                "match-above": "informational"
              }
            }
          ]
        },
        {
          "buffer-name": "system",
          "facility": [
            {
              "facility-name": "auth",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "cron",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "daemon",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "ftp",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "kern",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "lpr",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "mail",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "news",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "syslog",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "user",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "uucp",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "local0",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "local1",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "local2",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "local3",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "local4",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "local5",
              "priority": {
                "match-above": "warning"
              }
            },
            {
              "facility-name": "local7",
              "priority": {
                "match-above": "warning"
              }
            }
          ]
        }
      ],
      "file": [
        {
          "file-name": "messages",
          "rotate": 3,
          "size": "10000000",
          "facility": [
            {
              "facility-name": "local6",
              "priority": {
                "match-above": "warning"
              }
            }
          ]
        }
      ]
    }
  },
  "srl_nokia-network-instance:network-instance": [
    {
      "name": "default",
      "type": "srl_nokia-network-instance:default",
      "admin-state": "enable",
      "interface": [
        {
          "name": "ethernet-1/1.0"
        },
        {
          "name": "ethernet-1/2.0"
        },
        {
          "name": "system0.0"
        }
      ],
      "protocols": {
        "srl_nokia-bgp:bgp": {
          "autonomous-system": 65001,
          "router-id": "1.1.1.1",
          "group": [
            {
              "group-name": "eBGP-underlay",
              "admin-state": "enable",
              "export-policy": "export-all",
              "import-policy": "import-all",
              "peer-as": 64999,
              "failure-detection": {
                "enable-bfd": true,
                "fast-failover": true
              },
              "timers": {
                "connect-retry": 5,
                "hold-time": 5,
                "keepalive-interval": 2,
                "minimum-advertisement-interval": 2
              }
            },
            {
              "group-name": "iBGP-evpn",
              "admin-state": "enable",
              "import-policy": "evpn-type5",
              "peer-as": 65123,
              "evpn": {
                "admin-state": "enable"
              },
              "local-as": [
                {
                  "as-number": 65123
                }
              ],
              "timers": {
                "minimum-advertisement-interval": 1
              }
            },
            {
              "group-name": "spines",
              "failure-detection": {
                "enable-bfd": true,
                "fast-failover": true
              }
            }
          ],
          "ipv4-unicast": {
            "admin-state": "enable"
          },
          "neighbor": [
            {
              "peer-address": "1.1.1.11",
              "admin-state": "enable",
              "peer-group": "iBGP-evpn"
            },
            {
              "peer-address": "1.1.1.12",
              "admin-state": "enable",
              "peer-group": "iBGP-evpn"
            },
            {
              "peer-address": "10.1.1.0",
              "admin-state": "enable",
              "peer-group": "eBGP-underlay"
            },
            {
              "peer-address": "10.2.1.0",
              "admin-state": "enable",
              "peer-group": "eBGP-underlay"
            }
          ],
          "route-advertisement": {
            "rapid-withdrawal": true
          },
          "trace-options": {
            "flag": [
              {
                "name": "packets",
                "modifier": "detail"
              },
              {
                "name": "route",
                "modifier": "detail"
              },
              {
                "name": "notification",
                "modifier": "detail"
              },
              {
                "name": "socket",
                "modifier": "detail"
              },
              {
                "name": "update",
                "modifier": "detail"
              }
            ]
          }
        }
      }
    },
    {
      "name": "ip-vrf1",
      "type": "srl_nokia-network-instance:ip-vrf",
      "interface": [
        {
          "name": "irb0.0"
        },
        {
          "name": "lo1.0"
        }
      ],
      "vxlan-interface": [
        {
          "name": "vxlan1.4"
        }
      ],
      "protocols": {
        "bgp-evpn": {
          "srl_nokia-bgp-evpn:bgp-instance": [
            {
              "id": 1,
              "admin-state": "enable",
              "vxlan-interface": "vxlan1.4",
              "evi": 4,
              "ecmp": 4
            }
          ]
        },
        "srl_nokia-bgp:bgp": {
          "admin-state": "enable",
          "autonomous-system": 65310,
          "router-id": "6.5.3.1",
          "dynamic-neighbors": {
            "accept": {
              "match": [
                {
                  "prefix": "6.4.5.0/26",
                  "peer-group": "metallb-bgp",
                  "allowed-peer-as": [
                    "65201"
                  ]
                },
                {
                  "prefix": "192.168.101.0/24",
                  "peer-group": "calico-bgp",
                  "allowed-peer-as": [
                    "64512"
                  ]
                }
              ]
            }
          },
          "ebgp-default-policy": {
            "import-reject-all": false,
            "export-reject-all": false
          },
          "group": [
            {
              "group-name": "border",
              "peer-as": 65390
            },
            {
              "group-name": "calico-bgp",
              "admin-state": "enable",
              "description": "Just a test for TMO Magenta",
              "export-policy": "export-calico",
              "import-policy": "import-all",
              "timers": {
                "connect-retry": 120,
                "hold-time": 90,
                "minimum-advertisement-interval": 1
              },
              "transport": {
                "local-address": "6.5.3.1"
              }
            },
            {
              "group-name": "metallb-bgp",
              "admin-state": "enable",
              "description": "Just a test for MetalLB 2",
              "export-policy": "export-all",
              "import-policy": "import-metallb-pool",
              "timers": {
                "connect-retry": 120,
                "hold-time": 90,
                "minimum-advertisement-interval": 1
              },
              "transport": {
                "local-address": "6.5.3.1"
              }
            }
          ],
          "ipv4-unicast": {
            "multipath": {
              "allow-multiple-as": true,
              "max-paths-level-1": 16,
              "max-paths-level-2": 16
            }
          },
          "neighbor": [
            {
              "peer-address": "6.5.3.9",
              "export-policy": "export-all",
              "peer-group": "border",
              "timers": {
                "connect-retry": 120,
                "hold-time": 90,
                "minimum-advertisement-interval": 1
              },
              "transport": {
                "local-address": "6.5.3.1"
              }
            }
          ]
        },
        "srl_nokia-bgp-vpn:bgp-vpn": {
          "bgp-instance": [
            {
              "id": 1,
              "route-target": {
                "export-rt": "target:65123:4",
                "import-rt": "target:65123:4"
              }
            }
          ]
        }
      },
      "srl_nokia-static-routes:static-routes": {
        "route": [
          {
            "prefix": "6.4.5.20/32",
            "next-hop-group": "wk-a1"
          },
          {
            "prefix": "6.4.5.22/32",
            "next-hop-group": "wk-a3"
          }
        ]
      },
      "srl_nokia-next-hop-groups:next-hop-groups": {
        "group": [
          {
            "name": "ctl-a1",
            "admin-state": "enable",
            "nexthop": [
              {
                "index": 1,
                "ip-address": "192.168.101.30"
              }
            ]
          },
          {
            "name": "ctl-a2",
            "admin-state": "enable",
            "nexthop": [
              {
                "index": 1,
                "ip-address": "192.168.101.31"
              }
            ]
          },
          {
            "name": "ctl-a3",
            "admin-state": "enable",
            "nexthop": [
              {
                "index": 1,
                "ip-address": "192.168.101.32"
              }
            ]
          },
          {
            "name": "wk-a1",
            "admin-state": "enable",
            "nexthop": [
              {
                "index": 1,
                "ip-address": "192.168.101.20"
              }
            ]
          },
          {
            "name": "wk-a2",
            "admin-state": "enable",
            "nexthop": [
              {
                "index": 1,
                "ip-address": "192.168.101.21"
              }
            ]
          },
          {
            "name": "wk-a3",
            "admin-state": "enable",
            "nexthop": [
              {
                "index": 1,
                "ip-address": "192.168.101.22"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "mac-vrf1",
      "type": "srl_nokia-network-instance:mac-vrf",
      "admin-state": "enable",
      "interface": [
        {
          "name": "ethernet-1/12.0"
        },
        {
          "name": "ethernet-1/13.0"
        },
        {
          "name": "ethernet-1/14.0"
        },
        {
          "name": "irb0.0"
        }
      ],
      "vxlan-interface": [
        {
          "name": "vxlan1.1"
        }
      ],
      "protocols": {
        "bgp-evpn": {
          "srl_nokia-bgp-evpn:bgp-instance": [
            {
              "id": 1,
              "admin-state": "enable",
              "vxlan-interface": "vxlan1.1",
              "evi": 1
            }
          ]
        },
        "srl_nokia-bgp-vpn:bgp-vpn": {
          "bgp-instance": [
            {
              "id": 1,
              "route-target": {
                "export-rt": "target:65123:1",
                "import-rt": "target:65123:1"
              }
            }
          ]
        }
      }
    },
    {
      "name": "mac-vrf2",
      "type": "srl_nokia-network-instance:mac-vrf",
      "admin-state": "enable",
      "interface": [
        {
          "name": "ethernet-1/12.20"
        },
        {
          "name": "ethernet-1/13.20"
        }
      ],
      "vxlan-interface": [
        {
          "name": "vxlan1.6"
        }
      ],
      "protocols": {
        "bgp-evpn": {
          "srl_nokia-bgp-evpn:bgp-instance": [
            {
              "id": 1,
              "admin-state": "enable",
              "vxlan-interface": "vxlan1.6",
              "evi": 6
            }
          ]
        },
        "srl_nokia-bgp-vpn:bgp-vpn": {
          "bgp-instance": [
            {
              "id": 1,
              "route-target": {
                "export-rt": "target:65123:6",
                "import-rt": "target:65123:6"
              }
            }
          ]
        }
      }
    },
    {
      "name": "mgmt",
      "type": "srl_nokia-network-instance:ip-vrf",
      "admin-state": "enable",
      "description": "Management network instance",
      "interface": [
        {
          "name": "mgmt0.0"
        }
      ],
      "protocols": {
        "srl_nokia-linux:linux": {
          "import-routes": true,
          "export-routes": true,
          "export-neighbors": true
        }
      }
    }
  ],
  "srl_nokia-routing-policy:routing-policy": {
    "prefix-set": [
      {
        "name": "calico-network-10.96",
        "prefix": [
          {
            "ip-prefix": "10.96.0.0/12",
            "mask-length-range": "12..32"
          }
        ]
      },
      {
        "name": "calico-network-172",
        "prefix": [
          {
            "ip-prefix": "172.0.0.0/8",
            "mask-length-range": "8..32"
          }
        ]
      },
      {
        "name": "calico-network-192-168",
        "prefix": [
          {
            "ip-prefix": "192.168.0.0/16",
            "mask-length-range": "16..32"
          }
        ]
      },
      {
        "name": "k8s-loop-6.4.5",
        "prefix": [
          {
            "ip-prefix": "6.4.5.0/26",
            "mask-length-range": "26..32"
          }
        ]
      },
      {
        "name": "metallb-pool",
        "prefix": [
          {
            "ip-prefix": "10.254.254.0/24",
            "mask-length-range": "24..32"
          }
        ]
      }
    ],
    "policy": [
      {
        "name": "bgp-vpn-metallb",
        "default-action": {
          "accept": {
            
          }
        },
        "statement": [
          {
            "sequence-id": 10,
            "match": {
              "prefix-set": "metallb-pool"
            },
            "action": {
              "reject": {
                
              }
            }
          }
        ]
      },
      {
        "name": "evpn-type5",
        "statement": [
          {
            "sequence-id": 10,
            "match": {
              "prefix-set": "metallb-pool",
              "bgp": {
                "evpn": {
                  "route-type": [
                    5
                  ]
                }
              }
            },
            "action": {
              "reject": {
                
              }
            }
          },
          {
            "sequence-id": 999,
            "action": {
              "accept": {
                
              }
            }
          }
        ]
      },
      {
        "name": "export-all",
        "default-action": {
          "accept": {
            
          }
        }
      },
      {
        "name": "export-calico",
        "default-action": {
          "reject": {
            
          }
        },
        "statement": [
          {
            "sequence-id": 10,
            "match": {
              "prefix-set": "calico-network-172"
            },
            "action": {
              "accept": {
                
              }
            }
          },
          {
            "sequence-id": 30,
            "match": {
              "prefix-set": "calico-network-10.96"
            },
            "action": {
              "accept": {
                
              }
            }
          }
        ]
      },
      {
        "name": "import-all",
        "default-action": {
          "accept": {
            
          }
        }
      },
      {
        "name": "import-metallb-pool",
        "statement": [
          {
            "sequence-id": 10,
            "match": {
              "prefix-set": "metallb-pool"
            },
            "action": {
              "accept": {
                "bgp": {
                  "local-preference": {
                    "set": 300
                  }
                }
              }
            }
          }
        ]
      }
    ]
  },
  "srl_nokia-tunnel-interfaces:tunnel-interface": [
    {
      "name": "vxlan1",
      "vxlan-interface": [
        {
          "index": 1,
          "type": "srl_nokia-interfaces:bridged",
          "ingress": {
            "vni": 1
          }
        },
        {
          "index": 2,
          "type": "srl_nokia-interfaces:bridged",
          "ingress": {
            "vni": 2
          }
        },
        {
          "index": 4,
          "type": "srl_nokia-interfaces:routed",
          "ingress": {
            "vni": 4
          }
        },
        {
          "index": 6,
          "type": "srl_nokia-interfaces:bridged",
          "ingress": {
            "vni": 6
          }
        }
      ]
    }
  ]
}