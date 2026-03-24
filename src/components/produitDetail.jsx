//je vai changer cette page o complet
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import products from '../data/products';
import './produits.css';

function ProduitDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage && i18n.resolvedLanguage.startsWith('fr') ? 'fr' : 'en';

  // Trouver le produit par son id
  const product = products.find((p) => p.id === Number(id));

  // Si le produit n'existe pas
  if (!product) {
    return (
      <div className="detail-page">
        <h2>Product not found</h2>
        <Link to="/products">{t('products.backButton')}</Link>
      </div>
    );
  }

  const info = product[lang];

  return (
    <div className="detail-page">
      <Link to="/products" className="back-link">{t('products.backButton')}</Link>

      <div className="detail-container">
        <img src={product.image} alt={info.name} className="detail-image" />

        <div className="detail-info">
          <h1>{info.name}</h1>
          <p className="detail-price">${product.price.toFixed(2)}</p>

          <h3>{t('products.description')}</h3>
          <p>{info.description}</p>

          <h3>{t('products.features')}</h3>
          <ul>
            {info.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          <button className="add-to-cart-btn">{t('products.addToCart')}</button>
        </div>
      </div>
    </div>
  );
}

export default ProduitDetail;
