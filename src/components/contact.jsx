import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, Calendar, CheckCircle, AlertCircle } from './Icons';
import './contact.css';

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setStatus({ type: 'loading', message: 'Envoi en cours...' });

    try {
      // L'adresse dynamique qui lit ton fichier .env !
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message envoyé avec succès !' });
        setFormData({ name: '', email: '', subject: '', message: '' }); 
      } else {
        setStatus({ type: 'error', message: 'Erreur lors de l\'envoi du message.' });
      }
    } catch (error) {
      console.error('Erreur:', error);
      setStatus({ type: 'error', message: 'Erreur de connexion au serveur.' });
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header animate-fade-in">
        <h1>{t('contact.title')}</h1>
        <div className="section-divider"></div>
        <p className="subtitle">{t('contact.subtitle')}</p>
      </div>
      
      <div className="contact-container">
        
        <div className="contact-info animate-slide-in-left">
          <h2>{t('contact.infoTitle')}</h2>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">
                <MapPin size={22} />
              </div>
              <div className="info-content">
                <strong>{t('contact.address')}</strong>
                <p>9600 Rue Meilleur, Suite #820-4</p>
                <p>Montreal, QC H2N 2E3</p>
                <p>Canada</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <Phone size={22} />
              </div>
              <div className="info-content">
                <strong>{t('contact.phone')}</strong>
                <p>+1 (514) 377-6245</p>
              </div>
            </div>
            
          
            
            <div className="info-item">
              <div className="info-icon">
                <Clock size={22} />
              </div>
              <div className="info-content">
                <strong>{t('contact.hours')}</strong>
                <p>{t('contact.hoursValue')}</p>
              </div>
            </div>
          </div>
          
          <div className="meeting-cta">
            <Calendar size={20} />
            <p>{t('contact.meetingCTA')} <Link to="/rendez-vous">{t('contact.meetingLink')}</Link></p>
          </div>
        </div>

        <form className="contact-form animate-slide-in-right" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>{t('contact.name')}</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder={t('contact.name')} 
              required 
            />
          </div>

          <div className="form-group">
            <label>{t('contact.email')}</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder={t('contact.email')} 
              required 
            />
          </div>

          <div className="form-group">
            <label>{t('contact.subject')}</label>
            <input 
              type="text" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              placeholder={t('contact.subject')} 
              required 
            />
          </div>

          <div className="form-group">
            <label>{t('contact.message')}</label>
            <textarea 
              rows="5" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder={t('contact.message')} 
              required
            ></textarea>
          </div>

          <button type="submit" className="send-btn">
            <Send size={18} />
            {t('contact.send')}
          </button>
          
          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.type === 'success' && <CheckCircle size={18} />}
              {status.type === 'error' && <AlertCircle size={18} />}
              {status.message}
            </div>
          )}
        </form>

      </div>
    </div>
  );
}

export default Contact;