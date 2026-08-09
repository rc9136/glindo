import './globals.css';

export const metadata = {
  title: 'Glindo — AI workspace for creators',
  description:
    'Connect your channel and get AI-scored content gaps, scripts, and SEO — all in one workspace.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
