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
      "description": "Interface to Leaf1",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ip-mtu": 5000,
          "ipv4": {
            "address": [
              {
                "ip-prefix": "10.2.1.0/31"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "ethernet-1/2",
      "description": "Interface to Leaf2",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ip-mtu": 5000,
          "ipv4": {
            "address": [
              {
                "ip-prefix": "10.2.2.0/31"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "ethernet-1/4",
      "description": "Interface to Leaf3",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ip-mtu": 5000,
          "ipv4": {
            "address": [
              {
                "ip-prefix": "10.2.4.0/31"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "lo0",
      "description": "Loopback Interface",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ipv4": {
            "address": [
              {
                "ip-prefix": "1.1.1.12/32"
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
    }
  ],
  "srl_nokia-system:system": {
    "srl_nokia-aaa:aaa": {
      "authentication": {
        "idle-timeout": 7200,
        "authentication-method": [
          "local"
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
      "rate-limit": 60,
      "session-limit": 20,
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
          "key": "$aes$baTJtI+D1BEU=$2h6COU8CbnI8kYwtXurwQASuDaNvgmQLr2mSXE1A82llDcn6aD295ACdNlnmbO7ZPEj/qjx5oZPlnzsD9+FiXeoL/J2tUFxo/MCzFQlvClXmzjhbO11zUZYd9JWMEyO6aAU1HtiX20DtynEjKe+VIvPITCzlAL1VUX0vf/iR3pqsGJaBPxsJPIDgV+GGmmM6zMReL03A6wCulbXDnuGnsQjz76tCuwQ3dcvsSx2amN++AwfKb41KL4aDUk5uSmvdAyvsfpZi69Hfxvp4tj17xgUQkioJti9flf+wnOCPWcNbo0SkmzGXEGffUhkO+WFeXaYZ3vYZZrU0ucIVm+CpFZC8hlsG8I629Ifwa4pFQ3EK4a7/M55IS7wBW/Lo1cnk1BOxs4ulHrqt6QzlpBUW2I0RYJBa6TemzLVZWs79YkWTJmPOYvFXrWUtTyJqDD4p28etHz+S3APYhKEXdxdaotU2uwIq0xrTw1OM1ma/zyNxOTr8/nef31/N38rN/bKgGsUnLZTgg8Oa/kHn4jEPDpIql4zm09vvsLUK89NJezRNEJZ9DcpB5RPQQqTOLVVLZZpOgR2R6TwpsPQIQyhrZQ9IQ61bzjh0xKEQxfJY4NwkNAReeqwwSev02qs0Vj7JQW6EfvP7JRK48PesxLqglP62hhUgvsIdDnnsgv6BLKT3hJWbYBXONV3wu36meh/eAyUsyxF30pRWEkeAak/sdwFNuz22HMSBRLTc1uTvn8wnpGJW1DYhjrP71kVIOVKLmmAiOdMizE/ls85PS+EZwmLCxcHPOj+Sy+0kL9KgfMPT4K7NBH7SluwD19xY2THnFSbP7GuFFkCHCLOVbqPOh1mBZjtGsgePsfCfa8h+4MeJivnE/L1wsuXC0xcjJzt8jmlnGWD307d9ynMf8eZ0PecaETCjOd5IAcNTQAFbY/wfnde/YqV3GR+h0SydDOnz6WYono+KNM+Wi30faqYWLreaSO9KrcHh8hIsuB9Szw9fMrdB9OKmqw70J1vmgjzIvMQBqmFTvvKiezxmZThN7MliNxDoJSpQ/Cpn7DbzSNwgfik0Mgn15IAQ9Atsy3PAOl9h3QJhsrkaDG4TJVU57g5VfPPz/Sh9mtnwE+evKc1sv1i/bSo6F/xLbra0ReCENOMKtzePvXswoQfIDRsPDZg9qj4SrYnuk5rojMYwVkl3B2SpC6IdvsSdfguk+2+DiSreR+Uhvy1VEO4/avn6i67atgKo9AUq2IuQN1sdtsHspMyESdPx+GlfrnY4UElbAmGw7+y3WyM+7mToGBTuYks2XXNzDjekbj7Ek5pxxLjZBYR+ShCGwvQPdOJ/f33idcqahv8HvFqPvetQ4P9WC5NeIbZSeidxGjjUBg9Th5/XkQOPXzLIvXnugl4Zdks9vcZbaPNwsIN3v8gbENM5R1IQgKL4PZafTmTCunZvFhCmYerWd9N8SJmOV4qFqjhpdeTeLIrgeXLpAkz4AJR5aXFNCqSTRlSspE8RyRadArFIeXLHjjtMRgh/Ya/dIxhJWeMOJnRINA1Al7+B5VhiX9Luxg60Shhw1ndD3u934XD7zXUlwdZOQT5SSIXOr3IjQ6WYk6PV+36mhhYjNV1Jg3YYN5Tvsh0HNycyUUdhtv+GOhGMF1RphwRj8AXwDRYfkSWs6Y/bPnN/FjHMhUesJ0pu7dY7VpdlbpxWWNUaqZydyiymqRPYur0InYNMuTXRbA81lwDGmWcmCfUJhMMpwxDWuCgISfThcJ7YuNe9w3vpWUnkXP74/y74hK2HaZaXKKQoJNiB8qd0tuMXSaFIpstr0+ZGace9Ksk/cWPClVQq5t1B8bk0+kdIW8BlDfJ1WhpnKS26PuvcufQiPG7dqiupQLmAxcKVP79bpmkI0rLG3woJ4Oustx201rbn5wbfIp/K8HdG8eecJUKvt3KuY/KkdmHcaLS9boC/mvspMxRzmW5yBaEkQjkzPqKfkt+mE9d8fEpvI3Y0P/UkEcnpz7y1q3n5mrECZmAZR8cJKk3yZFOrr+P+6w0XuEbm0oepzTxoryVISUof090n/6S6j7QHehNVq423txTMoNrxKNbmJrzLVPir6eOETWDcm5U7DH/qv1UfHek4PlmJz6a680jF4YuxNLA+UDhG8AZjLBXcrew3m0NPQbu+FJo8ULcUhoOHuEaA47ID4wCAVkSqOWcZa2c3TV08VOf0M3aZ41YgNk69AO6R6By9uUrIHZpD",
          "certificate": "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgIUXAmbBKCTI0tjRjkSHTd+LgRSRyYwDQYJKoZIhvcNAQEL\nBQAwXzELMAkGA1UEBhMCQkUxEDAOBgNVBAcTB0FudHdlcnAxDjAMBgNVBAoTBU5v\na2lhMRYwFAYDVQQLEw1Db250YWluZXIgbGFiMRYwFAYDVQQDEw1zcmwwMiBSb290\nIENBMB4XDTIxMTIwMzIwMDkwMFoXDTIyMTIwMzIwMDkwMFowYTELMAkGA1UEBhMC\nQkUxEDAOBgNVBAcTB0FudHdlcnAxDjAMBgNVBAoTBU5va2lhMRYwFAYDVQQLEw1D\nb250YWluZXIgbGFiMRgwFgYDVQQDEw9zcGluZTIuc3JsMDIuaW8wggEiMA0GCSqG\nSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDYuCe8N6mu7JCJLXra7TBn2b66HKCBHhL+\nFHrD++c35PpQyFY0+6z3jTJV9jlpWNjoXyZu3gdo+WdlozEODgON+tmYFM7kT5iR\nYBx151w5rpVjMwfMM7Pqx6iRz3VhyyaicRwnN+u1zxiJKEvGdAPd1uH5OEZT+IJE\nHBqZmkpaVljFL9GDV4tjgtO3/0kMvpcQcStHrEQd7aYiqubxTAVX2V0azdTM15Ql\njdDlcylXnzw7FW2hSIHh02ZbDxfCbw0C7l7bIafERnP49yAP4/aW74HHzwl3vSeO\n+arwkMFzG6pI1dwAO9FRydeQiF2OJ/QRB1OMJ3WPq7g8+3/RjGwjAgMBAAGjgbgw\ngbUwDgYDVR0PAQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcD\nAjAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBSTCbKBqFAIRrK5hNu0saLDXQCWCDAf\nBgNVHSMEGDAWgBSn16I0lg9Te9qB8PpowJr7AxhjfjA2BgNVHREELzAtggZzcGlu\nZTKCEWNsYWItc3JsMDItc3BpbmUyghBzcGluZTIuc3JsMDIuLmlvMA0GCSqGSIb3\nDQEBCwUAA4IBAQAa0fiPMS39dxhfVMPnc1v3EOPlo/BFasH6d2fQujnp4QCKiaja\nEUh9egb/eEKEmf0k2Qv2ixbYmNN5R66/nIlDpWOyDfEVQ2NQEQZMWQy3P6aJtkG2\nVgQVSd233jrZfQArkQoxat3G33g7qp6pv+Tu4UXDc3zcvXiZpjEiWTQsfQ/Unkwp\nEZNu/xEGMPabxtwk2i7r5TVnCRb8leVLJq7q4S8/Npe9sONvbKbvsOrOr2TVsffV\nWOE71XWFZCGIYih4psRJfgDaPKUuy+aOsmOhAJLrsB2PN3noikPUyWcPmSZ5YYHl\nG74Bk2uAj4gCdOca9+Uuz+HEMbNJf/FhzE7i\n-----END CERTIFICATE-----\n",
          "authenticate-client": false
        },
        {
          "name": "tls-profile-1",
          "key": "$aes$b6jbEQwDodls=$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",
          "certificate": "-----BEGIN CERTIFICATE-----\nMIIEBjCCAu6gAwIBAgIUQT31ZbB3dLigiIwgiioLx2MYaRgwDQYJKoZIhvcNAQEL\nBQAwXzELMAkGA1UEBhMCQkUxEDAOBgNVBAcTB0FudHdlcnAxDjAMBgNVBAoTBU5v\na2lhMRYwFAYDVQQLEw1Db250YWluZXIgbGFiMRYwFAYDVQQDEw1zcmwwMiBSb290\nIENBMB4XDTIxMDYxNjE4MjYwMFoXDTIyMDYxNjE4MjYwMFowYTELMAkGA1UEBhMC\nQkUxEDAOBgNVBAcTB0FudHdlcnAxDjAMBgNVBAoTBU5va2lhMRYwFAYDVQQLEw1D\nb250YWluZXIgbGFiMRgwFgYDVQQDEw9zcGluZTIuc3JsMDIuaW8wggEiMA0GCSqG\nSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCnlT3j353gTnJndFk7XOVrKIV841UYxgRk\n4ZgBqDVIh1Ur46/87MSnzRJLehLTVWqZJFUOLuh336WXHD2QLZG283D/+uSBhepD\nnwucKkTYn7PXyRwxvQuV2Ux6kNEWXqfuqFF+i4NnsMgciyrtMouVKoimWTP2Dn5u\nLjtZVLOZ9bcqigsvY2Q66XgLI5lf+bN1OyCX+iHLMYyTCol4jnzME5k1SBu+ggQ4\nT2/rAuZC7KoUgS3MHo/UDWE2W6lrcgxFD13OVevtLxZEHhRGy4mE5TC0vgTYFl73\nLFPwzby9MtO/phJeftcHt7eQOixq3N/Y7KL6Ql97kPXjud/JsmIrAgMBAAGjgbcw\ngbQwDgYDVR0PAQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcD\nAjAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBTLq+Xe+x0bb45t0DfkS7uFkJcSCzAf\nBgNVHSMEGDAWgBRUpkTY7g72nWFQKqvuE0XGQUSfzjA1BgNVHREELjAsggZzcGlu\nZTKCEWNsYWItc3JsMDItc3BpbmUygg9zcGluZTIuc3JsMDIuaW8wDQYJKoZIhvcN\nAQELBQADggEBAGRjRdFkIb3OC28Q+QntF1rNwQd8jdgYzAqgg7PCbbr1w3jgi0NR\naDnD3BYgUU4Yp37s2nvjVbXxpK2Xh9Wam070XcfF1m0fD0sXogkGnMoySE50eiyg\ntfbQRMotQLFCEm4i6jqpdjrnz8SHFCovHdqU7doUHNxcMnlvEvbrO7jrVgoFv3nB\nUF+HYEWWtY0viuynf98EMiqP40zPQuoBucF1kwUy6P/k1zmK7xNszdjSgXDfztpZ\nkpC3YXQChjZjzv3rN+D7jDBlBsSle/BQ9TfmX9p8lwW3O7KBOws6P4dJfz/wmuB9\nlDgI7s6DfF1VZJk6amxR4vyKP1i9FRD7fis=\n-----END CERTIFICATE-----\n",
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
      "admin-state": "enable"
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
      "admin-state": "enable",
      "interface": [
        {
          "name": "ethernet-1/1.0"
        },
        {
          "name": "ethernet-1/2.0"
        },
        {
          "name": "ethernet-1/4.0"
        },
        {
          "name": "lo0.0"
        }
      ],
      "protocols": {
        "srl_nokia-bgp:bgp": {
          "autonomous-system": 64999,
          "router-id": "1.1.1.12",
          "group": [
            {
              "group-name": "eBGP-underlay",
              "export-policy": "import-all",
              "import-policy": "export-all",
              "failure-detection": {
                "enable-bfd": true,
                "fast-failover": true
              },
              "timers": {
                "minimum-advertisement-interval": 1
              }
            },
            {
              "group-name": "iBGP-evpn",
              "admin-state": "enable",
              "export-policy": "export-all",
              "import-policy": "import-all",
              "peer-as": 65123,
              "evpn": {
                "admin-state": "enable"
              },
              "local-as": [
                {
                  "as-number": 65123
                }
              ],
              "route-reflector": {
                "client": true,
                "cluster-id": "1.1.1.12"
              },
              "timers": {
                "minimum-advertisement-interval": 1
              }
            }
          ],
          "ipv4-unicast": {
            "admin-state": "enable",
            "multipath": {
              "max-paths-level-1": 16,
              "max-paths-level-2": 16
            }
          },
          "neighbor": [
            {
              "peer-address": "1.1.1.1",
              "admin-state": "enable",
              "peer-group": "iBGP-evpn"
            },
            {
              "peer-address": "1.1.1.2",
              "admin-state": "enable",
              "peer-group": "iBGP-evpn"
            },
            {
              "peer-address": "1.1.1.3",
              "admin-state": "enable",
              "peer-group": "iBGP-evpn"
            },
            {
              "peer-address": "1.1.1.4",
              "admin-state": "enable",
              "peer-group": "iBGP-evpn"
            },
            {
              "peer-address": "10.1.1.1",
              "peer-as": 65001,
              "peer-group": "eBGP-underlay"
            },
            {
              "peer-address": "10.1.2.1",
              "peer-as": 65002,
              "peer-group": "eBGP-underlay"
            },
            {
              "peer-address": "10.1.4.1",
              "peer-as": 65004,
              "peer-group": "eBGP-underlay"
            },
            {
              "peer-address": "10.2.1.1",
              "peer-as": 65001,
              "peer-group": "eBGP-underlay"
            },
            {
              "peer-address": "10.2.2.1",
              "peer-as": 65002,
              "peer-group": "eBGP-underlay"
            },
            {
              "peer-address": "10.2.4.1",
              "peer-as": 65004,
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
    "policy": [
      {
        "name": "export-all",
        "default-action": {
          "accept": {
            
          }
        }
      },
      {
        "name": "import-all",
        "default-action": {
          "accept": {
            
          }
        }
      }
    ]
  }
}