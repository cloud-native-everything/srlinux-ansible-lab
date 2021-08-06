## http test server is working as part of the container process
echo 'its a test $(hostname)' > test.txt
python3 -m http.server 8080
## use curl http://<ip-server>:8080/test.txt to test it
## use haproxy -f /usr/local/etc/haproxy/haproxy.cfg to run balancer
