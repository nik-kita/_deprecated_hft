import { Handlers } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    console.log(req.url);
    const url = new URL(req.url);
    const location = url.searchParams.get("ui");

    if (!location) {
      return new Response(null);
    }

    const gData = await req.formData();
    const headers = new Headers({
      location,
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
      status: 303,
      headers,
    });
  },
};
