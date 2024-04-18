import type {Metadata} from 'next';
import {Anton} from 'next/font/google';
import './globals.css';

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AcLhEzX',
  description: 'Sey henlo two da CHZCEO FiRsT DeFlATiOnaRy MemEcOiN On CHZ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={anton.className}>{children}</body>
    </html>
  );
}
