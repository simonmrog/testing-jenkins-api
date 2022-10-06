class HealthService {
  getHealthStatus() {
    return {
      status: "app running",
    };
  }
}

module.exports = new HealthService();
