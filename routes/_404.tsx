import { Head } from "$fresh/runtime.ts";
import { defineRoute, Handlers } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";

export default defineRoute((req, ctx) => {
  const qs = Object.fromEntries(new URL(req.url).searchParams.entries());
  const cookies = getCookies(req.headers);

  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div>
        <h1>Not found...</h1>
        <h2>{req.method}: {req.url}</h2>
        <hr />
        <div>
          <label>
            body
          </label>
          <pre>{req.body && JSON.stringify(req.body, null, 2)}</pre>
          <label>
            query-string
          </label>
          <pre>{JSON.stringify(qs, null, 2)}</pre>
          <label>
            cookies
          </label>
          <pre>{JSON.stringify(cookies, null, 2)}</pre>
        </div>
      </div>
    </>
  );
});
