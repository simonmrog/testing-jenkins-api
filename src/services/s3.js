const AWS = require("aws-sdk");

class S3Service {
  constructor() {
    this._s3 = new AWS.S3();
  }

  async createBucket(bucketName) {
    return new Promise((resolve, reject) => {
      this._s3.createBucket({ Bucket: bucketName }, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data.Location);
        }
      });
    });
  }
}

module.exports = new S3Service();
