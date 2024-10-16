import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const roboto = Roboto_Slab({
  weight: ['100', '400', '900'],
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >{children}</ThemeProvider>
      </body>
    </html>
  );
}
