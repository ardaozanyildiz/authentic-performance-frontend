import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';
import { Scissors, Wind, Package, ArrowRight, CheckCircle } from './Icons';
import './accueil.css';

function Accueil() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="accueil-page">
      
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content animate-fade-in">
            <h1 className="hero-title">{t('hero.title')}</h1>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
            <Link to="/contact" className="hero-btn">
              {t('hero.button')}
              <ArrowRight size={18} className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      <section className="expertise-section">
        <h2 className="section-title animate-fade-in-up">{t('expertise.title')}</h2>
        <div className="section-divider"></div>
        
        <div className="expertise-grid">
          <div className="expertise-card animate-fade-in-up stagger-1">
            <div className="icon-container">
              <Scissors size={42} strokeWidth={1.5} />
            </div>
            <h3>{t('expertise.coutureTitle')}</h3>
            <p>{t('expertise.coutureDesc')}</p>
          </div>
          
          <div className="expertise-card animate-fade-in-up stagger-2">
            <div className="icon-container">
              <Wind size={42} strokeWidth={1.5} />
            </div>
            <h3>{t('expertise.presseTitle')}</h3>
            <p>{t('expertise.presseDesc')}</p>
          </div>
          
          <div className="expertise-card animate-fade-in-up stagger-3">
            <div className="icon-container">
              <Package size={42} strokeWidth={1.5} />
            </div>
            <h3>{t('expertise.emballageTitle')}</h3>
            <p>{t('expertise.emballageDesc')}</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-image-container animate-slide-in-left">
            <img 
              src="/images/picAccueil.jpg" 
              alt="Atelier Authentic Performance Production" 
              className="about-img" 
            />
          </div>
          <div className="about-text-container animate-slide-in-right">
            <h2>{t('homeAbout.title')}</h2>
            <p>{t('homeAbout.text1')}</p>
            <p>{t('homeAbout.text2')}</p>
            
            <div className="about-features">
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>{t('homeAbout.feature1')}</span>
              </div>
           
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>{t('homeAbout.feature3')}</span>
              </div>
            </div>
            
            <Link to="/rendez-vous" className="secondary-btn">
              {t('homeAbout.button')}
              <ArrowRight size={18} className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      <section className="clients-section">
        <div className="clients-container">
          <h2 className="clients-title animate-fade-in-up">{t('partners.title')}</h2>
          <p className="clients-subtitle animate-fade-in-up stagger-1">{t('partners.subtitle')}</p>
          
          <div className="clients-grid">
            <div className="client-card animate-fade-in-up stagger-1">
              <span>Luc Fontaine Design inc</span>
            </div>
            <div className="client-card animate-fade-in-up stagger-2">
              <span>Collection Conrad C inc</span>
            </div>
            <div className="client-card animate-fade-in-up stagger-3">
              <span>Softworks Inc</span>
            </div>
            <div className="client-card animate-fade-in-up stagger-4">
              <span>Louben Sportswear Inc</span>
            </div>
            <div className="client-card animate-fade-in-up stagger-1">
              <span>Fred David Como Diffusion</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item animate-fade-in-up stagger-1">
            <span className="stat-number">30+</span>
            <span className="stat-label">{t('stats.years')}</span>
          </div>
          <div className="stat-item animate-fade-in-up stagger-2">
            <span className="stat-number">500+</span>
            <span className="stat-label">{t('stats.clients')}</span>
          </div>
          <div className="stat-item animate-fade-in-up stagger-3">
            <span className="stat-number">10K+</span>
            <span className="stat-label">{t('stats.products')}</span>
          </div>
          <div className="stat-item animate-fade-in-up stagger-4">
            <span className="stat-number">100%</span>
            <span className="stat-label">{t('stats.quality')}</span>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Accueil;