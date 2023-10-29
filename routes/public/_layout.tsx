import { defineLayout, LayoutConfig } from "$fresh/server.ts";
import GoogleSignIn from "../../components/GoogleSignIn.tsx";
import { CONFIG } from "../../src/config.ts";

export const config: LayoutConfig = {
  skipAppWrapper: false,
  skipInheritedLayouts: true,
};

export default defineLayout<ContextState>((req, { Component, url, state }) => {
  if (state.auth === "login") return <Component />;

  const authUrl = new URL(`${url.origin}/public/auth/google`);

  authUrl.searchParams.append("ui", url.pathname);

  return (
    <>
      <GoogleSignIn
        GOOGLE_AUTH_CLIENT_ID={CONFIG.GOOGLE_AUTH_CLIENT_ID}
        ctxUrl={authUrl}
      />
      <Component />
    </>
  );
});
