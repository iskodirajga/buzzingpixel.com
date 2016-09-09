#!/bin/sh

# Set the current date
DATE=$(date +"%Y-%m-%d__%H-%M-%S");

# Make the backup directory based on the date
mkdir -p /home/forge/backups/buzzingpixel.com/${DATE};

# Archive files
tar -czf /home/forge/backups/buzzingpixel.com/${DATE}/files.tar.gz /home/forge/buzzingpixel.com/;

# Sync to S3
aws s3 sync /home/forge/backups/ s3://zoebackups

# Delete local backup
rm -rf /home/forge/backups/buzzingpixel.com;
