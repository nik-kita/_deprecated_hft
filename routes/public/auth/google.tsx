import { Handlers } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    const gData = await req.formData();

    const headers = new Headers({
      location: "/log",
    });

    setCookie(headers, { name: "auth", value: "login" });

    return new Response(
      JSON.stringify({
        gData: Object.fromEntries(Array.from(gData.entries())),
      }),
      { status: 307, headers },
    );
  },
};
