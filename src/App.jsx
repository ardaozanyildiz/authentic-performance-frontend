import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './components/accueil';
import Produits from './components/produits';
import Contact from './components/contact';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/products" element={<Produits />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;