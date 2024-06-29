import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AgeCheck from './components/AgeCheck';
import AlcoholicBeverages from './components/AlcoholicBeverages';
import NaoPermitido from './components/NaoPermitido';
import ProductGrid from './components/ProductGrid';
import Sobre from './components/Sobremin';
import MyNavbar from './components/Navbar';
import CadastrarUsuario from './components/CadastrarUsuario';
import Criar from './components/Criar';
import Atualizar from './components/Atualizar';
import Mostar from './components/Mostrar'; 


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgeCheck />} />
        <Route path="/alcoholic-beverages" element={<AlcoholicBeverages />} />
        <Route path="/nao-permitido" element={<NaoPermitido />} />
        <Route path="/product-grid" element={<ProductGrid />} />
        <Route path="/cadastro-usuario" element={<CadastrarUsuario />} />
        <Route path="/sobre-min" element={<Sobre />} />
        <Route path="/Criar-usuario" element={<Criar />}/>
        <Route path="/atualizar/:id" element={<Atualizar />}></Route>
        <Route path="/mostrar/:id" element={<Mostar />}></Route> // Add the Mostar component
        <Route path="*" element={<h1>404 - Not Found</h1>} />
       
      </Routes>
      
    </Router>
    
  );
  <MyNavbar/>
};

export default App;
