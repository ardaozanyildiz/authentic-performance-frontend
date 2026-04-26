import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Check, Store, Calendar, Phone, MapPin, Shirt, Bed, HardHat } from './Icons';
import Footer from './footer'; 
import products from '../data/products';
import './produitDetail.css';

function ProduitDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); 

  const lang = i18n.resolvedLanguage && i18n.resolvedLanguage.startsWith('fr') ? 'fr' : 'en';
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="detail-page not-found">
        <div className="not-found-content">
          <h2>Product not found</h2>
          <Link to="/products" className="back-btn">
            <ArrowLeft size={18} />
            {t('products.backButton')}
          </Link>
        </div>
      </div>
    );
  }

  const info = product[lang];

  const getCategoryIcon = (category) => {
    if (category === 'clothing') return <Shirt size={18} />;
    if (category === 'linens') return <Bed size={18} />;
    if (category === 'workwear') return <HardHat size={18} />;
    return null;
  };

  const getCategoryLabel = (category) => {
    if (category === 'clothing') return t('products.clothing');
    if (category === 'linens') return t('products.linens');
    if (category === 'workwear') return t('products.workwear');
    return category;
  };

  return (
    <div className="detail-page">
      <div className="detail-breadcrumb">
        <Link to="/products" className="back-btn animate-fade-in">
          <ArrowLeft size={18} />
          {t('products.backButton')}
        </Link>
      </div>

      <div className="detail-container">
        <div className="detail-image-section animate-slide-in-left">
          <div className="image-wrapper">
            <img src={product.image} alt={info.name} className="detail-image" />
          </div>
        </div>

        <div className="detail-info-section animate-slide-in-right">
          <span className="detail-category">
            {getCategoryIcon(product.category)}
            {getCategoryLabel(product.category)}
          </span>
          
          <h1 className="detail-title">{info.name}</h1>
          
          {/* L'AFFICHAGE DU PRIX A ÉTÉ RETIRÉ ICI */}

          <div className="detail-description">
            <h3>{t('products.description')}</h3>
            <p>{info.description}</p>
          </div>

          <div className="detail-features">
            <h3>{t('products.features')}</h3>
            <ul>
              {info.features.map((feature, i) => (
                <li key={i}>
                  <Check size={18} className="check-icon" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="in-store-notice">
            <Store size={24} />
            <div>
              <strong>{t('products.inStoreOnly')}</strong>
              <p>{t('products.visitStoreText')}</p>
            </div>
          </div>

          <div className="detail-actions">
            <Link to="/rendez-vous" className="action-btn primary">
              <Calendar size={18} />
              {t('products.btnMeeting')}
            </Link>
            <Link to="/contact" className="action-btn secondary">
              <Phone size={18} />
              {t('products.btnContact')}
            </Link>
          </div>
        </div>
      </div>

      <div className="visit-section animate-fade-in-up">
        <div className="visit-content">
          <MapPin size={32} className="visit-icon" />
          <div>
            <h3>{t('products.visitStore')}</h3>
            <p>9600 Rue Meilleur, Suite #820-4, Montreal, QC H2N 2E3</p>
            <p className="visit-hours">{t('contact.hoursValue')}</p>
          </div>
        </div>
      </div>
      
  
    </div>
  );
}

export default ProduitDetail;