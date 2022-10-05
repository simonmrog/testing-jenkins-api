class HealthService {
  getHealthStatus() {
    return {
      status: "application running",
    };
  }
}

module.exports = new HealthService();
