# Change to folder
mkdir ./certs -p
cd ./certs
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
subjectAltName = IP:172.20.20.4
EOF
)
#Create Certificate for SRL Leaf2
openssl genrsa -out leaf2_key.pem 2048
openssl req -out leaf2.csr -key leaf2_key.pem -new -subj "/C=US/ST=Texas/L=Dallas/O=Nokia/OU=NI/CN=leaf2"
openssl x509 -req -in leaf2.csr -CA rootCA.crt -CAkey CAKey.pem -CAcreateserial -out leaf2.crt -days 1024 -extensions v3_req -extfile <(
cat <<-EOF
[req]
req_extensions = v3_req
distinguished_name = req_distinguished_name
[req_distinguished_name]
[ v3_req ]
basicConstraints = CA:FALSE
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth
subjectAltName = IP:172.20.20.5
EOF
)
#Create Certificate for SRL Leaf3
openssl genrsa -out leaf3_key.pem 2048
openssl req -out leaf3.csr -key leaf3_key.pem -new -subj "/C=US/ST=Texas/L=Dallas/O=Nokia/OU=NI/CN=leaf3"
openssl x509 -req -in leaf3.csr -CA rootCA.crt -CAkey CAKey.pem -CAcreateserial -out leaf3.crt -days 1024 -extensions v3_req -extfile <(
cat <<-EOF
[req]
req_extensions = v3_req
distinguished_name = req_distinguished_name
[req_distinguished_name]
[ v3_req ]
basicConstraints = CA:FALSE
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth
subjectAltName = IP:172.20.20.6
EOF
)

