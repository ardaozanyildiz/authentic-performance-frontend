import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './processus.css';

function Processus() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="process-page">
      <div className="process-header animate-fade-in">
        <h1>{t('process.title')}</h1>
        <div className="section-divider"></div>
        <p className="subtitle">
          {t('process.subtitle')}
        </p>
      </div>

      <div className="timeline">
        <div className="timeline-item animate-fade-in-up">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>{t('process.step1Title')}</h3>
            <p>{t('process.step1Text')}</p>
          </div>
        </div>

        <div className="timeline-item animate-fade-in-up">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>{t('process.step2Title')}</h3>
            <p>{t('process.step2Text')}</p>
          </div>
        </div>

        <div className="timeline-item animate-fade-in-up">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>{t('process.step3Title')}</h3>
            <p>{t('process.step3Text')}</p>
          </div>
        </div>

        <div className="timeline-item animate-fade-in-up">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>{t('process.step4Title')}</h3>
            <p>{t('process.step4Text')}</p>
          </div>
        </div>

        <div className="timeline-item animate-fade-in-up">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>{t('process.step5Title')}</h3>
            <p>{t('process.step5Text')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Processus;