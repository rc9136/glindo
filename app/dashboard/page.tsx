import AppShell from '../../components/AppShell';
import ProjectCard from '../../components/ProjectCard';

export default function Dashboard() {
  return (
    <AppShell active="projects">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 16,
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 500 }}>Your projects</div>
        <button className="btn-primary">+ New project</button>
      </div>
      <div className="projects-grid">
        <ProjectCard title="Top 10 AI tools for students" status="Published" edited="Edited 2d ago" />
        <ProjectCard title="Free vs paid AI tools" status="Scripting" edited="Edited 5h ago" />
        <ProjectCard title="Study playlist hack" status="Idea" edited="Edited 1d ago" />
        <div className="card-dashed">+ New project</div>
      </div>
    </AppShell>
  );
}
