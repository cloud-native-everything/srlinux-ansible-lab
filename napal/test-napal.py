from napalm import get_network_driver
import json

driver = get_network_driver("srl")
optional_args = {
    "port": 57400,
    "target_name": "172.20.20.3",
    "tls_ca":"/srl-lab/napal/rootCA.crt",
    "tls_cert": "/srl-lab/napal/client.crt",
    "tls_key": "/srl-lab/napal/client_key.pem",
    "skip_verify": True,
    "insecure": True,
    "encoding": "JSON_IETF"
}
device = driver("172.20.20.3", "admin", "admin", 60, optional_args)
device.open()

print(json.dumps(device.get_interfaces()))

device.close()
