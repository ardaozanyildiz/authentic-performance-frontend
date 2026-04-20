import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './produits.css';

function Produits() {
  const { t } = useTranslation();

  return (
    <div className="products-page">
      
      {/* --- En-tête de la page --- */}
      <header className="products-hero">
        <h1>{t('products.mainTitle')}</h1>
        <div className="section-divider"></div>
        <p className="products-subtitle">{t('products.mainSubtitle')}</p>
      </header>

      {/* --- Grille des catégories --- */}
      <div className="catalog-container">
        
        {/* Catégorie 1 : Vêtements */}
        <div className="catalog-card">
          <div className="card-icon">👕</div>
          <h2>{t('products.catClothing')}</h2>
          <ul className="item-list">
            <li>{t('items.tshirt')}</li>
            <li>{t('items.short')}</li>
            <li>{t('items.skirt')}</li>
            <li>{t('items.dress')}</li>
            <li>{t('items.pants')}</li>
            <li>{t('items.longSleeve')}</li>
            <li>{t('items.hoodie')}</li>
            <li>{t('items.camisole')}</li>
          </ul>
        </div>

        {/* Catégorie 2 : Literie */}
        <div className="catalog-card">
          <div className="card-icon">🛏️</div>
          <h2>{t('products.catLinens')}</h2>
          <ul className="item-list">
            <li>{t('items.bedSheet')}</li>
            <li>{t('items.mattressCover')}</li>
            <li>{t('items.towel')}</li>
          </ul>
        </div>

        {/* Catégorie 3 : Uniformes */}
        <div className="catalog-card">
          <div className="card-icon">🥼</div>
          <h2>{t('products.catWorkwear')}</h2>
          <ul className="item-list">
            <li>{t('items.apronKitchen')}</li>
            <li>{t('items.apronMedical')}</li>
          </ul>
        </div>

      </div>

      {/* --- Appel à l'action (Le CTA que tu as demandé) --- */}
      <div className="products-cta-section">
        <h3>{t('products.ctaText')}</h3>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-btn primary">{t('products.btnContact')}</Link>
          <Link to="/rendez-vous" className="cta-btn secondary">{t('products.btnMeeting')}</Link>
        </div>
      </div>

    </div>
  );
}

export default Produits;