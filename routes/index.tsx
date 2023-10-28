import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { defineRoute } from "$fresh/src/server/defines.ts";
import { CONFIG } from "../src/config.ts";

export default defineRoute((req, ctx) => {
  return (
    <>
      <h1>Dear User! Welcome back!</h1>
      <pre>{(ctx.state as object).toString()}</pre>
    </>
  );
});
