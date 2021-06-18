#Certificates

gen_certs.sh is a script to create certificates for GNMI RPC service
It will create certificates for CA, client and Leaf

# GNMNI cliente

Get it from https://gnmic.kmrd.dev/

## Update Example

```
gnmic set --tls-ca rootCA.crt --tls-cert client.crt --tls-key client_key.pem -a 172.20.20.4:57400 --username pinrojas --password password -e json_ietf--skip-verify --update /interface[name=ethernet-1/3]/admin-state:::string:::enable
{
  "timestamp": 1623959103094271118,
  "time": "2021-06-17T14:45:03.094271118-05:00",
  "results": [
    {
      "operation": "UPDATE",
      "path": "interface[name=ethernet-1/3]/admin-state"
    }
  ]
}
```

## Delete Example

```
gnmic set --tls-ca rootCA.crt --tls-cert client.crt --tls-key client_key.pem -a 172.20.20.4:57400 --username admin --password admin -e json_ietf--skip-verify --delete /interface[name=ethernet-1/3]
{
  "timestamp": 1623960163053007054,
  "time": "2021-06-17T15:02:43.053007054-05:00",
  "results": [
    {
      "operation": "DELETE",
      "path": "interface[name=ethernet-1/3]"
    }
  ]
}
```
