# Debian server setup

## Note

Passwords: "simplon". Change passwords with `sudo passwd <USER>`

## Install NodeJS

Follow: https://github.com/nodesource/distributions/blob/master/README.md#debinstall

```
cd ~
sudo apt-get update
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm -v
npm install -g pm2
```

Note: fix ERRACCESS permission on `npm install -g` command: [gist link here](https://gist.github.com/rafszul/6978ef2106992db0178bc4426b5e6f1c#:~:text=rafszul%2Ffix%2Dnpm%2Dpermissions.md&text=This%20indicates%20that%20you%20do,default%20directory%20to%20another%20directory)

## Install Git

```
sudo apt-get install git
```

## Deploy user configuration

Create the user and it's SSH directory.

```
adduser deploybot
usermod -a -G sudo deploybot
su - deploybot
cd ~
mkdir .ssh
```

## Create a SSh identify for the user

```
ssh-keygen
```

**Optional**

Allow user to do things as sudo without a password (change later for security).

```
sudo nano /etc/sudoers
#add a line to the file
deploybot ALL=(ALL) NOPASSWD: ALL
#Ctrl+X
sudo apt-get update
```

## Basic security

- Prevent deploybot user to sudo without a password.
- Prevent root login from ssh with a password.