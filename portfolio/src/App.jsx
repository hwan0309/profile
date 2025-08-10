import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Soltech from './Soltech';
import Paradise from './Paradise';
import Gkl from './Gkl';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Soltech" element={<Soltech />} />
        <Route path="/Paradise" element={<Paradise />} />
        <Route path="/Gkl" element={<Gkl />} />
      </Routes>
    </BrowserRouter>
  );
}
