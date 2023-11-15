import {Html, Head, Main, NextScript} from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title key="title">Kevin Lee 李夢遠 @mngyuan</title>
        <meta
          property="og:description"
          content="Creative technologist, lecturer at UAL Creative Computing Institute, instructor at Royal College of Art. Previously at Facebook, UC Berkeley."
          key="og-description"
        />
        <meta
          property="og:title"
          content="Kevin Lee 李夢遠 @mngyuan"
          key="og-title"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="text-white bg-black">
        <Main />
        <NextScript />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-27780M5WN9');
          `}
        </Script>
      </body>
    </Html>
  );
}
