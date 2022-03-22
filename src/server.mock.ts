import { setupServer } from "msw/node";
import { rest } from "msw";

export function getHandlers(rpcUrl: string) {
  const handlers = [
    rest.post<{ id: string }>(rpcUrl, (_, res, ctx) => {
      return res(
        ctx.json({
          result: "a",
        })
      );
    }),
  ];

  return handlers;
}

export const getServer = (rpcUrl: string) =>
  setupServer(...getHandlers(rpcUrl));
