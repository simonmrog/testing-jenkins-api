const s3Service = require("../../src/services/s3");

jest.mock("aws-sdk", () => {
  const instance = {
    createBucket: jest.fn((params, cb) => {
      cb(null, { Location: `s3://fakelocation/${params.Bucket}` });
    }),
  };
  return { S3: jest.fn(() => instance) };
});

test("Create an S3 bucket and returns the bucket location", async () => {
  const bucketName = "fakebucket";
  const response = await s3Service.createBucket(bucketName);
  expect(response).toMatch("fakebucket");
});
