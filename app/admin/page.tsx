export default function AdminHome() {
  return (
    <div className="grid gap-6">
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">New messages</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-900">--</p>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Active projects</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-900">--</p>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Pending quotes</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-900">--</p>
        </div>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-6">
        <h2 className="font-mono text-xl">Inbox</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Contact messages and film quote requests will appear here.
        </p>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-6">
        <h2 className="font-mono text-xl">Project tracker</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Track Web, Video, and Recruiter projects with clear next actions.
        </p>
      </section>
    </div>
  );
}
