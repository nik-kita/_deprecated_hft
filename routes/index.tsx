import { defineRoute } from "$fresh/src/server/defines.ts";

export default defineRoute((req, ctx) => {
  return (
    <>
      <h1>Dear User! Welcome back!</h1>
      <pre>{(ctx.state as object).toString()}</pre>
    </>
  );
});
