import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      
      {/* --- Section Infolettre (Fond Blanc) --- */}
   

      {/* --- Section Principale (Fond Sombre) --- */}
      <div className="footer-main">
        <div className="footer-container">
          
          {/* Colonne 1 : Infos de l'entreprise */}
          <div className="footer-col brand-col">
            {/* Tu peux remplacer ce texte par une balise <img src="/images/logoImage.png" /> si tu préfères */}
            <h3 className="footer-logo-text">AUTHENTIC<br/>PERFORMANCE<br/>PRODUCTION</h3>
            <p>9600 Rue Meilleur, Suite #820-4<br/>Montreal, QC H2N 2E3</p>
            <p>T. +1 (514) 337-1951</p>
            <p>authenticperformanceproductions@gmail.com</p>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div className="footer-col links-col">
            <h4>LIENS RAPIDES</h4>
            <ul>
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/products">{t('nav.products')}</Link></li>
              <li><Link to="/rendez-vous">{t('nav.rendezVous')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Services */}
          <div className="footer-col links-col">
            <h4>NOS SERVICES</h4>
            <ul>
              <li><Link to="/products">{t('services.custom')}</Link></li>
              <li><Link to="/products">{t('services.alterations')}</Link></li>
              <li><Link to="/products">{t('services.consultation')}</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* --- Section Bas de page (Copyright et Légal) --- */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© 2026 Authentic Performance Production.</p>
          
       

        </div>
      </div>
      
    </footer>
  );
}

export default Footer;