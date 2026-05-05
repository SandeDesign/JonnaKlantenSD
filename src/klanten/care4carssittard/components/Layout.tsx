import { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div
    data-client="care4carssittard"
    className="min-h-screen flex flex-col"
    style={{ fontFamily: "'Barlow', sans-serif", backgroundColor: '#F3F4F6' }}
  >
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);
