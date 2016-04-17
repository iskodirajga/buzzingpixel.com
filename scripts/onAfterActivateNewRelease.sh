#!/bin/sh
# $1 = env
# $2 = {{release}}
# $3 = {{project}}

# Set script permissions
chmod +x $2/scripts/backup.sh;


# Create phone home symlinks
rm $2/system/user/TwigFunctions/PhoneHome/Data/.gitkeep
rm -rf $2/system/user/TwigFunctions/PhoneHome/Data
ln -s $3/storage/PhoneHome $2/system/user/TwigFunctions/PhoneHome/Data

# Copy secret config files
cp -a $3/storage/Config/. $2/system/user/config/

# Restart nginx
sudo service nginx restart;
