#This is a container to run ansible
FROM centos:7.9.2009

# Install all packages
RUN yum -y install epel-release && yum clean all
#RUN curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
#RUN curl "https://bootstrap.pypa.io/pip/get-pip.py" -o "get-pip.py"
#RUN python get-pip.py
#RUN python -m pip install
RUN yum -y install python-pip && yum clean all
RUN yum -y install ansible && yum clean all
RUN yum -y install vim && yum clean all
RUN yum -y install curl && yum clean all
RUN yum -y install git && yum clean all

# install sdk from nuage
RUN pip install vspk

# Generate user dev and his files
RUN mkdir -p /.ssh
RUN mkdir -p /var/log/ansible
WORKDIR /
ENV HOME /
ADD vimrc /.vimrc
ADD bash_profile /.bash_profile
RUN mkdir -p /.vim/autoload /.vim/bundle
RUN curl -LSso /.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim
RUN git clone git://github.com/chase/vim-ansible-yaml.git  /.vim/bundle/vim-ansible-yaml
RUN git clone https://github.com/lepture/vim-jinja.git /.vim/bundle/vim-jinja
