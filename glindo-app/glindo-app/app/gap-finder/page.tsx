'use client';

import { useState } from 'react';
import AppShell from '../../components/AppShell';
import GapIdeaCard from '../../components/GapIdeaCard';

// NOTE: this list is still simulated, not a real AI/API call yet.
// The loading + reveal flow is real; the data source is the next step.
const sampleResults = [
  {
    title: 'Comparing free vs paid AI tools for homework',
    badge: 'Opportunity 5',
    badgeClass: 'badge-high',
    reason: 'High demand, low competition — top results are 1-2 years old',
  },
  {
    title: 'Best note-taking apps for exam season',
    badge: 'Opportunity 3',
    badgeClass: 'badge-med',
    reason: 'Medium demand, medium competition — a few strong videos exist',
  },
  {
    title: 'AI study playlist for late-night revision',
    badge: 'Opportunity 4',
    badgeClass: 'badge-blue',
    reason: 'High demand, rising trend — barely any recent uploads',
  },
];

export default function GapFinder() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<typeof sampleResults | null>(null);

  function analyze() {
    if (!topic.trim()) return;
    setLoading(true);
    setResults(null);
    setTimeout(() => {
      setLoading(false);
      setResults(sampleResults);
    }, 1100);
  }

  return (
    <AppShell active="gap-finder">
      <div style={{ fontSize: 16, fontWeight: 600 }}>Gap Finder</div>
      <div style={{ fontSize: 12, color: 'var(--glindo-text-secondary)', marginTop: 2, marginBottom: 14 }}>
        Connected: TechZoom
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
        <input
          placeholder="Enter a topic or niche..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && analyze()}
          style={{
            flex: 1,
            background: 'var(--glindo-surface)',
            border: '0.5px solid var(--glindo-border)',
            borderRadius: 8,
            padding: '9px 12px',
            fontSize: 13,
          }}
        />
        <button className="btn-primary" onClick={analyze} disabled={loading || !topic.trim()}>
          {loading && <span className="spinner" />}
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>

      {loading && (
        <>
          {[0, 1, 2].map((i) => (
            <div className="skeleton" key={i}>
              <div className="skeleton-line" style={{ width: '70%' }} />
              <div className="skeleton-line" style={{ width: '45%', marginBottom: 0 }} />
            </div>
          ))}
        </>
      )}

      {!loading && results && (
        <>
          {results.map((idea, i) => (
            <div key={idea.title} className="fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <GapIdeaCard {...idea} />
            </div>
          ))}
        </>
      )}

      {!loading && !results && (
        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--glindo-text-muted)', fontSize: 13 }}>
          Type a topic above and hit Analyze to see ranked content gaps.
        </div>
      )}
    </AppShell>
  );
}
