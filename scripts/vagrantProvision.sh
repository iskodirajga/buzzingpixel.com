#!/bin/sh

# These commands will be run at the end of the vagrant environment provisioning

# Add logjam fix so we can run HTTP/2
sudo cp /home/vagrant/development/nginxConf/localdhparams.pem /etc/nginx/dhparams.pem;
sudo cp /home/vagrant/development/nginxConf/locallogjam_fix /etc/nginx/logjam_fix;

# Copy the nginx config
sudo rm -f /etc/nginx/sites-available/??*;
sudo cp /home/vagrant/development/nginxConf/local.conf /etc/nginx/sites-available/site.dev;
sudo rm -f /etc/nginx/sites-enabled/??*;
sudo ln -s /etc/nginx/sites-available/site.dev /etc/nginx/sites-enabled/site.dev;

# Delete all hidden files in devCerts directory so we can check if it contains
# cert files or not
rm -f /home/vagrant/development/devCerts/.??*;

# Copy SSL Certs to box if exist
# else copy them the other way for first time setup
if [ "$(ls -A /home/vagrant/development/devCerts)" ]; then
	sudo cp /home/vagrant/development/devCerts/* /etc/nginx/ssl;
else
	sudo cp /etc/nginx/ssl/* /home/vagrant/development/devCerts;
fi

# Restart nginx
sudo service nginx restart;
