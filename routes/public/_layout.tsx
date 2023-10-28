import { defineLayout, LayoutConfig } from "$fresh/server.ts";
import GoogleSignIn from "../../components/GoogleSignIn.tsx";
import { CONFIG } from "../../src/config.ts";

export const config: LayoutConfig = {
  skipAppWrapper: false,
  skipInheritedLayouts: true,
};

function handleResponseCredentials(data: unknown) {
  console.warn(data);
}

export default defineLayout((req, { Component, url }) => {
  return (
    <>
      <script>{handleResponseCredentials}</script>
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
