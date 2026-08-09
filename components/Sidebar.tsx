import Link from 'next/link';

const items = [
  { key: 'projects', label: 'Projects', href: '/dashboard' },
  { key: 'gap-finder', label: 'Gap Finder', href: '/gap-finder' },
  { key: 'script-studio', label: 'Script Studio', href: '/script-studio' },
  { key: 'seo-center', label: 'SEO Center', href: '/seo-center' },
  { key: 'analytics', label: 'Analytics', href: '/analytics' },
];

export default function Sidebar({ active }: { active: string }) {
  return (
    <div className="sidebar">
      {items.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          className={`sidebar-item${active === item.key ? ' active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
