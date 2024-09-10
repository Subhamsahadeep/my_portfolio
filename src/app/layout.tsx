import type { Metadata } from 'next';
import './globals.css';
import './scrollbar.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Subham Saha - Senior Software Engineer',
  description:
    'Welcome to the portfolio of Subham Saha, a Senior Software Engineer with expertise in building scalable front-end platforms, integrating cutting-edge technologies, and optimizing performance for seamless user experiences. Explore experiences and projects ranging from innovative UI designs to complex backend solutions that showcase my proficiency in  React, Next.js, Node.js and modern development practices.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
