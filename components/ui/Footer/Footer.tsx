import Link from 'next/link';

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/software', label: 'Software' },
  { href: '/film', label: 'Film' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

const connectLinks = [
  { href: 'https://www.linkedin.com/feed/', label: 'LinkedIn' },
  { href: 'https://github.com/ichillous', label: 'GitHub' },
  { href: 'https://www.imdb.com/name/nm11859512/', label: 'IMDb' },
  {
    href: 'https://docs.google.com/document/d/1hD3uVuJPLBBZc-D8pAoiKlVNKNwVJ_BJWOOY4_ZxU_8/edit?usp=sharing',
    label: 'Resume'
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <p className="font-mono text-lg">Isiah Chillous</p>
          <p className="mt-2 text-sm text-zinc-600">
            Columbus, OH | Remote-friendly
          </p>
          <a
            className="mt-2 block text-sm text-zinc-600 hover:underline"
            href="mailto:isiah.chillous@gmail.com"
          >
            isiah.chillous@gmail.com
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="text-zinc-600 hover:text-zinc-900" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Connect
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {connectLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="text-zinc-600 hover:text-zinc-900"
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500">
        © 2025 Isiah Chillous. All rights reserved.
      </div>
    </footer>
  );
}
