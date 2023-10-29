import { Handlers } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    const url = new URL(req.url);
    const gData = await req.formData();
    const headers = new Headers({
      location: `${url.pathname}${url.search ? url.search : ""}`,
    });

    setCookie(headers, {
      name: "auth",
      value: "login",
      maxAge: 120,
      sameSite: "Lax",
      domain: url.hostname,
      path: "/",
      secure: true,
    });

    return new Response(null, {
      status: 307,
      headers,
    });
  },
};
