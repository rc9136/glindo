import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="topnav">
        <div className="logo">glindo</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ fontSize: 13, color: 'var(--glindo-text-secondary)' }}>Product</span>
          <span style={{ fontSize: 13, color: 'var(--glindo-text-secondary)' }}>Pricing</span>
          <span style={{ fontSize: 13, color: 'var(--glindo-text-secondary)' }}>Blog</span>
          <Link href="/dashboard" style={{ fontSize: 13 }}>
            Log in
          </Link>
          <Link href="/dashboard" className="btn-primary">
            Get started free
          </Link>
        </div>
      </div>

      <div className="hero">
        <h1>
          Where creators and AI find your next <span className="pill pill-accent">hit</span>
        </h1>
        <p>
          Capture content gaps, generate scripts, and ship videos faster — all in one AI
          workspace built for creators.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 24 }}>
          <Link href="/dashboard" className="btn-primary" style={{ padding: '11px 22px', fontSize: 14 }}>
            Get started free
          </Link>
          <button className="btn-secondary">Watch demo</button>
        </div>
      </div>
    </div>
  );
}
