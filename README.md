# simplon-ci-cd

Base tutorial was here: 
https://chathula.dev/how-to-set-up-a-ci-cd-pipeline-for-a-node-js-app-with-github-actions

Repository: git@github.com:user/myproject.git

## SSH keys and how they work

@Todo
ssh -i /Users/adadgio/.ssh/id_rsa_deploybot deploybot@46.101.88.57

## Course sections

Tools available (pro/cons)
Security practices
How SSH works

## Setup steps

### Step 0: On your local machine

Create a SSh key on/for your local machine and git to access the server (call it id_rsa_deploybot)

```
cd ~
ssh-keygen
cat ~/.ssh/id_rsa_deploybot.pub
```

Add that key to  /home/deployboy/.ssh/authorized_keys

### Step1: On the remote server step 2

Note: ssh -i /Users/adadgio/.ssh/id_rsa_deploybot deploybot@46.101.88.57

```
ssh root@<HOST>46.101.88.57
adduser deploybot
usermod -a -G sudo deploybot
su - deploybot
cd 
mkdir .ssh
nano ~/.ssh/authorized_keys
# copy paste key from cat command in step 0

sudo apt-get install git
```

### Step 2: On the remote server step 1

Creating a SSH key proper

```
ssh root@<HOST>46.101.88.57
ssh-keygen
cat ~/.ssh/id_rsa.pub
# AND COPY IT IN GIHTUB Settings > Deploy keys
```



On github settings secrets, copy paste the *private key* (not the *.pub one!)

