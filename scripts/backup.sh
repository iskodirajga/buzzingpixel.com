#!/bin/sh

# Set the current date
DATE=$(date +"%Y-%m-%d__%H-%M-%S");

# Make the backup directory based on the date
mkdir backups/${DATE};

# Archive files
tar czf backups/${DATE}/files.tar.gz ../ --exclude=scripts/backups;

# Sync to S3
/usr/local/aws/bin/aws s3 sync backups s3://zoebackups

# Delete local backup
rm -rf backups/${DATE};
