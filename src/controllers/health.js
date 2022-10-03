class HealthController {
  healthStatus(req, res) {
    res.status(200).json({
      message: "ok",
    });
  }
}

module.exports = new HealthController();
