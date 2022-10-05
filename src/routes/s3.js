const express = require("express");

const s3Controller = require("../controllers/s3");

const router = express.Router();

router.post("", s3Controller.createBucket);

module.exports = router;
