import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const { t } = useTranslation();

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>{t('login.title')}</h1>
        <p className="login-subtitle">{t('login.subtitle')}</p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <label>{t('login.email')}</label>
          <input type="email" placeholder={t('login.email')} />

          <label>{t('login.password')}</label>
          <input type="password" placeholder={t('login.password')} />

          <button type="submit" className="login-btn">
            {t('login.button')}
          </button>
        </form>

        <p className="login-helper">
          {t('login.noAccount')}{' '}
          <Link to="/signup" className="login-helper-link">
            {t('login.createAccount')}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
