import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
  title: 'EXO',
  description: 'Kết nối giải pháp công nghệ toàn diện cho doanh nghiệp.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-white text-neutral-900">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
