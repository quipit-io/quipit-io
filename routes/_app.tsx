import { AppProps } from "$fresh/server.ts";
import { BasicLayout, Footer, Header } from "@atomic/design";
import { getSessionAccessToken, getSessionId } from "@kv_oauth";
import { gitHubOauth2Client } from "../src/kv_auth.ts";
import { Action, classSet, ResponsiveSet } from "@atomic/design";
import InteractiveResponsiveSet from "../islands/molecules/InteractiveResponsiveSet.tsx";

export default async function App(req: Request, { Component }: AppProps) {
  const sessionId = await getSessionId(req);

  const isSignedIn = sessionId !== undefined;

  const logo = {
    LogoAlt: "Fathym Open BioTech",
    LogoUrl: "/logo.svg",
    LogoHref: "/",
  };

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>quipit-io</title>
      </head>
      <body>
        <BasicLayout
          header={
            <Header
              class={classSet(undefined, "bg-blue-500")}
              logo={<h2 class="text-white mx-5">QuipIt</h2>}
              nav={
                <InteractiveResponsiveSet toggleChildren="☰">
                  {isSignedIn
                    ? (
                      <Action
                        id="sign-in-button"
                        href="/oauth/signout"
                        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      >
                        Sign Out
                      </Action>
                    )
                    : (
                      <Action
                        id="sign-in-button"
                        href="/oauth/signin/github"
                        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      >
                        Sign In
                      </Action>
                    )}
                </InteractiveResponsiveSet>
              }
            />
          }
          footer={<Footer />}
          class="bg-slate-700"
        >
          <Component />
        </BasicLayout>
      </body>
    </html>
  );
}
