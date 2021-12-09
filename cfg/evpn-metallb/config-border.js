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
                "ip-prefix": "10.1.4.1/31"
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
                "ip-prefix": "10.2.4.1/31"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "ethernet-1/3"
    },
    {
      "name": "ethernet-1/10",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable"
        }
      ]
    },
    {
      "name": "ethernet-1/11",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable"
        }
      ]
    },
    {
      "name": "ethernet-1/12",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable"
        }
      ]
    },
    {
      "name": "ethernet-1/19",
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "type": "srl_nokia-interfaces:bridged",
          "admin-state": "enable"
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
        },
        {
          "index": 1,
          "ipv4": {
            "address": [
              {
                "ip-prefix": "192.168.201.1/24",
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
        },
        {
          "index": 2,
          "ipv4": {
            "address": [
              {
                "ip-prefix": "172.16.254.1/24",
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
      "admin-state": "enable",
      "subinterface": [
        {
          "index": 0,
          "admin-state": "enable",
          "ipv4": {
            "address": [
              {
                "ip-prefix": "6.5.3.9/32"
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
                "ip-prefix": "1.1.1.4/32"
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
          "key": "$aes$fV49z89dg9Qk=$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",
          "certificate": "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgIUenBJDQn2ef18YuXnRzgoWc1nhI0wDQYJKoZIhvcNAQEL\nBQAwXzELMAkGA1UEBhMCQkUxEDAOBgNVBAcTB0FudHdlcnAxDjAMBgNVBAoTBU5v\na2lhMRYwFAYDVQQLEw1Db250YWluZXIgbGFiMRYwFAYDVQQDEw1zcmwwMiBSb290\nIENBMB4XDTIxMTIwMzIwMDkwMFoXDTIyMTIwMzIwMDkwMFowYTELMAkGA1UEBhMC\nQkUxEDAOBgNVBAcTB0FudHdlcnAxDjAMBgNVBAoTBU5va2lhMRYwFAYDVQQLEw1D\nb250YWluZXIgbGFiMRgwFgYDVQQDEw9ib3JkZXIuc3JsMDIuaW8wggEiMA0GCSqG\nSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDMIMK5Z+2fQ71U/USE2aDiG75S3o/GnYtI\nW6177dey8AE1b699dkida9OOrUyvCfh6LjMwPGLpItRnBcLYiSnCkVUYTTvS5KlP\n64AMf/+KkjxHkkehPli/AI1CtIShJr3PGkrTseyTiktucymnxO3wuAl72FuI7831\nQcSxwX4yTL+tbLLa1jsj25mX/GMR93dXe/vN+XyQcJ0NsHej2VDnBA7Z6VvPIGd2\nz0c2c/5zLTCY7DgH+VfL657DXQ9LMcYwekS9L21XdKHSKE0jlIrV0t9AQ26kIxqK\nN+oohOBndU4F9Tpq89GqamT8Fck+6EwyiDAdztApeZO2KktacfmBAgMBAAGjgbgw\ngbUwDgYDVR0PAQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcD\nAjAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBRzO1h/7nyvSuWMN/uOQvbqxtIwHDAf\nBgNVHSMEGDAWgBSn16I0lg9Te9qB8PpowJr7AxhjfjA2BgNVHREELzAtggZib3Jk\nZXKCEWNsYWItc3JsMDItYm9yZGVyghBib3JkZXIuc3JsMDIuLmlvMA0GCSqGSIb3\nDQEBCwUAA4IBAQA3Imf/RXMKJO2ZbXPeocP4KsR5evgoV4iunhc2EqIXHQdzGTp1\nPIZqjOwgd/nCFidtTwzhtIdpagD7y61hR59SlmcTzpjUZzp/5MnRTflqG/PlaUWw\nmTMAenXEXF/COs7AV6GWiCoaIpki0wqvSzMbMLLn8ve+/5ETN47ssk/TlDXlDgYT\n/imEp1KZx+netPIAUtjW/10F5EQwllaB3RpYj4kz3n4o3flFcKr+lmGq+b7Gyve9\n9gWS3JdqDoVEWRq5mZvvihCUYYOi2aEsbvPw/zYQ4io7wV1X1wK/SPkAGOfgX5J6\nASoUDjePmuGthaHa2fnEdMd1KM95cVFiPWAh\n-----END CERTIFICATE-----\n",
          "authenticate-client": false
        },
        {
          "name": "tls-profile-1",
          "key": "$aes$aoGbVND0JX0E=$HD8v4FWAwrWgCweKbbyLKF+HBz8KIATdJIzWHplN60p9yMwxwbvNH0miHsuSGVOtX8CFnmMfG294PiPUXHkgkJtAVGCtNl2l3jLqBID/swejvBI1FoToq3UMLW0fVwiwld1lohkt4GhS3VgmpWoYKnmDvSgZWJ6Ayh4JCKeESoD0VV0+imLc2vjX20XLemoP9ZXjVECEoyNLcBUCeZYP+IH1gU4m1/B91l+IiEmLPHUfydNq4ledJqKvXEnqqv/IhdOlazRrZ/r5fgUDMmrsL3HUGNGyR997zJPRx0jQeYw5z4U/ZjNKDQMHAvS51NnsgqGs6g1rQZBcKzjM16niSA50aLZb4fgiiLx6wIUMRzCaKvMjVtNVMCHG+mZEYpcCHKP6ooFZ4x+qcqw1Pgr/eCjrsCs7EBPVVj/xgOT7UUV2m2Tehowo9qAz3M1VU08nkJgNAvuump7DulVVhKlDgzHIG3DyObWzjTt4H3hI4wGY6R4rSV+zBlJHFqJzmKD1/uXmUo24iG4bzTtchCUECH+rqfgwhDaqlIjq4XTmLBuTIqEt+1GDpN2HL5kNtmLVToXaOfUF5bsRZI3TCSD5tTq2gkp0OnyxgXhCVJRwm1dmLVarWmk39m3FlgdSbQCN4/EPH0fihJXSwRx7VGzSYFz6QXV5A2Ct3YkQI/c4dpgX4hNIKGuqV8+rOQEW4UQC3EuF9lVe+tVEi8vCZD7Hl/HjtBwcxDE7PpdUlyB2pqR2whWQFOJHylbttPSesQtechJOLAfQY6hr5gbKwr8YWNcgkEE12yODz4mPR18Z2qOQOTij+zt3u7k/xgVilZNtC5iu7R4aeK8KgnIws/4ai2auC4JoQfqS+9kG5Bbq7J8MmG8Hr483CXzoTDp0be8OvPIWwZdRLmvyAaapsRub+f3VMumqwXlfPVySWkdPuIhHn+lqoubtdGCFV+RIswCs27YJc4FVAuZwRUF1BVcdOGFpa3ga+SiYZAO4LR6j1R80n9T5FgN7m39MKx06/Zd4RhCyj/6Ua2xxeqeGJjWMxFwOOghZ4QkB9rHR2R1ECYH1Krs4o17v2g5JXaVsbZ8/jj6T23vqzgwrdQI5V+AkrVdZ0H1TsaZPCuyMNPq5O6muoKqrchWQEDt1bY6Xw8sVIeaKZedsuKgvaznfl2wgdEbBR2f1baP0/oofn+ukRrx+uCoQ2yhql/eHH1eS0JhoIe3tDZv5ecW2d5cYlb5+Hg+y5fB/hfsUWOMLmhwc8t+9OOBfNXr1dEXpJb90nvs17F4nGiZTIAjw3m7HaoHPx6pNoACz/tApbs/M9FlhXTjJ7+qkSPjDlbzrAeaMG+pmgF2pJdyXU0HuRbcu0lK2fBLEtRdGjxu3IQpS83bB+M9awhnAeOh7viw/NPmdswfF0MwpUqpxPa2xJL3/SacWrxsAswj3FhFdA5RrTk+aorVao3tlMicgDFzf9vZWyQCow/53jfh3lmmvaO1gBeWuL2waZt8UTWdxgwV9flqykpvcOqGS4e1CAV2OPy4T3qvPPNHlAn3h9tOcxPMIyyoq3FX91rlzO7pXPLiGdDzuKXTZH5uv+mi74hhi/xTiqXU4zEqK8FKUX5N+hJXtn0kml86nLfqKaiFCVDu5pyIiP41tfq8KVEWkOMOmzVLJoIBQ9KVqxhhiiRLtCroMVNOEki0KMmaSiuJwXmj3PyrFEDMvBVKVm+Fgo21p2d7RbHZv9I+BzK5qGimFyW+BkosrzI1f31FS/Gt4zyqpxakFxAslVVoj8hbXLsfydKfyAJS/n8BAI4xBhHetMnHSl1rB5E5EWW1vRuZAWllYQZFK3OQLZ61Sk3Gk0x5iRRleOmqgWmg71UXVtW7a25tqYwMPe+VMZ1iMjXUea4ynftwmxZq+cbQAZ/Jt+BJmgxchkUHeRnQfq/bVlSE6XJCpB/VpJIlC4JykaQ9YlRxb6i1JJnbl6zvF+fiawwkZCcb5MlgXPsRSKpbsHqmNY/PhBpGzlRwUdeXOjGTCKlYw2MQcDeJ8uJ2cIpq5cgeD149DrUdyQ+VGz/qrbi0ECCb1k0vlQZ6IApJed7Kc/EofQsfKwYOcCh+AdNKm5pqQerI7h8byUrhFj0uo23AEMrtbkLS9bPW3CFfctr39e2uqSt7T9bktcVRArXr53jPLuEsIFgy5Avt9mZyT9NbtCzrJbA3Pc3pmycxD6vYg6zobNg9IFHA/hNerdKQSd6wo+BiQrH9v",
          "certificate": "-----BEGIN CERTIFICATE-----\nMIIDpjCCAo6gAwIBAgIJAOMhrE6Rcp65MA0GCSqGSIb3DQEBCwUAMH4xCzAJBgNV\nBAYTAlVTMQ4wDAYDVQQIDAVUZXhhczEPMA0GA1UEBwwGRGFsbGFzMQ4wDAYDVQQK\nDAVOb2tpYTELMAkGA1UECwwCTkkxDTALBgNVBAMMBG15Q0ExIjAgBgkqhkiG9w0B\nCQEWE21hdS5yb2phc0Bub2tpYS5jb20wHhcNMjEwNjE3MTYyNDQ0WhcNMjQwNDA2\nMTYyNDQ0WjBbMQswCQYDVQQGEwJVUzEOMAwGA1UECAwFVGV4YXMxDzANBgNVBAcM\nBkRhbGxhczEOMAwGA1UECgwFTm9raWExCzAJBgNVBAsMAk5JMQ4wDAYDVQQDDAVs\nZWFmMTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALhvtDZuhh4Q+MKd\ns9KG0uY+XXzpAg7h627GrVutP7bZ9nqx48qnmIucC3214+1vh0zLNMM6LXVKzitC\nj8YUkYTnoN1v3RqU7Y7BlpaVKaRjXG0N2I4Hdr5/5Hm+K6hAD+Vbo2f7CNomUwlx\nLxiQuwuBz9qtvSpuLG5fHtClmFOK6NQ100tmyvFTN04CWRQKWXW8CyRo8WITx6dg\nAoiKKvQi9Gs5lNHGhdPYBvtjXyi5D37et0xTwDHBAgzzrq7TnX5t3mCVv/PiD3Z+\nuqfZMJCvDeaPyN8TgJv1MQgW5k3nM8lIWGV5cI+ZpGweZBFOjnfkVDS5fKOIZP+s\nFBjx2LUCAwEAAaNKMEgwCQYDVR0TBAIwADALBgNVHQ8EBAMCBeAwHQYDVR0lBBYw\nFAYIKwYBBQUHAwEGCCsGAQUFBwMCMA8GA1UdEQQIMAaHBKwUFAQwDQYJKoZIhvcN\nAQELBQADggEBADbE+l/D2dIa1+hzyw1vskVoTuii6vdWUxNkSqV0AGAlEUEiGaiT\nouhTtxH1faKMkUKs1RonuTs5JjVVerJvuKDPKBny5kF11k/ClczOqWKx/FUSQJZ9\n63sTpX5rbldyARUNfrQBnQgYpcJo93a7D1juBld/BxpFYwaeFAr2pAgrsIA0wadE\nd49thlHb2ZX0V3PqTC5X+OvTBO9BjbsiaAzUlsF8UdSbk9OgITwVw1Uxd1jjtT8J\nHlLQWu23L2xlNTutmA1pJDW0ZhEo9k8IhwE7yev3NJce7xIyoWazrp91SNibX8/u\noYrHxeHlAOoKsHjSlB8aXER1nnl4PeKCVb4=\n-----END CERTIFICATE-----",
          "authenticate-client": true,
          "trust-anchor": "-----BEGIN CERTIFICATE-----\nMIIDzzCCAregAwIBAgIJAKkjJjxkuZNhMA0GCSqGSIb3DQEBCwUAMH4xCzAJBgNV\nBAYTAlVTMQ4wDAYDVQQIDAVUZXhhczEPMA0GA1UEBwwGRGFsbGFzMQ4wDAYDVQQK\nDAVOb2tpYTELMAkGA1UECwwCTkkxDTALBgNVBAMMBG15Q0ExIjAgBgkqhkiG9w0B\nCQEWE21hdS5yb2phc0Bub2tpYS5jb20wHhcNMjEwNjE3MTYyNDQzWhcNMjQwNDA2\nMTYyNDQzWjB+MQswCQYDVQQGEwJVUzEOMAwGA1UECAwFVGV4YXMxDzANBgNVBAcM\nBkRhbGxhczEOMAwGA1UECgwFTm9raWExCzAJBgNVBAsMAk5JMQ0wCwYDVQQDDARt\neUNBMSIwIAYJKoZIhvcNAQkBFhNtYXUucm9qYXNAbm9raWEuY29tMIIBIjANBgkq\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsNyXZKd0kvc9KWsHGWg3GG69bxhFRiCl\neTyS/USW06VrZpSaSn0aro5dNY9tkZpyOJoEfSRuuMS2YssqfsWcG8YrARUvxgNc\n+2fwOICE/dATpKwgKR46cH90lzJwpRLs6raOKdYnx0ULdn4jBwR70X4T3EPbU6CM\nT2QfXYMNbaIzKVeW81EBOhqXZX+KfuPU2UZwHJ2iid7ad7/Yjr9bJhM3aqknBmMz\nWC+eOGLHtuPaMC1kQzIaFUY+asP93h1x0nqEtaMGik7EI6AcGfDl+a/7sEHUkune\nOCxVg1M8qtulVCzJ7YdzCSxtBHcUgEpPNSGjd4jHObnW+wPpO5BoCwIDAQABo1Aw\nTjAdBgNVHQ4EFgQUXpUZfZ/TGAs88q06lR0hu28JLgYwHwYDVR0jBBgwFoAUXpUZ\nfZ/TGAs88q06lR0hu28JLgYwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQsFAAOC\nAQEAe9CxzH1FBoKouyM/aVDO+8E0u20I0SgbDjScWkoY4swpDlPkBa3fMYghMY+e\namlgEBq/n16s6N0U4H5SRZ6hydrFlMcsYqQX77nXJ2sQLJf5U0MoXf6zuL5A2rU/\nrbyjIC5y1U8LlSl6/iTD978uOtHtxaG/ErvJra78mYPL45/NIC/sOQv27H08zu9H\nNzu+jdZoCDfmYKYJV4HnhP88Wg2bfkIRvYBqIOwYGv1Td1CM1oYKfrd2tnEa4b1q\n+P5nQXz4LfW9Qp33cTZ3oqWKV5Zu0+2tRAniNNQCEIGlo8TKFmwJFj3staygCbie\nAVfmPw8IhwzPa8QBijnJC3lN2w==\n-----END CERTIFICATE-----"
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
          "autonomous-system": 65004,
          "router-id": "1.1.1.4",
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
            "admin-state": "enable",
            "multipath": {
              "max-paths-level-1": 16,
              "max-paths-level-2": 16
            }
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
              "peer-address": "10.1.4.0",
              "admin-state": "enable",
              "peer-group": "eBGP-underlay"
            },
            {
              "peer-address": "10.2.4.0",
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
      "admin-state": "enable",
      "interface": [
        {
          "name": "irb0.0"
        },
        {
          "name": "irb0.1"
        },
        {
          "name": "irb0.2"
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
          "autonomous-system": 65390,
          "router-id": "6.5.3.9",
          "group": [
            {
              "group-name": "metallb-bgp",
              "admin-state": "enable",
              "import-policy": "import-metallb-pool",
              "timers": {
                "minimum-advertisement-interval": 1
              },
              "transport": {
                "local-address": "6.5.3.9"
              }
            }
          ],
          "ipv4-unicast": {
            "multipath": {
              "max-paths-level-1": 16,
              "max-paths-level-2": 16
            }
          },
          "neighbor": [
            {
              "peer-address": "6.5.3.1",
              "peer-as": 65310,
              "peer-group": "metallb-bgp"
            },
            {
              "peer-address": "6.5.3.2",
              "peer-as": 65320,
              "peer-group": "metallb-bgp"
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
      }
    },
    {
      "name": "mac-vrf1",
      "type": "srl_nokia-network-instance:mac-vrf",
      "admin-state": "enable",
      "interface": [
        {
          "name": "ethernet-1/10.0"
        },
        {
          "name": "ethernet-1/19.0"
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
          "name": "ethernet-1/11.0"
        },
        {
          "name": "irb0.1"
        }
      ],
      "vxlan-interface": [
        {
          "name": "vxlan1.2"
        }
      ],
      "protocols": {
        "bgp-evpn": {
          "srl_nokia-bgp-evpn:bgp-instance": [
            {
              "id": 1,
              "admin-state": "enable",
              "vxlan-interface": "vxlan1.2",
              "evi": 2
            }
          ]
        },
        "srl_nokia-bgp-vpn:bgp-vpn": {
          "bgp-instance": [
            {
              "id": 1,
              "route-target": {
                "export-rt": "target:65123:2",
                "import-rt": "target:65123:2"
              }
            }
          ]
        }
      }
    },
    {
      "name": "mac-vrf3",
      "type": "srl_nokia-network-instance:mac-vrf",
      "admin-state": "enable",
      "interface": [
        {
          "name": "ethernet-1/12.0"
        },
        {
          "name": "irb0.2"
        }
      ],
      "vxlan-interface": [
        {
          "name": "vxlan1.3"
        }
      ],
      "protocols": {
        "bgp-evpn": {
          "srl_nokia-bgp-evpn:bgp-instance": [
            {
              "id": 1,
              "admin-state": "enable",
              "vxlan-interface": "vxlan1.3",
              "evi": 3
            }
          ]
        },
        "srl_nokia-bgp-vpn:bgp-vpn": {
          "bgp-instance": [
            {
              "id": 1
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
        "name": "leaf",
        "prefix": [
          {
            "ip-prefix": "6.5.3.0/24",
            "mask-length-range": "24..32"
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
        "name": "bgp-vpn-import",
        "statement": [
          {
            "sequence-id": 10,
            "match": {
              "prefix-set": "leaf"
            },
            "action": {
              "accept": {
                
              }
            }
          },
          {
            "sequence-id": 999,
            "action": {
              "reject": {
                
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
                  "as-path": {
                    "remove": true
                  },
                  "local-preference": {
                    "set": 300
                  }
                }
              }
            }
          },
          {
            "sequence-id": 20,
            "action": {
              "reject": {
                
              }
            }
          }
        ]
      },
      {
        "name": "reject-all",
        "default-action": {
          "reject": {
            
          }
        }
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
          "index": 3,
          "type": "srl_nokia-interfaces:bridged",
          "ingress": {
            "vni": 3
          }
        },
        {
          "index": 4,
          "type": "srl_nokia-interfaces:routed",
          "ingress": {
            "vni": 4
          }
        }
      ]
    }
  ]
}