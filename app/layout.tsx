import type {Metadata} from 'next';
import {Anton} from 'next/font/google';
import './globals.css';

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alexundre Dreyfus',
  description: 'Sey hallo tu da ceo of Chiliz',
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
