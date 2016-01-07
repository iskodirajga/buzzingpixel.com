#!/bin/sh

# If you would like to do some extra provisioning you may
# add any commands you wish to this file and they will
# be run after the Homestead machine is provisioned.

# Copy the nginx config
sudo cp /home/vagrant/BuzzingPixel/nginxConf/local.conf /etc/nginx/sites-available/buzzingpixel.dev;

# Copy PHP config
sudo cp /home/vagrant/BuzzingPixel/nginxConf/localPhp.ini /etc/php/7.0/fpm/php.ini;

# Copy SSL Certs
sudo cp /home/vagrant/BuzzingPixel/devCerts/buzzingpixel.dev.crt /etc/nginx/ssl/buzzingpixel.dev.crt;
sudo cp /home/vagrant/BuzzingPixel/devCerts/buzzingpixel.dev.csr /etc/nginx/ssl/buzzingpixel.dev.csr;
sudo cp /home/vagrant/BuzzingPixel/devCerts/buzzingpixel.dev.key /etc/nginx/ssl/buzzingpixel.dev.key;

sudo service nginx restart;
