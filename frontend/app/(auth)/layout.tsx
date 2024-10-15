import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Signup',
  description: 'Login or signup',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
