import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Tarieven } from './pages/Tarieven';
import { Boeken } from './pages/Boeken';
import { Contact } from './pages/Contact';

export const AlfaTaxi = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tarieven" element={<Tarieven />} />
    <Route path="/boeken" element={<Boeken />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
