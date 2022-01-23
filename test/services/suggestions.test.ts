import app from "../../src/app";

describe("'suggestions' service", () => {
  it("registered the service", () => {
    const service = app.service("suggestions");
    expect(service).toBeTruthy();
  });
});
