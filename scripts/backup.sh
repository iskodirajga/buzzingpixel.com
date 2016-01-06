#!/bin/sh

# Set the current date
DATE=$(date +"%Y-%m-%d__%H-%M-%S");

# Make the backup directory based on the date
mkdir /home/forge/staging.buzzingpixel.com/current/scripts/backups/${DATE};

# Archive files
tar czf /home/forge/staging.buzzingpixel.com/current/scripts/backups/${DATE}/files.tar.gz /home/forge/staging.buzzingpixel.com/current/ --exclude=scripts/backups;

# Sync to S3
/usr/local/aws/bin/aws s3 sync /home/forge/staging.buzzingpixel.com/current/scripts/backups/ s3://zoebackups

# Delete local backup
rm -rf /home/forge/staging.buzzingpixel.com/current/scripts/backups/${DATE};
