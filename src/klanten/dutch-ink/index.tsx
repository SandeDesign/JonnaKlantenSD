import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { OverOns } from './pages/OverOns';
import { Diensten } from './pages/Diensten';
import { Contact } from './pages/Contact';

export const DutchInk = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/over-ons" element={<OverOns />} />
    <Route path="/de-ultieme-tattoo-gids-2026" element={<OverOns />} />
    <Route path="/uitgebreide-tattoo-gids" element={<Diensten />} />
    <Route path="/alles-over-tatoos" element={<Diensten />} />
    <Route path="/piercing" element={<Diensten />} />
    <Route path="/permanente-make-up" element={<Diensten />} />
    <Route path="/diensten" element={<Diensten />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Navigate to="." replace />} />
  </Routes>
);
