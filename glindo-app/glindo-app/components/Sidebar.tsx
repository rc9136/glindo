import Link from 'next/link';

const items = [
  { key: 'projects', label: 'Projects', href: '/dashboard', icon: 'ti-folder' },
  { key: 'gap-finder', label: 'Gap Finder', href: '/gap-finder', icon: 'ti-bulb' },
  { key: 'script-studio', label: 'Script Studio', href: '/script-studio', icon: 'ti-file-text' },
  { key: 'seo-center', label: 'SEO Center', href: '/seo-center', icon: 'ti-tags' },
  { key: 'analytics', label: 'Analytics', href: '/analytics', icon: 'ti-chart-bar' },
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
          <i className={`ti ${item.icon}`} aria-hidden="true" />
          {item.label}
        </Link>
      ))}
    </div>
  );
}
