import React from 'react';
import { InlineWidget } from 'react-calendly';
import { useTranslation } from 'react-i18next';
import './contact.css';
import './rendezVous.css';

function RendezVous() {
    const { t } = useTranslation();

    return (
        <div className="meeting-page">
            <div className="contact-page">
                <h1>{t('meeting.title')}</h1>
                <div className="contact-container">
                    <div className="contact-help-box">
                        <p>{t('meeting.helpText')}</p>
                    </div>
                </div>
            </div>

            <div className="meeting-calendar-section">
                <InlineWidget
                    url="https://calendly.com/aysunonder8080/30min"
                    pageSettings={{
                        backgroundColor: 'ffffff', // Couleur de fond
                        hideEventTypeDetails: false, // Cache ou non les infos à gauche
                        primaryColor: 'c0392b',    // Change le bleu actuel par ton rouge !
                        textColor: '333333'        // Change la couleur du texte
                    }}
                    styles={{ height: '700px', width: '100%' }}
                />
            </div>
        </div>
    );
}

export default RendezVous;