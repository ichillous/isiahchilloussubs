import Link from 'next/link';

const deliverables = [
  'Highlight edits (30-90s)',
  'Full edits (3-10 min)',
  'Social cutdowns (3/5/10)',
  'Raw footage delivery'
];

const process = [
  'Discovery and scope alignment',
  'Production planning',
  'Shoot day execution',
  'Edit, review, and delivery'
];

const vimeoVideos = [
  {
    title: 'Anisa & Huud highlight',
    src: 'https://player.vimeo.com/video/628286798'
  },
  {
    title: 'Wedding 2',
    src: 'https://player.vimeo.com/video/533544492'
  },
  {
    title: 'DB3 Heats',
    src: 'https://player.vimeo.com/video/337652872'
  }
];

const youtubeVideos = [
  {
    title: 'Pious Project Food Drive',
    src: 'https://www.youtube.com/embed/iFx1xnUQtbw'
  }
];

const additionalLinks = [
  {
    label: 'Podcast Intro (doc)',
    href: 'https://docs.google.com/document/d/1hD3uVuJPLBBZc-D8pAoiKlVNKNwVJ_BJWOOY4_ZxU_8/edit?usp=sharing'
  }
];

export default function FilmPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <header>
        <h1 className="font-mono text-4xl">Filmmaking</h1>
        <p className="mt-4 text-lg text-zinc-700">
          Documentary eye, clean visuals, and strong storytelling for brands, founders, and
          communities.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="font-mono text-2xl">Reel</h2>
        <div className="mt-4">
          <div className="relative w-full overflow-hidden rounded-lg border border-zinc-200 bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/244064162"
              title="Directors Reel 2017"
              className="absolute left-0 top-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="font-mono text-2xl">Featured videos</h2>
          <Link className="text-sm text-zinc-600 hover:text-zinc-900" href="/contact">
            Request a quote
          </Link>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {vimeoVideos.map((video) => (
            <div key={video.src} className="space-y-3">
              <div className="relative w-full overflow-hidden rounded-lg border border-zinc-200 bg-black pt-[56.25%]">
                <iframe
                  src={video.src}
                  title={video.title}
                  className="absolute left-0 top-0 h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-zinc-600">{video.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-2xl">Additional work</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {youtubeVideos.map((video) => (
            <div key={video.src} className="space-y-3">
              <div className="relative w-full overflow-hidden rounded-lg border border-zinc-200 bg-black pt-[56.25%]">
                <iframe
                  src={video.src}
                  title={video.title}
                  className="absolute left-0 top-0 h-full w-full"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-zinc-600">{video.title}</p>
            </div>
          ))}
        </div>
        <ul className="mt-6 space-y-2 text-sm">
          {additionalLinks.map((link) => (
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

      <section className="mt-12">
        <h2 className="font-mono text-2xl">Process</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {process.map((step) => (
            <div key={step} className="rounded-lg border border-zinc-200 p-5">
              <p className="text-sm text-zinc-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-2xl">Deliverables</h2>
        <ul className="mt-4 space-y-2 text-sm text-zinc-600">
          {deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
        <h2 className="font-mono text-2xl">Quote workflow</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Share your shoot dates, location, scope, and budget range for a fast, professional
          response.
        </p>
        <Link
          className="mt-4 inline-flex items-center justify-center rounded-md border border-zinc-900 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5"
          href="/contact"
        >
          Start a quote request
        </Link>
      </section>
    </div>
  );
}
