import { MiddlewareHandler } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { CONFIG } from "../src/config.ts";

const REDIRECT_GUEST_TO_PUBLIC: MiddlewareHandler = (req, ctx) => {
  if (ctx.destination !== "route") return ctx.next();

  const { auth } = getCookies(req.headers);

  // all authenticated (including "/public" route to mark context)
  if (auth === "login") {
    ctx.state.auth = "login";

    return ctx.next();
    // authentication are not required
  } else if (new URL(req.url).pathname.startsWith("/public")) {
    return ctx.next();
  }

  // explicitly redirect non-authenticated user
  return new Response(null, {
    status: 307,
    headers: new Headers({
      location: "/public",
    }),
  });
};

const CORS_FOR_API: MiddlewareHandler = async (req, ctx) => {
  const res = await ctx.next();

  if (new URL(res.url).hostname === new URL(CONFIG.API_URL).hostname) {
    res.headers.set("Access-Control-Allow-Origin", CONFIG.API_URL);
  }

  return res;
};

export const handler = [
  REDIRECT_GUEST_TO_PUBLIC,
  CORS_FOR_API,
] satisfies MiddlewareHandler[];
