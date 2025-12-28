const projects = [
  {
    title: 'Recruiter outreach follow-up',
    category: 'Recruiters',
    status: 'Active',
    priority: 'High',
    nextAction: 'Send updated portfolio link'
  },
  {
    title: 'Film quote estimator',
    category: 'Video',
    status: 'Idea',
    priority: 'Medium',
    nextAction: 'Draft pricing rules'
  }
];

export default function AdminProjectsPage() {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6">
      <h2 className="font-mono text-xl">Projects</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {['Web', 'Video', 'Recruiters'].map((filter) => (
          <span key={filter} className="rounded-full border border-zinc-300 px-3 py-1 text-xs">
            {filter}
          </span>
        ))}
      </div>
      <div className="mt-6 space-y-4">
        {projects.map((project) => (
          <div key={project.title} className="rounded-lg border border-zinc-200 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-mono text-lg">{project.title}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {project.category}
              </span>
            </div>
            <div className="mt-2 text-sm text-zinc-600">
              Status: {project.status} | Priority: {project.priority}
            </div>
            <p className="mt-2 text-sm text-zinc-600">Next action: {project.nextAction}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
