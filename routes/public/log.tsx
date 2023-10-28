import { getCookies } from "$std/http/cookie.ts";

export default function Log(req: Request) {
  const qs = Object.fromEntries(new URL(req.url).searchParams.entries());
  const cookies = getCookies(req.headers || new Headers());

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
