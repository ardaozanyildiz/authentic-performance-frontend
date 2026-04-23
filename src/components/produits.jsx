import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Shirt, Bed, HardHat, Grid3X3, ArrowRight, Store } from './Icons';
import Footer from './footer'; // Ajout du pied de page
import products from '../data/products';
import './produits.css';

function Produits() {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const lang = i18n.resolvedLanguage && i18n.resolvedLanguage.startsWith('fr') ? 'fr' : 'en';

  // 1. Remonter en haut de la page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2. Simplification du filtrage
  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  // 3. Simplification des fonctions d'icônes
  const getCategoryIcon = (category) => {
    if (category === 'clothing') return <Shirt size={16} />;
    if (category === 'linens') return <Bed size={16} />;
    if (category === 'workwear') return <HardHat size={16} />;
    return null;
  };

  const getCategoryLabel = (category) => {
    if (category === 'clothing') return t('products.clothing');
    if (category === 'linens') return t('products.linens');
    if (category === 'workwear') return t('products.workwear');
    return category;
  };

  return (
    <div className="products-page">
      
      <header className="products-hero">
        <h1 className="animate-fade-in">{t('products.mainTitle')}</h1>
        <div className="section-divider"></div>
        <p className="products-subtitle animate-fade-in">{t('products.mainSubtitle')}</p>
      </header>

      <div className="filter-container animate-fade-in-up">
        <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>
          <Grid3X3 size={18} /> {t('products.allProducts')}
        </button>
        <button className={`filter-btn ${activeFilter === 'clothing' ? 'active' : ''}`} onClick={() => setActiveFilter('clothing')}>
          <Shirt size={18} /> {t('products.clothing')}
        </button>
        <button className={`filter-btn ${activeFilter === 'linens' ? 'active' : ''}`} onClick={() => setActiveFilter('linens')}>
          <Bed size={18} /> {t('products.linens')}
        </button>
        <button className={`filter-btn ${activeFilter === 'workwear' ? 'active' : ''}`} onClick={() => setActiveFilter('workwear')}>
          <HardHat size={18} /> {t('products.workwear')}
        </button>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <Link to={`/products/${product.id}`} key={product.id} className={`product-card animate-fade-in-up stagger-${(index % 6) + 1}`}>
            <div className="product-image-container">
              <img src={product.image} alt={product[lang].name} className="product-image" />
              <div className="product-overlay">
                <span className="view-details">
                  {t('products.viewDetails')} <ArrowRight size={16} />
                </span>
              </div>
            </div>
            <div className="product-info">
              <span className="product-category">
                {getCategoryIcon(product.category)} {getCategoryLabel(product.category)}
              </span>
              <h3 className="product-name">{product[lang].name}</h3>
              {/* Le prix a été supprimé ici ! */}
            </div>
          </Link>
        ))}
      </div>

      <div className="products-cta-section animate-fade-in-up">
        <Store size={48} strokeWidth={1.5} className="cta-icon" />
        <h3>{t('products.ctaText')}</h3>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-btn primary">
            {t('products.btnContact')} <ArrowRight size={18} />
          </Link>
          <Link to="/rendez-vous" className="cta-btn secondary">
            {t('products.btnMeeting')} <ArrowRight size={18} />
          </Link>
        </div>
      </div>

   
    </div>
  );
}

export default Produits;