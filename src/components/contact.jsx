import { useTranslation } from 'react-i18next';
import './contact.css';
//Fichier pour conatacter l'entreprise ou juste voir les infos
function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <h1>{t('contact.title')}</h1>
      <p className="contact-subtitle">{t('contact.subtitle')}</p>

      <div className="contact-container">
       
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>{t('contact.name')}</label>
          <input type="text" placeholder={t('contact.name')} />

          <label>{t('contact.email')}</label>
          <input type="email" placeholder={t('contact.email')} />

          <label>{t('contact.subject')}</label>
          <input type="text" placeholder={t('contact.subject')} />

          <label>{t('contact.message')}</label>
          <textarea rows="5" placeholder={t('contact.message')}></textarea>

          <button type="submit" className="send-btn">{t('contact.send')}</button>
        </form>

       
        <div className="contact-info">
          <h2>{t('contact.infoTitle')}</h2>

          <div className="info-item">
            <strong>{t('contact.address')}</strong>
            <p>9600 Rue Meilleur, Suite #820-4</p>
            <p>Montreal, QC H2N 2E3</p>
            <p>Canada</p>
          </div>

          <div className="info-item">
            <strong>{t('contact.phone')}</strong>
            <p>+1 (514) 337-1951</p>
          </div>

          <div className="info-item">
            <strong>Email</strong>
            <p>authenticperformanceproductions@gmail.com</p>
        
          </div>

          <div className="info-item">
            <strong>{t('contact.hours')}</strong>
            <p>{t('contact.hoursValue')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
