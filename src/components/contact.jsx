import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './contact.css';

function Contact() {
  const { t } = useTranslation();

  // 1. On crée un espace en mémoire pour ce que l'utilisateur tape
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 2. Un espace pour afficher "Envoi en cours..." ou "Succès !"
  const [status, setStatus] = useState('');

  // 3. Cette fonction met à jour la mémoire à chaque lettre tapée
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. L'action principale quand on clique sur ENVOYER
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche la page de clignoter/recharger
    setStatus('Envoi en cours...');

    try {
      // On envoie les données à ton backend Spring Boot (port 8080 par défaut)
      const response = await fetch('http://localhost:8080/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', subject: '', message: '' }); // On vide les cases
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
      <div className="contact-container">
        <div className="contact-help-box">
          <p>{t('contact.helpText')}</p>
        </div>

        {/* 5. On branche notre fonction handleSubmit sur le formulaire */}
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
          
          {/* Affiche le message de succès ou d'erreur en bas du bouton */}
          {status && <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#000000', textAlign: 'center' }}>{status}</p>}
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
          <div className="info-item meeting-cta">
            <p>{t('contact.meetingCTA')} <Link to="/rendez-vous">{t('contact.meetingLink')}</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;