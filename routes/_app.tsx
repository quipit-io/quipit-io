import { AppProps } from "$fresh/server.ts";
import { BasicLayout, Footer, Header } from "@atomic/design";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>quipit-io</title>
      </head>
      <body>
        <BasicLayout header={<Header />} footer={<Footer />}>
          <Component />
        </BasicLayout>
      </body>
    </html>
  );
}
