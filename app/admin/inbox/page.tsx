const messages = [
  {
    name: 'Sample message',
    subject: 'Fraud system inquiry',
    status: 'new',
    received: '2025-12-01'
  },
  {
    name: 'Film lead',
    subject: 'Documentary short request',
    status: 'reviewing',
    received: '2025-11-18'
  }
];

export default function AdminInboxPage() {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6">
      <h2 className="font-mono text-xl">Inbox</h2>
      <p className="mt-2 text-sm text-zinc-600">
        Statuses: new, read, responded.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-zinc-200 text-xs uppercase tracking-[0.2em] text-zinc-500">
            <tr>
              <th className="pb-3">Name</th>
              <th className="pb-3">Subject</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Received</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {messages.map((message) => (
              <tr key={message.subject}>
                <td className="py-3 text-zinc-700">{message.name}</td>
                <td className="py-3 text-zinc-700">{message.subject}</td>
                <td className="py-3 text-zinc-600">{message.status}</td>
                <td className="py-3 text-zinc-500">{message.received}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
