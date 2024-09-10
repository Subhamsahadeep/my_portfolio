import type { Metadata } from 'next';
import './globals.css';
import './scrollbar.css';

export const metadata: Metadata = {
  title: 'Subham Saha',
  description: 'Portfolio by Subham Saha',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
