import { type ReactNode, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    const existing = document.getElementById('stylesatlife-font');
    if (!existing) {
      const link = document.createElement('link');
      link.id = 'stylesatlife-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
