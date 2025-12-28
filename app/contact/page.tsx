const links = [
  { href: 'https://www.linkedin.com/feed/', label: 'LinkedIn' },
  { href: 'https://github.com/ichillous', label: 'GitHub' },
  { href: 'https://www.imdb.com/name/nm11859512/', label: 'IMDb' },
  {
    href: 'https://docs.google.com/document/d/1hD3uVuJPLBBZc-D8pAoiKlVNKNwVJ_BJWOOY4_ZxU_8/edit?usp=sharing',
    label: 'Resume'
  }
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-mono text-4xl">Contact</h1>
      <p className="mt-4 text-lg text-zinc-700">
        Lets talk about AI, software design, delivery, or a film project.
      </p>
      <p className="mt-2 text-sm text-zinc-600">
        Email is best for now: isiah.chillous@gmail.com
      </p>

      <div className="mt-6">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Links</p>
        <ul className="mt-3 space-y-2 text-sm">
          {links.map((link) => (
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

      <section className="mt-10 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
        <h2 className="font-mono text-2xl">Contact form</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Form wiring is in progress. This will connect to Supabase with a server action.
        </p>
        <form className="mt-6 grid gap-4">
          <label className="text-sm text-zinc-600">
            Name
            <input
              className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
              disabled
              placeholder="Coming soon"
            />
          </label>
          <label className="text-sm text-zinc-600">
            Email
            <input
              className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
              disabled
              placeholder="Coming soon"
            />
          </label>
          <label className="text-sm text-zinc-600">
            Message
            <textarea
              className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
              disabled
              rows={4}
              placeholder="Coming soon"
            />
          </label>
          <button
            className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-5 py-3 text-sm text-zinc-400"
            disabled
          >
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}
