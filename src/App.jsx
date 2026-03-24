import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './components/accueil';
import Produits from './components/produits';
import ProduitDetail from './components/produitDetail';
import Contact from './components/contact';
import Login from './components/login';
import Signup from './components/signup';
import RendezVous from './components/rendezVous';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/products" element={<Produits />} />
        <Route path="/products/:id" element={<ProduitDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/rendez-vous" element={<RendezVous />} />
      </Routes>
    </div>
  );
}

export default App;