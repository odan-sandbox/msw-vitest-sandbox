import fetch from "node-fetch";
import { getServer } from "./server.mock";

describe("app", (): void => {
  const rpcUrl = "http://locahost:8545";
  const server = getServer(rpcUrl);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe("add", (): void => {
    it.only("fetch", async () => {
      const response = await fetch(rpcUrl, {
        method: "POST",
        body: JSON.stringify({ poyo: 1 }),
        headers: { "Content-Type": "application/json" },
      });
      console.log("response", await response.json());

      expect(1).toBe(1);
    });
  });
});
