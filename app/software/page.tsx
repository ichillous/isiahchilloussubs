import Link from 'next/link';

const metrics = [
  { value: '12+', label: 'Enterprise launches' },
  { value: '100K+', label: 'Customer enrollments' },
  { value: '25%', label: 'Faster load times' }
];

const tldr = {
  Domains: [
    'Fraud and risk decisioning',
    'Regulated environments',
    'Fintech and insurance',
    'Event-driven platforms'
  ],
  'Core stack': ['Java/Spring Boot', 'Kafka', 'AWS', 'Angular and React', 'Docker and Kubernetes'],
  Strengths: [
    'Calm delivery',
    'Reliability and on-call readiness',
    'Observability-first mindset',
    'Collaborative leadership'
  ],
  'Signature wins': [
    '12+ enterprise launches',
    '100K+ members enrolled',
    '25% faster load times'
  ]
};

const caseStudies = [
  {
    title: 'Fraud Decisioning APIs',
    company: 'JPMorgan Chase & Co.',
    problem:
      'Risk teams needed consistent fraud decision payloads across internal and external signals.',
    ownership: [
      'Spring Boot APIs + Kafka consumers',
      'Contract test strategy with Pact/Karate',
      'On-call support + reporting for fraud leadership'
    ],
    results: [
      'Normalized fraud decision payloads for CCB squads',
      'AI-powered reporting for fraud leadership'
    ]
  },
  {
    title: 'Husna Founding Build',
    company: 'Husna',
    problem:
      'Early-stage fintech needed an MVP to validate research and secure stakeholder alignment.',
    ownership: [
      'Backend architecture + data model',
      'Offshore engineering coordination',
      'Product system in Figma'
    ],
    results: ['MVP delivered for funding conversations', 'Stakeholders aligned on product direction']
  },
  {
    title: 'Nationwide Connect',
    company: 'Nationwide Insurance',
    problem:
      'Quoting journeys needed performance gains and smooth CMS-driven updates at scale.',
    ownership: [
      'Angular/Formly quoting flows',
      'CMS integrations',
      'Agile delivery with squad partners'
    ],
    results: ['100K+ members enrolled', '25% faster load times']
  }
];

const ship = [
  {
    title: 'Testing',
    detail: 'Contract tests with Pact/Karate to keep services aligned.'
  },
  {
    title: 'Reliability',
    detail: 'On-call ready releases with calm escalation paths.'
  },
  {
    title: 'Observability',
    detail: 'Logs, metrics, and tracing built in early.'
  },
  {
    title: 'API and data',
    detail: 'Versioned interfaces and resilient event workflows.'
  }
];

const stack = {
  Backend: ['Java', 'Spring Boot', 'Node.js', 'Kafka'],
  Frontend: ['Angular 14', 'React', 'Formly'],
  'Cloud and DevOps': ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  Testing: ['Pact', 'Karate']
};

const experience = [
  {
    range: 'Nov 2024 - Present',
    role: 'Full-Stack Software Engineer',
    company: 'JPMorgan Chase & Co.',
    detail:
      'Ship Spring Boot APIs, Kafka consumers, and AI-powered reporting that drive fraud decisioning across CCB.'
  },
  {
    range: 'Jan 2024 - Jul 2024',
    role: 'Software Engineer',
    company: 'Husna',
    detail:
      'Directed MVP backend architecture, user research, and stakeholder alignment to secure funding.'
  },
  {
    range: 'Aug 2021 - Jan 2024',
    role: 'Software Engineer',
    company: 'Nationwide Insurance',
    detail:
      'Owned Angular/Formly quoting flows, CMS integrations, and agile delivery for 100K+ enrollments.'
  },
  {
    range: 'May 2021 - Oct 2021',
    role: 'Data Center Technician III',
    company: 'Amazon Web Services',
    detail:
      'Managed decommissioning projects and hardware/network repairs for 50+ hosts per week.'
  }
];

export default function SoftwarePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <header>
        <h1 className="font-mono text-4xl">Software engineering</h1>
        <p className="mt-4 text-lg text-zinc-700">
          Full-Stack Engineer (Java/Spring Boot, Kafka) building fraud and risk systems in regulated
          environments.
        </p>
      </header>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-lg border border-zinc-200 p-4">
            <p className="text-2xl font-semibold text-zinc-900">{metric.value}</p>
            <p className="text-sm text-zinc-600">{metric.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-2xl">Hiring Manager TL;DR</h2>
        <p className="mt-2 text-sm text-zinc-600">High-signal snapshot for quick review.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(tldr).map(([title, items]) => (
            <div key={title} className="rounded-lg border border-zinc-200 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{title}</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-2xl">Selected work</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div key={study.title} className="rounded-lg border border-zinc-200 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{study.title}</p>
              <h3 className="mt-2 font-mono text-lg">{study.company}</h3>
              <p className="mt-3 text-sm text-zinc-600">{study.problem}</p>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">What I owned</p>
                <ul className="mt-2 space-y-1 text-sm text-zinc-600">
                  {study.ownership.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Results</p>
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

      <section className="mt-12">
        <h2 className="font-mono text-2xl">How I ship</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {ship.map((item) => (
            <div key={item.title} className="rounded-lg border border-zinc-200 p-5">
              <h3 className="font-mono text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-2xl">Tech stack</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {Object.entries(stack).map(([title, items]) => (
            <div key={title} className="rounded-lg border border-zinc-200 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{title}</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-2xl">Experience</h2>
        <div className="mt-6 space-y-4">
          {experience.map((role) => (
            <div key={role.role} className="rounded-lg border border-zinc-200 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{role.range}</p>
              <h3 className="mt-2 font-mono text-lg">
                {role.role} | {role.company}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{role.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
        <h2 className="font-mono text-2xl">Ready for a new build?</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Lets talk! I am open to full-stack roles
          where calm execution, observability, and reliable releases matter.
        </p>
        <Link
          className="mt-4 inline-flex items-center justify-center rounded-md border border-zinc-900 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5"
          href="/contact"
        >
          Contact Isiah
        </Link>
      </section>
    </div>
  );
}
