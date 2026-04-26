import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User, Globe } from './Icons';
import './navbar.css';

function Navbar() {
  const { t, i18n } = useTranslation();
  
  const langue = i18n.resolvedLanguage && i18n.resolvedLanguage.startsWith('fr') ? 'fr' : 'en';

  const changement = () => {
    i18n.changeLanguage(langue === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className="navbar">
      <nav className="nav-links">
        <Link to="/">{t('nav.home')}</Link>
        <Link to="/products">{t('nav.products')}</Link>
        <Link to="/processus">{t('nav.process')}</Link>
        <Link to="/contact">{t('nav.contact')}</Link>
        <Link to="/rendez-vous">{t('nav.rendezVous')}</Link>
        <Link to="/a-propos">{t('nav.about')}</Link>
      </nav>

      <Link to="/" className="nav-logo">
        <span className="logo-text">
          <span className="logo-main">AUTHENTIC</span>
          <span className="logo-sub">PERFORMANCE PRODUCTION</span>
        </span>
      </Link>

      <div className="nav-right">
        <Link to="/login" className="profile-link" aria-label="Connexion">
          <User size={22} strokeWidth={1.8} />
        </Link>

        <button className="lang-btn" onClick={changement}>
          <Globe size={16} />
          {langue === 'fr' ? 'EN' : 'FR'}
        </button>
      </div>
    </header>
  );
}

export default Navbar;