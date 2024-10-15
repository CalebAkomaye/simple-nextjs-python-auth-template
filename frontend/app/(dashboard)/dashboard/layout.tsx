import type { Metadata } from 'next';
import Navbar from '../_components/navbar';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'create, edit and delete tasks',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
