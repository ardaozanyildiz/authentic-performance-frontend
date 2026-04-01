import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
        <Link to="/contact">{t('nav.contact')}</Link>
        <Link to="/rendez-vous">{t('nav.rendezVous')}</Link>
      </nav>

      <Link to="/" className="nav-logo">
        <img src="/images/logoSimple.png" alt="Authentic Performance Productions" />
      </Link>

      <div className="nav-right">
        <Link to="/login" className="profile-link" aria-label="Connexion">
          <img src="/images/user.png" alt="Profil" className="profile-img" />
        </Link>

        <button className="lang-btn" onClick={changement}>
          {langue === 'fr' ? 'English' : 'Français'}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
