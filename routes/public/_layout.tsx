import { defineLayout, LayoutConfig } from "$fresh/server.ts";
import GoogleSignIn from "../../components/GoogleSignIn.tsx";
import { CONFIG } from "../../src/config.ts";

export const config: LayoutConfig = {
  skipAppWrapper: false,
  skipInheritedLayouts: true,
};

export default defineLayout((req, { Component, url }) => {
  return (
    <>
      <GoogleSignIn
        GOOGLE_AUTH_CLIENT_ID={CONFIG.GOOGLE_AUTH_CLIENT_ID}
        ctxUrl={new URL(`${url.origin}/public/auth/google`)}
      />
      <h3>This is public/_layout.tsx</h3>
      <hr />
      <Component />
    </>
  );
});
