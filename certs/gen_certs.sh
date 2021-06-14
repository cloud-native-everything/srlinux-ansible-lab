#Create Certificate for Certify Authority
openssl genrsa -out CAKey.pem 2048
openssl req -x509 -new -nodes -key CAKey.pem -days 1024 -out rootCA.crt -subj "/C=US/ST=Texas/L=Dallas/O=Nokia/OU=NI/CN=myCA/emailAddress=mau.rojas@nokia.com"
#Create Certificate for GNMI client
openssl genrsa -out client_key.pem 2048
openssl req -out client.csr -key client_key.pem -new -subj "/C=US/ST=Texas/L=Dallas/O=Nokia/OU=NI/CN=client"
openssl x509 -req -in client.csr -CA rootCA.crt -CAkey CAKey.pem -CAcreateserial -out client.crt -days 1024 -extensions v3_req -extfile <(
cat <<-EOF
[req]
req_extensions = v3_req
distinguished_name = req_distinguished_name
[req_distinguished_name]
[ v3_req ]
basicConstraints = CA:FALSE
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth
EOF
)
#Create Certificate for SRL Leaf1
openssl genrsa -out leaf1_key.pem 2048
openssl req -out leaf1.csr -key leaf1_key.pem -new -subj "/C=US/ST=Texas/L=Dallas/O=Nokia/OU=NI/CN=leaf1"
#openssl x509 -req -in leaf1.csr -CA rootCA.crt -CAkey CAKey.pem -CAcreateserial -out leaf1.crt -days 1024 -extensions v3_req -extfile leaf1.cnf 
openssl x509 -req -in leaf1.csr -CA rootCA.crt -CAkey CAKey.pem -CAcreateserial -out leaf1.crt -days 1024 -extensions v3_req -extfile <(
cat <<-EOF
[req]
req_extensions = v3_req
distinguished_name = req_distinguished_name
[req_distinguished_name]
[ v3_req ]
basicConstraints = CA:FALSE
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth
subjectAltName = IP:172.20.20.3
EOF
)
