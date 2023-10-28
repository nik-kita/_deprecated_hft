import { Head } from "$fresh/runtime.ts";

type Props = {
  GOOGLE_AUTH_CLIENT_ID: string;
  cbName: string;
};

export default function GoogleSignIn({ GOOGLE_AUTH_CLIENT_ID, cbName }: Props) {
  return (
    <>
      <Head>
        <script src="https://accounts.google.com/gsi/client" async></script>
      </Head>
      <div class="root">
        <div
          id="g_id_onload"
          data-client_id={GOOGLE_AUTH_CLIENT_ID}
          data-context="use"
          data-ux_mode="popup"
          data-callback={cbName}
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
}
