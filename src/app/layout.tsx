// Modules
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Wrapper from '@/components/Wrapper/Wrapper';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ComponentLab',
  description: 'Components from our lab, made accessible',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-testid="root-html">
      <body
        data-testid="root-body"
        className={`${geistSans.variable} ${geistMono.variable} antialiased scrollbar-thin scrollbar-thumb-black scrollbar-track-white`}
      >
        <Wrapper data-testid="root-wrapper">{children}</Wrapper>
      </body>
    </html>
  );
}
