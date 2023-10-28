import { MiddlewareHandler } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";

const REDIRECT_GUEST_TO_PUBLIC: MiddlewareHandler = (req, ctx) => {
  if (ctx.destination !== "route" || new URL(req.url).pathname.startsWith('/public')) {
    return ctx.next();
  }

  const { auth } = getCookies(req.headers);

  if (auth === "login") {
    return ctx.next();
  }

  return new Response(null, {
    status: 307,
    headers: new Headers({
      location: "/public",
    }),
  });
};

export const handler = [
  REDIRECT_GUEST_TO_PUBLIC,
] satisfies MiddlewareHandler[];
