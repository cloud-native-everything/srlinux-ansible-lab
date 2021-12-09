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
                "ip-prefix": "10.1.1.0/31"
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
                "ip-prefix": "10.1.2.0/31"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "ethernet-1/4",
      "description": "Interface to Border",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ip-mtu": 5000,
          "ipv4": {
            "address": [
              {
                "ip-prefix": "10.1.4.0/31"
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
                "ip-prefix": "1.1.1.11/32"
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
          "key": "$aes$bZHM/OH7C9is=$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",
          "certificate": "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgIUVRjIIMTSvroSgdCsbXZyKJrNlE0wDQYJKoZIhvcNAQEL\nBQAwXzELMAkGA1UEBhMCQkUxEDAOBgNVBAcTB0FudHdlcnAxDjAMBgNVBAoTBU5v\na2lhMRYwFAYDVQQLEw1Db250YWluZXIgbGFiMRYwFAYDVQQDEw1zcmwwMiBSb290\nIENBMB4XDTIxMTIwMzIwMDkwMFoXDTIyMTIwMzIwMDkwMFowYTELMAkGA1UEBhMC\nQkUxEDAOBgNVBAcTB0FudHdlcnAxDjAMBgNVBAoTBU5va2lhMRYwFAYDVQQLEw1D\nb250YWluZXIgbGFiMRgwFgYDVQQDEw9zcGluZTEuc3JsMDIuaW8wggEiMA0GCSqG\nSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC7TZKQ3vnluAxE6QCsOrcnGNHO97myJfYE\nx+lrc/y4VUl7VC1ix9KjbE7N6tnkk2KhGZnabh4RuCqX1gai6xh74lJj18epcLHH\nSlpzSm2wAp358AgeOOA2GmLCqlqsqo3BS5iL9QKmoug7NIREr8y3cTTQEJlaFurL\neErCPPmNI5xD96eSMBF/yF1humIey6wyBC9u5VnotytSWmhQ1RPW3WAUcT9wTsZ3\nKVj1P/kwyEoUcZA4oBa9PTA3m3DGi3S1QHG9Ei2YUFpRIJ/t7JQJAGbibF7wvxch\nedkKhEcPfcBCTjPQ1bahMNsn6Q1bFNRNnFOf2gmjDn9hsWBXiZNVAgMBAAGjgbgw\ngbUwDgYDVR0PAQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcD\nAjAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBTZc7Pl+puvN2ROsMR+3QDYTBnnsTAf\nBgNVHSMEGDAWgBSn16I0lg9Te9qB8PpowJr7AxhjfjA2BgNVHREELzAtggZzcGlu\nZTGCEWNsYWItc3JsMDItc3BpbmUxghBzcGluZTEuc3JsMDIuLmlvMA0GCSqGSIb3\nDQEBCwUAA4IBAQAaC3sQnkQgzjhz8n9lC4c1244ce8PC1VB3HXY42j2Gqv1t2S4Z\nY4jln8F3QJzgd50SL9Ba7d6ggroWbphzEy2MH/RmAxrg4tx37Ugw4vwx0n1UdAUF\nyl6lBkZm7edYNwv0lwDgQ0sjKqSwklfCkLS87rqydGoJ7f64ujWfOdFEc+Wf4JIf\n9xPqOs4In1jt/A/+Z0nZpV2jj6r8LYCOwP2EThLnoNPYn9BA4GKjVjRfKjY2dIqP\nfRPjUh6hr9pCCoekX0W/PaZcxUbo6IqqdXI6R7J4d2emK3RnHZoqLWnNq3VvTiec\nV5S8n1IsQAsgj19zdlazzbR6ltfXNWwvLQAz\n-----END CERTIFICATE-----\n",
          "authenticate-client": false
        },
        {
          "name": "tls-profile-1",
          "key": "$aes$bvxlyUc9D/co=$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",
          "certificate": "-----BEGIN CERTIFICATE-----\nMIIEBjCCAu6gAwIBAgIUZALfUsSueDPEhivjyI30+kbZGPswDQYJKoZIhvcNAQEL\nBQAwXzELMAkGA1UEBhMCQkUxEDAOBgNVBAcTB0FudHdlcnAxDjAMBgNVBAoTBU5v\na2lhMRYwFAYDVQQLEw1Db250YWluZXIgbGFiMRYwFAYDVQQDEw1zcmwwMiBSb290\nIENBMB4XDTIxMDYxNjE4MjYwMFoXDTIyMDYxNjE4MjYwMFowYTELMAkGA1UEBhMC\nQkUxEDAOBgNVBAcTB0FudHdlcnAxDjAMBgNVBAoTBU5va2lhMRYwFAYDVQQLEw1D\nb250YWluZXIgbGFiMRgwFgYDVQQDEw9zcGluZTEuc3JsMDIuaW8wggEiMA0GCSqG\nSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCumORPAh4C+QlShLJAhVUQzNuQ74PhbXZC\nOC6IB+J1dst67nGi7kfj2nYVUpChy6LcZcGyuo0xdasRIVLok71kJDCG732FwbAu\nHtVmxERESiyQNd/5MwxBUdEDfwvyjQGuIRI+BiaTOun9Db3QyExC4nMNe6jccctn\nzE5sPRXl/rCTyKNDI9ihbFlPIZ1DT5WafAWb0dYRKIq80fzXjOE9n7Tf/P0OHpqO\nvf9ZbocjIWfGoR1wNo0Yd0lBgKJxdNLdRD6HI/cTQI9GhubbjYZ5J5XgngOXfiUM\nkHKQYUEwceN0fWAln25ajaoLPShDz6+7W34roOX+au9H1Cir86bdAgMBAAGjgbcw\ngbQwDgYDVR0PAQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcD\nAjAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBToPbxOnthDHXsNFFlrKT+zrVUW0DAf\nBgNVHSMEGDAWgBRUpkTY7g72nWFQKqvuE0XGQUSfzjA1BgNVHREELjAsggZzcGlu\nZTGCEWNsYWItc3JsMDItc3BpbmUxgg9zcGluZTEuc3JsMDIuaW8wDQYJKoZIhvcN\nAQELBQADggEBADtpB/4pIhw6NcggiAeQpek2jPb4Ib4DOEJzLleNzpqsbA6Sq9nc\ntx9FRHJvh/zbgKYxUpOriJDAerckJurCJtfRIIXTBr1jrDv73v8pXTm51GABKt0U\n1gKHYGcLOFipH7H8A6V9XvWUr8u1a860V9sl0FUR/IKzCN/UsGPFLUnt9QFs2GMb\nIiOvmqM87YX73DF9sHGOzH9FnCupkoLQ5GIsGGSXrvpuo3EiL7Kv+D20mw631ve8\nA9jf53w9WNfuTh/LcGKNJXn2KD/6vpi6WK/6AicbL8gEftxifNBUnHmpjLmtsuFh\nObj5Zvbs6nMVulcQLT5/GMtqn+Z3jN69aOQ=\n-----END CERTIFICATE-----\n",
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
          "router-id": "1.1.1.11",
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
                "cluster-id": "1.1.1.11"
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