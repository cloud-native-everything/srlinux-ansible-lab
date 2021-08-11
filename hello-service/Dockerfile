## it'll display: "Hello World version ONE! Host/Podhello-node-3439300230-bg6ew"
## You can use it to test ReplicaSet and Ingress and how it's going over different containers.
## Details at cloud-native-everything.com
## Move it to a file with the name Dockerfile and build it using for example "docker build -t gcr.io/k8s-helloworld-142719/hello-node:v1 ."

FROM node:4.4
EXPOSE 8080
COPY server.js .
CMD node server.js
