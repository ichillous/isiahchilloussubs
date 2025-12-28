import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata = {
  robots: {
    index: false,
    follow: false
  }
};

const adminLinks = [
  { href: '/admin', label: 'Overview' },
  { href: '/admin/inbox', label: 'Inbox' },
  { href: '/admin/projects', label: 'Projects' },
  { href: '/admin/quotes', label: 'Quotes' }
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Private</p>
            <h1 className="font-mono text-3xl">Admin</h1>
          </div>
          <nav className="flex flex-wrap gap-2">
            {adminLinks.map((link) => (
              <Link
                key={link.href}
                className="rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-700 hover:border-zinc-900 hover:text-zinc-900"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
