import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, UserPlus, LogIn } from './Icons';
import './signup.css';

function Signup() {
  const { t } = useTranslation();

  return (
    <div className="signup-page">
      <div className="signup-card animate-scale-in">
        <div className="signup-header">
          <div className="signup-icon">
            <UserPlus size={28} />
          </div>
          <h1>{t('signup.title')}</h1>
          <p className="signup-subtitle">{t('signup.subtitle')}</p>
        </div>

        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>
              <User size={16} />
              {t('signup.fullName')}
            </label>
            <input type="text" placeholder={t('signup.fullName')} />
          </div>

          <div className="form-group">
            <label>
              <Mail size={16} />
              {t('signup.email')}
            </label>
            <input type="email" placeholder={t('signup.email')} />
          </div>

          <div className="form-group">
            <label>
              <Lock size={16} />
              {t('signup.password')}
            </label>
            <input type="password" placeholder={t('signup.password')} />
          </div>

          <button type="submit" className="signup-btn">
            <UserPlus size={18} />
            {t('signup.button')}
          </button>
        </form>

        <div className="signup-divider">
          <span>ou</span>
        </div>

        <p className="signup-helper">
          {t('signup.hasAccount')}{' '}
          <Link to="/login" className="signup-helper-link">
            <LogIn size={16} />
            {t('signup.loginLink')}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
