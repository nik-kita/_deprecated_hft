import { Head } from "$fresh/runtime.ts";
import { defineRoute } from "$fresh/server.ts";

export default defineRoute((req, ctx) => {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div>
        <h1>Not found...</h1>
        <h2>{ctx.url}{ctx.route}{ctx.params}</h2>
      </div>
    </>
  );
});
