# Debian server setup

## Note

Passwords: "simplon". Change passwords with `sudo passwd <USER>`

## Install NodeJS

Follow: https://github.com/nodesource/distributions/blob/master/README.md#debinstall

```
cd ~
sudo apt-get update
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

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