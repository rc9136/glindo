'use client';

import { useState } from 'react';
import AppShell from '../../components/AppShell';
import ProjectCard from '../../components/ProjectCard';

type Project = { title: string; status: 'Published' | 'Scripting' | 'Idea'; edited: string };

const initialProjects: Project[] = [
  { title: 'Top 10 AI tools for students', status: 'Published', edited: 'Edited 2d ago' },
  { title: 'Free vs paid AI tools', status: 'Scripting', edited: 'Edited 5h ago' },
  { title: 'Study playlist hack', status: 'Idea', edited: 'Edited 1d ago' },
];

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  function createProject() {
    if (!newTitle.trim()) return;
    setProjects([{ title: newTitle.trim(), status: 'Idea', edited: 'Just now' }, ...projects]);
    setNewTitle('');
    setShowModal(false);
  }

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
        <div style={{ fontSize: 16, fontWeight: 600 }}>Your projects</div>
        <button className="btn-primary" onClick={() => setShowModal(true)}>
          <i className="ti ti-plus" aria-hidden="true" /> New project
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={p.title + i} className="fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
            <div className="card card-interactive">
              <ProjectCardInner {...p} />
            </div>
          </div>
        ))}
        <div className="card-dashed" onClick={() => setShowModal(true)}>
          <i className="ti ti-plus" style={{ marginRight: 6 }} aria-hidden="true" /> New project
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>New project</div>
            <input
              className="modal-input"
              autoFocus
              placeholder="e.g. Best budget laptops for college"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && createProject()}
            />
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button className="btn-secondary" style={{ padding: '8px 14px', fontSize: 13 }} onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="btn-primary" onClick={createProject}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}

function ProjectCardInner({ title, status, edited }: Project) {
  const statusClass = { Published: 'status-published', Scripting: 'status-scripting', Idea: 'status-idea' }[status];
  return (
    <>
      <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>{title}</div>
      <div className={`status-dot ${statusClass}`}>
        <span>●</span> {status}
      </div>
      <div style={{ fontSize: 11, color: 'var(--glindo-text-muted)' }}>{edited}</div>
    </>
  );
}
