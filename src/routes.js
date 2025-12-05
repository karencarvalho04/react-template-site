import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sobre from './Pages/Sobre'; 
import Home from './Pages/Home';
import Erro from './Pages/Erro';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Erro />} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;