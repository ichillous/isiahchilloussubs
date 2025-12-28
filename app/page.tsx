import Link from 'next/link';

const metrics = [
  {
    value: '12+',
    label: 'Enterprise launches',
    detail: 'Fraud, insurance, and fintech releases shipped calmly.'
  },
  {
    value: '100K+',
    label: 'Customer enrollments',
    detail: 'Nationwide members onboarded through modern funnels.'
  },
  {
    value: '5 squads',
    label: 'Cross-functional pods',
    detail: 'Fraud, product, and infra partners aligned.'
  }
];

const chapters = [
  {
    title: 'Engineer',
    description: 'Systems, performance, reliability, craft.'
  },
  {
    title: 'Filmmaker',
    description: 'Documentary eye, clean visuals, strong storytelling.'
  },
  {
    title: 'Builder',
    description: 'Products, experiments, and what I am shipping now.'
  }
];

const caseStudies = [
  {
    title: 'Fraud Decisioning APIs',
    company: 'JPMorgan Chase & Co.',
    summary:
      'Risk teams needed consistent fraud decision payloads across internal and external signals.',
    ownership: [
      'Spring Boot APIs + Kafka consumers',
      'Contract test strategy with Pact and Karate',
      'On-call support and reporting for fraud leadership'
    ],
    results: [
      'Normalized fraud decision payloads for CCB squads',
      'AI-powered reporting for fraud leadership'
    ]
  },
  {
    title: 'Husna Founding Build',
    company: 'Husna',
    summary:
      'Early-stage fintech needed an MVP to validate research and secure stakeholder alignment.',
    ownership: [
      'Backend architecture and data model',
      'Offshore engineering coordination',
      'Product system in Figma'
    ],
    results: [
      'MVP delivered for funding conversations',
      'Stakeholders aligned on product direction'
    ]
  },
  {
    title: 'Nationwide Connect',
    company: 'Nationwide Insurance',
    summary:
      'Quoting journeys needed performance gains and smooth CMS-driven updates at scale.',
    ownership: [
      'Angular/Formly quoting flows',
      'CMS integrations',
      'Agile delivery with squad partners'
    ],
    results: ['100K+ members enrolled', '25% faster load times']
  }
];

export default function HomePage() {
  return (
    <div className="bg-white text-zinc-900">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          Columbus | Remote-friendly
        </p>
        <h1 className="mt-4 font-mono text-4xl md:text-6xl">
          Isiah Chillous - Software Engineer & Filmmaker
        </h1>
        <p className="mt-4 text-xl text-zinc-700">
          I build performant web systems and cinematic stories.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
            href="/software"
          >
            View Engineering Work
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5"
            href="/film"
          >
            View Film Work
          </Link>
        </div>
        <p className="mt-6 max-w-2xl text-sm text-zinc-600">
          Full-Stack Engineer (Java/Spring Boot, Kafka) building fraud and risk
          systems in regulated environments.
        </p>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border border-zinc-200 bg-white p-6">
              <p className="text-3xl font-semibold text-zinc-900">
                {metric.value}
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-700">
                {metric.label}
              </p>
              <p className="mt-3 text-sm text-zinc-500">{metric.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-mono text-2xl">Dual-track identity</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Engineer and filmmaker, with a focus on calm execution and crisp storytelling.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-zinc-200 p-6">
            <h3 className="font-mono text-xl">Engineer</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>Fraud and risk decisioning in regulated environments</li>
              <li>Event-driven platforms with Kafka</li>
              <li>Contract testing with Pact and Karate</li>
              <li>12+ enterprise launches with on-call readiness</li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-6">
            <h3 className="font-mono text-xl">Filmmaker</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>Documentary eye and clean visuals</li>
              <li>Human detail and thoughtful pacing</li>
              <li>Process-focused, with clear deliverables</li>
              <li>Quote workflow that feels professional</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="font-mono text-2xl">Scroll chapters</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Apple-ish storytelling, built to stay fast and accessible.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {chapters.map((chapter) => (
            <div key={chapter.title} className="rounded-lg border border-zinc-200 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                {chapter.title}
              </p>
              <p className="mt-3 text-sm text-zinc-600">
                {chapter.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-mono text-2xl">Selected work</h2>
          <Link className="text-sm text-zinc-600 hover:text-zinc-900" href="/software">
            See more engineering
          </Link>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div key={study.title} className="rounded-lg border border-zinc-200 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                {study.title}
              </p>
              <h3 className="mt-2 font-mono text-lg">{study.company}</h3>
              <p className="mt-3 text-sm text-zinc-600">{study.summary}</p>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Ownership
                </p>
                <ul className="mt-2 space-y-1 text-sm text-zinc-600">
                  {study.ownership.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Results
                </p>
                <ul className="mt-2 space-y-1 text-sm text-zinc-600">
                  {study.results.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="font-mono text-2xl">Lets talk</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Reach out for regulated systems, film collaborations, or new builds.
          </p>
          <Link
            className="mt-6 inline-flex items-center justify-center rounded-md border border-zinc-900 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5"
            href="/contact"
          >
            Contact Isiah
          </Link>
        </div>
      </section>
    </div>
  );
}
