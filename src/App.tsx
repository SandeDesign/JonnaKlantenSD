import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { KlantenOverzicht } from './pages/KlantenOverzicht';
import { Sjabloon } from './klanten/sjabloon';
import { DutchInk } from './klanten/dutch-ink';
import { Care4CarsSittard } from './klanten/care4carssittard';
import { AlfaTaxi } from './klanten/alfa-taxi';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KlantenOverzicht />} />
        <Route path="/preview/sjabloon" element={<Sjabloon />} />
        <Route path="/preview/sjabloon/*" element={<Sjabloon />} />
        <Route path="/preview/dutch-ink" element={<DutchInk />} />
        <Route path="/preview/dutch-ink/*" element={<DutchInk />} />
        <Route path="/preview/care4carssittard" element={<Care4CarsSittard />} />
        <Route path="/preview/care4carssittard/*" element={<Care4CarsSittard />} />
        <Route path="/preview/alfa-taxi" element={<AlfaTaxi />} />
        <Route path="/preview/alfa-taxi/*" element={<AlfaTaxi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
