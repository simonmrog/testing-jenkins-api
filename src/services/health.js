class HealthService {
  getHealthStatus() {
    return {
      status: "ok",
    };
  }
}

module.exports = new HealthService();
