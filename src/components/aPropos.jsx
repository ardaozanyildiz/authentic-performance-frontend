import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './aPropos.css';

function APropos() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <div className="about-header animate-fade-in">
        <h1>{t('about.title')}</h1>
        <div className="section-divider"></div>
        <p className="subtitle">{t('about.subtitle')}</p>
      </div>

      <div className="about-content">
        
        <section className="story-section">
          <div className="story-layout">
            
            <div className="story-photo-wrapper">
              <img 
                src="/images/rinoScalignePhoto.jpg"  
                alt="Rino Scaligne, fondateur d'Authentic Performance Production" 
                className="founder-photo" 
              />
            </div>
            
            <div className="story-text">
              <h2>{t('about.founderTitle')}</h2>
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2>{t('about.valuesTitle')}</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>{t('about.val1Title')}</h3>
              <p>{t('about.val1Text')}</p>
            </div>
            <div className="value-card">
              <h3>{t('about.val2Title')}</h3>
              <p>{t('about.val2Text')}</p>
            </div>
            <div className="value-card">
              <h3>{t('about.val3Title')}</h3>
              <p>{t('about.val3Text')}</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default APropos;