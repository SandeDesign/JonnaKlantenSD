import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { OverVanDerSande } from './pages/OverVanDerSande';
import { PraktijkTheorie } from './pages/PraktijkTheorie';
import { Auto } from './pages/Auto';
import { Prijzen } from './pages/Prijzen';
import { Nieuws } from './pages/Nieuws';
import { Geslaagden } from './pages/Geslaagden';
import { Contact } from './pages/Contact';

export const AutorijschoolVdSande = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/over-van-der-sande" element={<OverVanDerSande />} />
    <Route path="/praktijk-theorie" element={<PraktijkTheorie />} />
    <Route path="/auto" element={<Auto />} />
    <Route path="/prijzen" element={<Prijzen />} />
    <Route path="/nieuws" element={<Nieuws />} />
    <Route path="/geslaagden" element={<Geslaagden />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
