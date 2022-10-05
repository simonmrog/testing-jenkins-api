const s3Service = require("../services/s3");

class S3Controller {
  async createBucket(req, res) {
    try {
      const { bucketName } = req.body;
      const response = await s3Service.createBucket(bucketName);
      return res.status(200).json({ bucketPath: response });
    } catch (err) {
      console.error(err.message);
      res.status(500).json(err);
    }
  }
}

module.exports = new S3Controller();
