import { defineLayout, LayoutConfig } from "$fresh/server.ts";
import GoogleSignIn from "../../components/GoogleSignIn.tsx";
import { CONFIG } from "../../src/config.ts";
import { handleResponseCredentials } from "../../src/scripts/google-sign-in.script.js";

export const config: LayoutConfig = {
  skipAppWrapper: false,
  skipInheritedLayouts: true,
};

export default defineLayout((req, { Component, url }) => {
  return (
    <>
      <script>{handleResponseCredentials.toString()}</script>
      <GoogleSignIn
        GOOGLE_AUTH_CLIENT_ID={CONFIG.GOOGLE_AUTH_CLIENT_ID}
        cbName={handleResponseCredentials.name}
      />
      <h3>This is public/_layout.tsx</h3>
      <hr />
      <Component />
    </>
  );
});
