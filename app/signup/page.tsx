import Link from "next/link";

import { signup } from "./actions";

interface SignupPageProps {
  searchParams: Promise<{
    error?: string;
  }>;
}

export default async function SignupPage({
  searchParams,
}: SignupPageProps) {
  const params = await searchParams;
  const error = params.error;

  return (
    <main className="min-h-screen bg-[#121212] px-4 py-12 text-white sm:px-6">
      <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center">
        <div className="w-full rounded-2xl border border-[#2A2A2A] bg-[#1B1B1B] p-6 shadow-2xl sm:p-8">
          <div className="mb-8 text-center">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-white"
            >
              Oshakur <span className="text-[#00E5FF]">Movies</span>
            </Link>

            <h1 className="mt-8 text-2xl font-bold text-white">
              Create Account
            </h1>

            <p className="mt-2 text-sm text-[#AAAAAA]">
              Create your Oshakur Movies account
            </p>
          </div>

          {error && (
            <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <form action={signup} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#CCCCCC]"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-[#3A3A3A] bg-[#121212] px-4 py-3 text-white outline-none transition placeholder:text-[#666666] focus:border-[#00E5FF]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#CCCCCC]"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                autoComplete="new-password"
                minLength={6}
                required
                className="w-full rounded-lg border border-[#3A3A3A] bg-[#121212] px-4 py-3 text-white outline-none transition placeholder:text-[#666666] focus:border-[#00E5FF]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#2979FF] px-4 py-3 font-semibold text-white transition hover:bg-[#1E63D6]"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#AAAAAA]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#00E5FF] transition hover:text-white"
              >
                Sign In
              </Link>
            </p>

            <Link
              href="/"
              className="mt-4 inline-block text-sm text-[#AAAAAA] transition hover:text-[#00E5FF]"
            >
              ← Back to Oshakur Movies
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}