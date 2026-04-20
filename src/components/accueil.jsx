import React from 'react';
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';
import Footer from './footer'; // <-- 1. On importe le Footer ici
import './accueil.css';

function Accueil() {
  const { t } = useTranslation();

  return (
    <div className="accueil-page">
      
      {/* SECTION 1 : HÉROS */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">{t('hero.title')}</h1>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
            <Link to="/contact" className="hero-btn">{t('hero.button')}</Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 : NOTRE SAVOIR-FAIRE */}
      <section className="expertise-section">
        <h2 className="section-title">{t('expertise.title')}</h2>
        <div className="section-divider"></div>
        
        <div className="expertise-grid">
          <div className="expertise-card">
            <div className="icon-placeholder">✂️</div>
            <h3>{t('expertise.coutureTitle')}</h3>
            <p>{t('expertise.coutureDesc')}</p>
          </div>
          
          <div className="expertise-card">
            <div className="icon-placeholder">💨</div>
            <h3>{t('expertise.presseTitle')}</h3>
            <p>{t('expertise.presseDesc')}</p>
          </div>
          
          <div className="expertise-card">
            <div className="icon-placeholder">📦</div>
            <h3>{t('expertise.emballageTitle')}</h3>
            <p>{t('expertise.emballageDesc')}</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 : À PROPOS */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image-container">
            <img 
              src="/images/picAccueil.jpg" 
              alt="Atelier Authentic Performance Production" 
              className="about-img" 
            />
          </div>
          <div className="about-text-container">
            <h2>{t('homeAbout.title')}</h2>
            <p>{t('homeAbout.text1')}</p>
            <p>{t('homeAbout.text2')}</p>
            <Link to="/rendez-vous" className="secondary-btn">{t('homeAbout.button')}</Link>
          </div>
        </div>
      </section>

      {/* --- LE FOOTER EST MAINTENANT EXCLUSIF À L'ACCUEIL --- */}
      <Footer /> 

    </div>
  );
}

export default Accueil;