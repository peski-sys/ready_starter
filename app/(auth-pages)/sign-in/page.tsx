import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/app/(components)/form-message";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex flex-col min-w-64 max-w-64 mx-auto">
      <h1 className="text-2xl font-medium">Sign in</h1>
      <p className="text-sm text-foreground">
        Don't have an account?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
          Sign up
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="you@example.com" required />
        <div className="flex justify-between items-center">
          <label htmlFor="password">Password</label>
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
        <button formAction={signInAction}>
          Sign in
        </button>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}