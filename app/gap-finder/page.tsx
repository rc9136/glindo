import AppShell from '../../components/AppShell';
import GapIdeaCard from '../../components/GapIdeaCard';

// TODO: replace this static array with a real call to your backend once
// the YouTube Data API + Claude API scoring pipeline is wired up.
const ideas = [
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
  return (
    <AppShell active="gap-finder">
      <div style={{ fontSize: 16, fontWeight: 500 }}>Gap Finder</div>
      <div style={{ fontSize: 12, color: 'var(--glindo-text-secondary)', marginTop: 2, marginBottom: 14 }}>
        Connected: TechZoom
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
        <input
          placeholder="Enter a topic or niche..."
          style={{
            flex: 1,
            background: 'var(--glindo-surface)',
            border: '0.5px solid var(--glindo-border)',
            borderRadius: 8,
            padding: '9px 12px',
            fontSize: 13,
          }}
        />
        <button className="btn-primary">Analyze</button>
      </div>
      {ideas.map((idea) => (
        <GapIdeaCard key={idea.title} {...idea} />
      ))}
    </AppShell>
  );
}
