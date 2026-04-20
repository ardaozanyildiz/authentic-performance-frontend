import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './contact.css';

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setStatus('Envoi en cours...');

    try {
      const response = await fetch('http://localhost:8080/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', subject: '', message: '' }); 
      } else {
        setStatus('Erreur lors de l\'envoi du message.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setStatus('Erreur de connexion au serveur.');
    }
  };

  return (
    <div className="contact-page">
      <h1>{t('contact.title')}</h1>
      {/* --- NOUVEAU SOUS-TITRE ICI --- */}
      <p className="subtitle">{t('contact.subtitle')}</p>
      
      <div className="contact-container">
        <div className="contact-help-box">
          <p>{t('contact.helpText')}</p>
        </div>

        {/* --- LES INFOS SONT À GAUCHE --- */}
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
          <div className="info-item meeting-cta">
            <p>{t('contact.meetingCTA')} <Link to="/rendez-vous">{t('contact.meetingLink')}</Link></p>
          </div>
        </div>

        {/* --- LE FORMULAIRE EST À DROITE --- */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>{t('contact.name')}</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t('contact.name')} required />

          <label>{t('contact.email')}</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('contact.email')} required />

          <label>{t('contact.subject')}</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder={t('contact.subject')} required />

          <label>{t('contact.message')}</label>
          <textarea rows="5" name="message" value={formData.message} onChange={handleChange} placeholder={t('contact.message')} required></textarea>

          <button type="submit" className="send-btn">{t('contact.send')}</button>
          
          {status && <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#000000', textAlign: 'center' }}>{status}</p>}
        </form>

      </div>
    </div>
  );
}

export default Contact;