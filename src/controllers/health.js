class HealthController {
  healthStatus(req, res) {
    res.status(200).json({
      message: "app running",
    });
  }
}

module.exports = new HealthController();
