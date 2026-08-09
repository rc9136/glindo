import TopNav from './TopNav';
import Sidebar from './Sidebar';

export default function AppShell({
  active,
  children,
}: {
  active: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopNav />
      <div className="app-shell">
        <Sidebar active={active} />
        <div className="main">{children}</div>
      </div>
    </div>
  );
}
