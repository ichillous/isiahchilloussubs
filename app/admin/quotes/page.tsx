const quotes = [
  {
    client: 'Local nonprofit',
    status: 'reviewing',
    complexity: 6,
    band: '$1.5k - $3k'
  },
  {
    client: 'Brand commercial',
    status: 'new',
    complexity: 9,
    band: '$5k - $8k'
  }
];

export default function AdminQuotesPage() {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6">
      <h2 className="font-mono text-xl">Film quote requests</h2>
      <p className="mt-2 text-sm text-zinc-600">
        Complexity score and pricing band are editable per request.
      </p>
      <div className="mt-6 space-y-4">
        {quotes.map((quote) => (
          <div key={quote.client} className="rounded-lg border border-zinc-200 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-mono text-lg">{quote.client}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {quote.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Complexity score: {quote.complexity}
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              Suggested band: {quote.band}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
