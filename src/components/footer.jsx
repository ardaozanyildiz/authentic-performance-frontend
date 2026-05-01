import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from './icons';
import './footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">

      <div className="footer-main">
        <div className="footer-container">
          
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <span className="footer-logo-main">AUTHENTIC</span>
              <span className="footer-logo-sub">PERFORMANCE PRODUCTION</span>
            </div>
            <div className="footer-contact-info">
              <div className="contact-item">
                <MapPin size={18} />
                <span>9600 Rue Meilleur, Suite #820-4<br/>Montreal, QC H2N 2E3</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>+1 (514) 377-6245</span>
              </div>
              
              <div className="contact-item">
                <Clock size={18} />
                <span>{t('contact.hoursValue')}</span>
              </div>
            </div>
          </div>

          <div className="footer-col links-col">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/products">{t('nav.products')}</Link></li>
              <li><Link to="/rendez-vous">{t('nav.rendezVous')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-col links-col">
            <h4>{t('footer.ourServices')}</h4>
            <ul>
              <li><Link to="/products">{t('services.custom')}</Link></li>
              <li><Link to="/products">{t('services.presse')}</Link></li>
              <li><Link to="/products">{t('services.emballage')}</Link></li>
            </ul>
          </div>

       

        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
