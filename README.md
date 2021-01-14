# simplon-ci-cd

Base tutorial was here: 
https://chathula.dev/how-to-set-up-a-ci-cd-pipeline-for-a-node-js-app-with-github-actions

Repository: git@github.com:user/myproject.git

## SSH keys and how they work

@Todo.

## Setup steps

### On your local machine

Create a SSh key for your local machine and git to access the server (call it id_rsa_deploybot)

```
cd ~
ssh-keygen
cat ~/.ssh/id_rsa_deploybot.pub
```

### On the remote server

```
ssh root@<HOST>46.101.88.57
adduser deploybot
usermod -a -G sudo deploybot
su - deploybot
cd 
mkdir .ssh
nano ~/.ssh/authorized_keys
# copy paste key from cat

sudo apt-get install git
```

On github settings secrets, copy paste the *private key* (not the *.pub one!)




uses: appleboy/scp-action@master