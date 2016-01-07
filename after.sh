#!/bin/sh

# If you would like to do some extra provisioning you may
# add any commands you wish to this file and they will
# be run after the Homestead machine is provisioned.

# Install Xdebug
git clone git://github.com/xdebug/xdebug.git
cd xdebug
phpize
./configure --enable-xdebug
make
make install

# Configure Xdebug
cat > /etc/php/mods-available/xdebug.ini <<EOL
zend_extension=xdebug.so
xdebug.default_enable=1
xdebug.remote_enable=1
xdebug.remote_port=9000
xdebug.remote_autostart=1
xdebug.remote_connect_back=1
EOL
ln -s /etc/php/mods-available/xdebug.ini /etc/php/7.0/fpm/conf.d/20-xdebug.ini
service php7.0-fpm restart

# Copy the nginx config
sudo cp /home/vagrant/BuzzingPixel/nginxConf/local.conf /etc/nginx/sites-available/buzzingpixel.dev;

# Copy SSL Certs
sudo cp /home/vagrant/BuzzingPixel/devCerts/buzzingpixel.dev.crt /etc/nginx/ssl/buzzingpixel.dev.crt;
sudo cp /home/vagrant/BuzzingPixel/devCerts/buzzingpixel.dev.csr /etc/nginx/ssl/buzzingpixel.dev.csr;
sudo cp /home/vagrant/BuzzingPixel/devCerts/buzzingpixel.dev.key /etc/nginx/ssl/buzzingpixel.dev.key;

sudo service nginx restart;
