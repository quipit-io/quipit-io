import {
  GithubIcon,
  GoogleIcon,
  MenuIcon,
  MicrosoftIcon,
} from "$fathym/atomic-icons";
import { Action } from "@atomic/design";

export default async function Home() {
  return (
    <div class="max-w-screen-md mx-auto flex flex-col">
      <h1 class="text-4xl font-bold text-white mt-8">Welcome to SportsHub</h1>
      <p class="text-lg text-white mt-4">
        The ultimate platform for sports writers, players, and teams to share,
        collaborate, and discuss.
      </p>
      <div class="flex flex-col items-center mt-8">
        <Action
          href="/oauth/signin/github"
          class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex"
        >
          <GithubIcon class="w-[24px] h-[24px] mx-2" />

          Sign in with GitHub
        </Action>
        <Action
          href="/oauth/signin/google"
          class="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 flex"
        >
          <GoogleIcon class="w-[24px] h-[24px] mx-2" />

          Sign in with Google
        </Action>
        <Action
          href="/oauth/signin/microsoft"
          class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 flex"
        >
          <MicrosoftIcon class="w-[24px] h-[24px] mx-2" />

          Sign in with Microsoft
        </Action>
      </div>
      <p class="text-sm text-white mt-4">
        We use social logins to ensure the security of your account.
      </p>
    </div>
  );
}
