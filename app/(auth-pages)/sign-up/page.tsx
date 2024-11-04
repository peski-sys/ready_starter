import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/app/(components)/form-message";
import Link from "next/link";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-sm text text-foreground">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="you@example.com" required />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          />
        <button formAction={signUpAction}>
          Sign Up
        </button>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </>
  );
}