import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { OverOns } from './pages/OverOns';
import { Tarieven } from './pages/Tarieven';
import { Contact } from './pages/Contact';

export const AlfaTaxiLimoSittard = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/over-ons" element={<OverOns />} />
    <Route path="/tarieven" element={<Tarieven />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
