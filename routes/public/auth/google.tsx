import { Handlers } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    ctx.state.gData = await req.formData();

    const headers = new Headers();

    setCookie(headers, { name: "auth", value: "login" });

    return new Response(null, { status: 204, headers });
  },
};
