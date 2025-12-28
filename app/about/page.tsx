const links = [
  { href: 'https://www.linkedin.com/feed/', label: 'LinkedIn' },
  { href: 'https://github.com/ichillous', label: 'GitHub' },
  { href: 'https://www.imdb.com/name/nm11859512/', label: 'IMDb' },
  {
    href: 'https://docs.google.com/document/d/1hD3uVuJPLBBZc-D8pAoiKlVNKNwVJ_BJWOOY4_ZxU_8/edit?usp=sharing',
    label: 'Resume'
  }
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-mono text-4xl">About</h1>
      <p className="mt-4 text-lg text-zinc-700">
        Calm leadership anchored in engineering stakes. Whether partnering with risk squads or
        building an MVP, I guide teams from requirements to observable software: align the data
        model, codify contracts, and deliver calm launches supported by CI/CD.
      </p>
      <p className="mt-4 text-lg text-zinc-700">
        I still carry the heart of a filmmaker: clear narratives, human detail, and thoughtful
        pacing.
      </p>

      <section className="mt-10">
        <h2 className="font-mono text-2xl">Values</h2>
        <ul className="mt-4 space-y-2 text-sm text-zinc-600">
          <li>Systems + story so squads understand the why, not just the what.</li>
          <li>Crafted in Columbus with Midwestern calm and curiosity.</li>
          <li>Mentor, collaborator, and builder of reliable software.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-2xl">Links</h2>
        <ul className="mt-4 space-y-2 text-sm">
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
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-2xl">Beyond work</h2>
        <ul className="mt-4 space-y-2 text-sm text-zinc-600">
          <li>Filmmaking and cinematography</li>
          <li>Building side projects and entrepreneurship</li>
          <li>Cars, DIY maintenance, and mods</li>
          <li>Community building and volunteering</li>
          <li>Reading and learning</li>
        </ul>
      </section>
    </div>
  );
}
