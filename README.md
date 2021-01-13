# simplon-ci-cd

https://chathula.dev/how-to-set-up-a-ci-cd-pipeline-for-a-node-js-app-with-github-actions

## Expliquer princiep des cles SSH en détails

## First setup steps


ssh root@46.101.88.57

adduser deploybot
usermod -a -G sudo deploybot
su - deploybot
cd 
mkdir .ssh



sudo apt-get install git
ssh-keygen
cat ~/.ssh/id_rsa.pub #copy the text

