const AWS = require("aws-sdk")

const s3 = new AWS.S3({
    signatureVersion: 'v4'
});

const params = {Bucket: 'signedurl-nodejs-test', Key: 'Edgar Garcia resume.pdf'}
const url = s3.getSignedUrl('getObject', params);

console.log("The Signed URL is: " + url)