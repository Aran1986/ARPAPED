import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ARPAPED - سوپر اپ ماژولار',
  description: 'Modular Web3 Super App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

// Location: ROOT/layout.tsx
