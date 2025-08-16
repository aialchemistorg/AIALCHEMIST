import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AIALCHEMIST - Reprogramming the Future',
  description: 'Next-gen student-led AI/Web3 platform. By Students. For the World.',
  keywords: 'AI, Web3, Blockchain, Student Innovation, Technology, Research',
  authors: [{ name: 'AIALCHEMIST Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}