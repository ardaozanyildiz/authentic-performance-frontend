import { useTranslation } from 'react-i18next';
import './signup.css';

function Signup() {
  const { t } = useTranslation();

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1>{t('signup.title')}</h1>
        <p className="signup-subtitle">{t('signup.subtitle')}</p>

        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <label>{t('signup.fullName')}</label>
          <input type="text" placeholder={t('signup.fullName')} />

          <label>{t('signup.email')}</label>
          <input type="email" placeholder={t('signup.email')} />

          <label>{t('signup.password')}</label>
          <input type="password" placeholder={t('signup.password')} />

          <button type="submit" className="signup-btn">
            {t('signup.button')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
