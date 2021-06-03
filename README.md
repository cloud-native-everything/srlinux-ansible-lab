# Intro

Create a Kubernetes lab on top of srlinux container lab for testing purposes


# Install

```
sudo docker build -t srl-lab:0.1 .
sudo docker run -d -t -i --name srl-ansible -v ~/srlinux-ansible-lab:/srl-lab srl-ansible:0.1
sudo docker exec -ti srl-ansible bash
```


# Runnin playbook

```
ansible-playbook -e cfg_option=srl01 -i hosts playbook.yml

```
