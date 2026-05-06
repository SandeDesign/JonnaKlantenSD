import { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { config } from '../config';

export const Layout = ({ children }: { children: ReactNode }) => (
  <div data-client="dutch-ink" className="min-h-screen flex flex-col" style={{ backgroundColor: config.colors.achtergrond, color: config.colors.tekst }}>
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);
