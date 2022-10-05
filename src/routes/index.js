const express = require("express");

const router = express.Router();

const healthRouter = require("./health");
const pokemonRouter = require("./s3");

router.use("/health", healthRouter);
router.use("/s3", pokemonRouter);

module.exports = router;
