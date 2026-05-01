import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn, UserPlus } from './icons';
import './login.css';

function Login() {
  const { t } = useTranslation();

  return (
    <div className="login-page">
      <div className="login-card animate-scale-in">
        <div className="login-header">
          <div className="login-icon">
            <LogIn size={28} />
          </div>
          <h1>{t('login.title')}</h1>
          <p className="login-subtitle">{t('login.subtitle')}</p>
        </div>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>
              <Mail size={16} />
              {t('login.email')}
            </label>
            <input type="email" placeholder={t('login.email')} />
          </div>

          <div className="form-group">
            <label>
              <Lock size={16} />
              {t('login.password')}
            </label>
            <input type="password" placeholder={t('login.password')} />
          </div>

          <a href="#" className="forgot-password">{t('login.forgotPassword')}</a>

          <button type="submit" className="login-btn">
            <LogIn size={18} />
            {t('login.button')}
          </button>
        </form>

        <div className="login-divider">
          <span>ou</span>
        </div>

        <p className="login-helper">
          {t('login.noAccount')}{' '}
          <Link to="/signup" className="login-helper-link">
            <UserPlus size={16} />
            {t('login.createAccount')}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
