import { createGitHubOAuth2Client } from "@kv_oauth";
import type { Plugin } from "$fresh/server.ts";
import { handleCallback, signIn, signOut } from "@kv_oauth";

export const gitHubOauth2Client = createGitHubOAuth2Client();

export const plugin: Plugin = {
  name: "kv-oauth",
  routes: [
    {
      path: "/oauth/signin/github",

      handler: async (req) => await signIn(req, gitHubOauth2Client),
    },
    {
      path: "/oauth/callback/github",
      handler: async (req) => {
        // Return object also includes `accessToken` and `sessionId` properties.
        const { response } = await handleCallback(
          req,
          gitHubOauth2Client,
        );

        return response;
      },
    },
    {
      path: "/oauth/signout",
      handler: async (req) => await signOut(req),
    },
  ],
};
