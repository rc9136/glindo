export default function GapIdeaCard({
  title,
  badge,
  badgeClass,
  reason,
}: {
  title: string;
  badge: string;
  badgeClass: string;
  reason: string;
}) {
  return (
    <div className="card" style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 13, fontWeight: 500 }}>{title}</div>
        <div className={`badge-opportunity ${badgeClass}`}>{badge}</div>
      </div>
      <div style={{ fontSize: 11, color: 'var(--glindo-text-secondary)', marginTop: 6 }}>
        {reason}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginTop: 10,
          color: 'var(--glindo-accent)',
          fontSize: 12,
          fontWeight: 500,
        }}
      >
        Send to Script Studio →
      </div>
    </div>
  );
}
