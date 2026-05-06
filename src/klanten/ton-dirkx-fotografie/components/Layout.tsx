import { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AfspraakProvider } from './AfspraakContext';
import { AfspraakModal } from './AfspraakModal';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <AfspraakProvider>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <AfspraakModal />
    </div>
  </AfspraakProvider>
);
