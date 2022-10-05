const healthService = require("../../src/services/health");

test("Health status is returned successfully", () => {
  const healthStatus = healthService.getHealthStatus();
  expect(healthStatus).toMatchObject({ status: "ok" });
});
