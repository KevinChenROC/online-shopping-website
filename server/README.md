# Start your server in the local environment

## Prerequisites

1. Create a new MongoDB cluster [here](https://cloud.mongodb.com/)
2. Create an Amazon S3 bucket to store uploaded images
   1. Remember **bucket name** when creating the bucket
   2. In aws console, go to **My security credentials**
   3. Obtain **an access key**

## Configure server/.env file

1. Create a .env under server folder
2. Configure the following inside .env

```
DATABASE=<Your Mongo DB key>!!
S3_BUCKET_NAME=<Your amazon s3 bucket name>!!
AWSAccessKeyId=<Amazon s3 bucket key ID>
AWSSecretKey=<Amazon s3 bucket secret key>

```

## Install and run

```
npm install --save
node server.js
```