import { RouteContext } from "$fresh/server.ts";

export default function Welcome(ctx: RouteContext) {
  return (
    <>
      <h1>Welcome, Guest!</h1>
    </>
  );
}
