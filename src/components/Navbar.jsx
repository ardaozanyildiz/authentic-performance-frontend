import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User, Globe } from './Icons'; // Assure-toi que Icons est bien importé
import './navbar.css';

function Navbar() {
  const { t, i18n } = useTranslation();
  // Ajout de l'état pour le menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const langue = i18n.resolvedLanguage && i18n.resolvedLanguage.startsWith('fr') ? 'fr' : 'en';

  const changement = () => {
    i18n.changeLanguage(langue === 'fr' ? 'en' : 'fr');
  };

  // Fonction pour fermer le menu quand on clique sur un lien
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      
      {/* Le Logo */}
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <span className="logo-text">
          <span className="logo-main">AUTHENTIC</span>
          <span className="logo-sub">PERFORMANCE PRODUCTION</span>
        </span>
      </Link>

      {/* Le Bouton Hamburger (Visible seulement sur mobile) */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Menu"
      >
        {isMobileMenuOpen ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        )}
      </button>

      {/* La boîte qui contient tout le menu (Liens + Bouton de langue) */}
      <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        
        <nav className="nav-links">
          {/* On ajoute onClick={closeMenu} pour que le menu se ferme quand on change de page */}
          <Link to="/" onClick={closeMenu}>{t('nav.home')}</Link>
          <Link to="/products" onClick={closeMenu}>{t('nav.products')}</Link>
          <Link to="/processus" onClick={closeMenu}>{t('nav.process')}</Link>
          <Link to="/contact" onClick={closeMenu}>{t('nav.contact')}</Link>
          <Link to="/rendez-vous" onClick={closeMenu}>{t('nav.rendezVous')}</Link>
          <Link to="/a-propos" onClick={closeMenu}>{t('nav.about')}</Link>
        </nav>

        <div className="nav-right">
          <button className="lang-btn" onClick={() => { changement(); closeMenu(); }}>
            <Globe size={16} />
            {langue === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>

      </div>

    </header>
  );
}

export default Navbar;