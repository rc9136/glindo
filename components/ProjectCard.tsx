type Status = 'Published' | 'Scripting' | 'Idea';

const statusClass: Record<Status, string> = {
  Published: 'status-published',
  Scripting: 'status-scripting',
  Idea: 'status-idea',
};

export default function ProjectCard({
  title,
  status,
  edited,
}: {
  title: string;
  status: Status;
  edited: string;
}) {
  return (
    <div className="card">
      <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>{title}</div>
      <div className={`status-dot ${statusClass[status]}`}>
        <span>●</span> {status}
      </div>
      <div style={{ fontSize: 11, color: 'var(--glindo-text-muted)' }}>{edited}</div>
    </div>
  );
}
