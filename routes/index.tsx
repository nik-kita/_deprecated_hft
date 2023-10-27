import { Head } from "$fresh/runtime.ts";
import { defineRoute } from "$fresh/src/server/defines.ts";
import { CONFIG } from "../src/config.ts";

export default defineRoute((req) => {
  return (
    <>
      <Head>
        <script src="https://accounts.google.com/gsi/client" async></script>
      </Head>
      <div>
        <div
          id="g_id_onload"
          data-client_id={CONFIG.GOOGLE_AUTH_CLIENT_ID}
          data-context="use"
          data-ux_mode="popup"
          data-login_uri={`${CONFIG.API_URL}/auth`}
          data-itp_support="true"
        >
        </div>
        <div
          class="g_id_signin"
          data-type="standard"
          data-shape="pill"
          data-theme="filled_black"
          data-text="continue_with"
          data-size="large"
          data-locale="en-US"
          data-logo_alignment="left"
        >
        </div>
      </div>
    </>
  );
});
