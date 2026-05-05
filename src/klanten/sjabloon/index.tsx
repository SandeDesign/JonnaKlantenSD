import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { OverOns } from './pages/OverOns';
import { Diensten } from './pages/Diensten';
import { Contact } from './pages/Contact';

export const Sjabloon = () => (
  <Routes>
    <Route path="" element={<Home />} />
    <Route path="over-ons" element={<OverOns />} />
    <Route path="diensten" element={<Diensten />} />
    <Route path="contact" element={<Contact />} />
  </Routes>
);
