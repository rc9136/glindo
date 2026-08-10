'use client';

import { useState } from 'react';

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
  const [sent, setSent] = useState(false);

  return (
    <div className="card card-interactive" style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 13, fontWeight: 500 }}>{title}</div>
        <div className={`badge-opportunity ${badgeClass}`}>{badge}</div>
      </div>
      <div style={{ fontSize: 11, color: 'var(--glindo-text-secondary)', marginTop: 6 }}>
        {reason}
      </div>
      <div className="send-link" style={{ marginTop: 10 }} onClick={() => setSent(true)}>
        {sent ? (
          <>
            <i className="ti ti-check" aria-hidden="true" /> Sent to Script Studio
          </>
        ) : (
          <>
            Send to Script Studio <i className="ti ti-arrow-right" aria-hidden="true" />
          </>
        )}
      </div>
    </div>
  );
}
