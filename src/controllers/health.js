const healthService = require("../services/health");

class HealthController {
  healthStatus(req, res) {
    const healthStatus = healthService.getHealthStatus();
    res.status(200).json(healthStatus);
  }
}

module.exports = new HealthController();
