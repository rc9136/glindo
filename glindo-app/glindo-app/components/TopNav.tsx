export default function TopNav() {
  return (
    <div className="topnav">
      <div className="logo">
        <span className="logo-mark">G</span>
        glindo
      </div>
      <div className="search-box" style={{ flex: 1, maxWidth: 320, margin: '0 24px' }}>
        <i className="ti ti-search" aria-hidden="true" />
        Search projects
      </div>
      <div className="avatar">TZ</div>
    </div>
  );
}
