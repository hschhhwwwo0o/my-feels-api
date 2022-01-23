import app from "../../src/app";

describe("'feedbacks' service", () => {
  it("registered the service", () => {
    const service = app.service("feedbacks");
    expect(service).toBeTruthy();
  });
});
