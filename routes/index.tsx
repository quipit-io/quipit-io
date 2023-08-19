import { MenuIcon } from "$fathym/atomic-icons";

export default async function Home() {
  return (
    <div className="px-4 py-8 mx-auto bg-[#86efac]">
      <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mt-8">Welcome to SportsHub</h1>
        <p className="text-lg text-white mt-4">
          The ultimate platform for sports writers, players, and teams to share, collaborate, and discuss.
        </p>
        <div className="flex flex-col items-center mt-8">
          <a href="/oauth/signin/github" className="btn btn-github">
            Sign in with GitHub
          </a>
          <a href="/oauth/signin/google" className="btn btn-google">
            Sign in with Google
          </a>
          <a href="/oauth/signin/microsoft" className="btn btn-microsoft">
            Sign in with Microsoft
          </a>
        </div>
        <p className="text-sm text-white mt-4">
          We use social logins to ensure the security of your account.
        </p>
      </div>
    </div>
  );
}
