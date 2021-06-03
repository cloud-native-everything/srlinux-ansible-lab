# Intro

Create a Kubernetes lab on top of srlinux container lab for testing purposes


# Install

```
sudo docker build -t srl-lab:0.1 .
sudo docker volume create srl-lab
sudo docker run -d --name srl-lab --mount source=srl-lab,target=/srl-lab srl-lab:0.1
```
