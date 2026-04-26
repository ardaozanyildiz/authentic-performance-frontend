import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Accueil from './components/accueil';
import Produits from './components/produits';
import ProduitDetail from './components/produitDetail';
import Contact from './components/contact';
import Login from './components/login';
import Signup from './components/signup';
import RendezVous from './components/rendezVous';
import Chatbot from './components/chatbot';
import AnnulerRendezVous from './components/annulerRendezVous';
import Processus from './components/processus'; 
import APropos from './components/aPropos';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/products" element={<Produits />} />
          <Route path="/products/:id" element={<ProduitDetail />} />
          <Route path="/processus" element={<Processus />} /> {/* <-- NOUVEAU */}
          <Route path="/a-propos" element={<APropos />} /> {/* <-- NOUVEAU */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/rendez-vous" element={<RendezVous />} />
          <Route path="/annuler-rdv/:id" element={<AnnulerRendezVous />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;