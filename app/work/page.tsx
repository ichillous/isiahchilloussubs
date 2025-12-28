import Link from 'next/link';

const softwareWork = [
  {
    title: 'Fraud Decisioning APIs',
    company: 'JPMorgan Chase & Co.',
    summary: 'Normalized fraud decision payloads for CCB squads.'
  },
  {
    title: 'Husna Founding Build',
    company: 'Husna',
    summary: 'MVP delivered for funding conversations and stakeholder alignment.'
  },
  {
    title: 'Nationwide Connect',
    company: 'Nationwide Insurance',
    summary: '100K+ members enrolled with 25% faster load times.'
  }
];

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-mono text-4xl">Selected work</h1>
      <p className="mt-3 text-sm text-zinc-600">
        Filters are coming next. For now, browse software and film highlights.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <button className="rounded-md border border-zinc-900 px-4 py-2 text-sm">
          Software
        </button>
        <button className="rounded-md border border-zinc-300 px-4 py-2 text-sm">
          Film
        </button>
      </div>

      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="font-mono text-2xl">Software</h2>
          <Link className="text-sm text-zinc-600 hover:text-zinc-900" href="/software">
            Full portfolio
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {softwareWork.map((item) => (
            <div key={item.title} className="rounded-lg border border-zinc-200 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                {item.title}
              </p>
              <h3 className="mt-2 font-mono text-lg">{item.company}</h3>
              <p className="mt-3 text-sm text-zinc-600">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
