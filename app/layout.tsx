import './globals.css';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export const metadata = {
  title: 'Alvy Agency',
  description: 'Fashion and Branding',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='p-4'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
