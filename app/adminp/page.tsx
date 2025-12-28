import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { getErrorRedirect } from '@/utils/helpers';

export const metadata = {
  robots: {
    index: false,
    follow: false
  }
};

async function adminSignIn(formData: FormData) {
  'use server';

  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '').trim();

  if (!email || !password) {
    return redirect(
      getErrorRedirect('/adminp', 'Missing credentials.', 'Enter email and password.')
    );
  }

  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    return redirect(getErrorRedirect('/adminp', 'Sign in failed.', error.message));
  }

  if (data.user) {
    return redirect('/admin');
  }

  return redirect(
    getErrorRedirect(
      '/adminp',
      'Hmm... Something went wrong.',
      'You could not be signed in.'
    )
  );
}

export default function AdminLoginPage() {
  return (
    <div className="mx-auto flex max-w-md flex-col justify-center px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Private</p>
      <h1 className="mt-3 font-mono text-3xl">Admin sign in</h1>
      <p className="mt-2 text-sm text-zinc-600">
        Use your admin credentials to access the dashboard.
      </p>
      <form
        action={adminSignIn}
        className="mt-6 grid gap-4 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
      >
        <label className="text-sm text-zinc-600">
          Email
          <input
            className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="text-sm text-zinc-600">
          Password
          <input
            className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
        </label>
        <button
          className="inline-flex items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
