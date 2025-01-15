/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/api/theme?theme=clientA" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
