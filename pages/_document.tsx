import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Mirreal.net",
    description: "Mirreal's note website"
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />

        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />

        <meta name="twitter:site" content="@zgkmranyu" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
