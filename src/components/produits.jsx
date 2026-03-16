//Cette page est completement a reviser
import { Link } from 'react-router-dom';
import './produits.css';

function Produits() {


  return (
    <div className="products-page">
      <Link to="/" className="back-link">
          Retour à l'accueil
        </Link>
    </div>
  );
}

export default Produits;
