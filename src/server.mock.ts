// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { setupServer } from "../node_modules/msw/node/lib/index.js";
import { rest } from "msw";

export function getHandlers(rpcUrl: string) {
  const handlers = [
    rest.post<{ id: string }>(rpcUrl, (_, res, ctx) => {
      return res(ctx.json({ mocked: true }));
    }),
  ];

  return handlers;
}

export const getServer = (rpcUrl: string) =>
  setupServer(...getHandlers(rpcUrl));
