# Intro

Create a Kubernetes lab on top of srlinux container lab for testing purposes


# Install

Assuming you are cloning this repo in your home folder

```
sudo docker build -t srl-lab:0.1 .
sudo docker run -d -t -i --name srl-ansible -v ~/srlinux-ansible-lab:/srl-lab srl-ansible:0.1
sudo docker exec -ti srl-ansible bash
```

As soon as you are inside te container, you have to create you certificates and ssh-copy-id to the host that would be affected with the tasks
Don't forget to modify the hosts inventory file


# Running playbook

I added a folder inside cfg to manage different configurations in case is required. You just need to point it with cfg_option

```
ansible-playbook -e cfg_option=srl01 -i hosts playbook.yml

```
