'use client';

import Link from 'next/link';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { usePathname, useRouter } from 'next/navigation';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import s from './Navbar.module.css';

interface NavlinksProps {
  user?: any;
}

const navItems = [
  { href: '/work', label: 'Work' },
  { href: '/software', label: 'Software' },
  { href: '/film', label: 'Film' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function Navlinks({ user }: NavlinksProps) {
  const router = useRouter();
  const shouldClientRedirect = getRedirectMethod() === 'client';
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-4 md:py-6">
      <div className="flex items-center gap-3">
        <Link href="/" className={s.wordmark}>
          Isiah Chillous
        </Link>
        <span className="hidden text-xs uppercase tracking-[0.2em] text-zinc-500 sm:inline">
          Software Engineer / Filmmaker
        </span>
      </div>
      <nav className="flex flex-wrap items-center gap-2">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={s.link}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-3 text-sm">
        {user ? (
          <>
            <Link href="/admin" className={s.link}>
              Admin
            </Link>
            <form
              onSubmit={(e) =>
                handleRequest(e, SignOut, shouldClientRedirect ? router : null)
              }
            >
              <input type="hidden" name="pathName" value={pathname} />
              <button type="submit" className={s.link}>
                Sign out
              </button>
            </form>
          </>
        ) : null}
      </div>
    </div>
  );
}
