import { Handlers } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    const gData = await req.formData();
    const redirectPath = "/public/log";
    const headers = new Headers({
      location: `${redirectPath}?${new URLSearchParams(
        Array.from(gData.entries()) as string[][],
      )}`,
    });

    setCookie(headers, {
      name: "auth",
      value: "login",
      path: redirectPath,
    });

    return new Response(null, {
      status: 307,
      headers,
    });
  },
};
