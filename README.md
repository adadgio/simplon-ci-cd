# simplon-ci-cd

https://chathula.dev/how-to-set-up-a-ci-cd-pipeline-for-a-node-js-app-with-github-actions

## Expliquer le principe des cles SSH en détails

## First setup steps

# On your local machine

Create a SSh key for your local machine and git to access the server (call it id_rsa_deploybot)
cd ~
ssh-keygen
cat ~/.ssh/id_rsa_deploybot.pub

# On the remote server
ssh root@46.101.88.57
adduser deploybot
usermod -a -G sudo deploybot
su - deploybot
cd 
mkdir .ssh

# On the remove server
sudo apt-get install git


