import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sobre from './Pages/Sobre'; 
import Home from './Pages/Home';
import Erro from './Pages/Erro';
<<<<<<< HEAD
=======
import Cadastro from './Pages/Cadastro';
>>>>>>> 7fc6445 (conexão db)
import Produto from './Pages/Produto';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Erro />} />
<<<<<<< HEAD
        <Route path="/produto/:id" element={<Produto />} />
=======
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/produto/:id" element={<Produto />} />

>>>>>>> 7fc6445 (conexão db)
      </Routes>
    </Router>
  );
}

export default AppRoutes;