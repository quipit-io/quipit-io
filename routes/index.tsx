import { MenuIcon } from "$fathym/atomic-icons";

export default function Home() {
  return (
    <div className="px-4 py-8 mx-auto bg-[#86efac]">
      <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <MenuIcon />
        <h1 className="text-4xl font-bold text-white mt-8">QuipIt</h1>
        <div className="flex justify-center mt-8">
          <button id="sign-in-button" onClick={() => Clerk.openSignIn()} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
          <button id="sign-up-button" onClick={() => Clerk.openSignUp()} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-4">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}