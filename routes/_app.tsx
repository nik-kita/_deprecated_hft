import { AppProps } from "$fresh/server.ts";

declare global {
  interface ContextState {
    auth?: "login";
  }
}

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>hft</title>
        <link rel="stylesheet" href="styles.css"></link>
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
