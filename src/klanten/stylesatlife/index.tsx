import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { OverOns } from './pages/OverOns';
import { Diensten } from './pages/Diensten';
import { Resultaten } from './pages/Resultaten';
import { Tips } from './pages/Tips';
import { TipDetail } from './pages/TipDetail';
import { Contact } from './pages/Contact';

export const Stylesatlife = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/over-ons" element={<OverOns />} />
    <Route path="/diensten" element={<Diensten />} />
    <Route path="/resultaten" element={<Resultaten />} />
    <Route path="/tips" element={<Tips />} />
    <Route path="/tips/:id" element={<TipDetail />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
