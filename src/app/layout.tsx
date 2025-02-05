import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '400', '700'], // Specify required weights
  variable: '--font-oswald', // CSS variable name
  display: 'swap', // Prevent layout shift
});

export const metadata: Metadata = {
  title: "Karim's Portfolio",
  description: 'A frontend developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable}`}>
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
