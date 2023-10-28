import { getCookies } from "$std/http/cookie.ts";
import { Handlers, RouteContext } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    const res = await ctx.render(req);

    return res;
  },
};

// deno-lint-ignore require-await
export default async function Log(req: Request, ctx: RouteContext) {
  const qs = Object.fromEntries(new URL(req.url).searchParams.entries());
  const cookies = getCookies(req.headers);

  return (
    <div>
      body
      <pre>{req.body && JSON.stringify(req.body, null, 2)}</pre>
      query-string
      <pre>{JSON.stringify(qs, null, 2)}</pre>
      cookies
      <pre>{JSON.stringify(cookies, null, 2)}</pre>
    </div>
  );
}
