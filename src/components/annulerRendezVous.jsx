import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import './AnnulerRendezVous.css';

function AnnulerRendezVous() {
  const { id } = useParams();
  const { t } = useTranslation(); 
  const [statut, setStatut] = useState('attente'); 

  const confirmerAnnulation = async () => {
    setStatut('chargement');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setStatut('succes');
      } else {
        setStatut('erreur');
      }
    } catch (error) {
      console.error("Erreur d'annulation:", error);
      setStatut('erreur');
    }
  };

  return (
    <div className="cancel-page-wrapper">
      <div className="cancel-card">
        
        {statut === 'attente' && (
          <>
            <h2 className="cancel-title attente">{t('cancelMeeting.title')}</h2>
            <p className="cancel-text">{t('cancelMeeting.warning')}</p>
            <div className="cancel-actions">
              <button onClick={confirmerAnnulation} className="cancel-btn-danger">
                {t('cancelMeeting.btnYes')}
              </button>
              <Link to="/" className="cancel-link-text">
                {t('cancelMeeting.btnNo')}
              </Link>
            </div>
          </>
        )}

        {statut === 'chargement' && (
          <h2 className="cancel-title chargement">{t('cancelMeeting.loading')}</h2>
        )}

        {statut === 'succes' && (
          <>
            <h2 className="cancel-title succes">{t('cancelMeeting.successTitle')}</h2>
            <p className="cancel-text">{t('cancelMeeting.successText')}</p>
            <Link to="/" className="cancel-btn-primary">{t('cancelMeeting.btnHome')}</Link>
          </>
        )}

        {statut === 'erreur' && (
          <>
            <h2 className="cancel-title erreur">{t('cancelMeeting.errorTitle')}</h2>
            <p className="cancel-text">{t('cancelMeeting.errorText')}</p>
            <Link to="/contact" className="cancel-btn-primary">{t('cancelMeeting.btnContact')}</Link>
          </>
        )}

      </div>
    </div>
  );
}

export default AnnulerRendezVous;