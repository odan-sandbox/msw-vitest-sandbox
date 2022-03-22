import fetch from "node-fetch";

import { getServer } from "./server.mock.js";

async function main() {
  const rpcUrl = "http://locahost:8545";
  const server = getServer(rpcUrl);

  server.listen();
  server.resetHandlers();

  const response = await fetch(rpcUrl, {
    method: "POST",
    body: JSON.stringify({ poyo: 1 }),
    headers: { "Content-Type": "application/json" },
  });
  console.log("response", await response.json());

  server.close();
}

main();
