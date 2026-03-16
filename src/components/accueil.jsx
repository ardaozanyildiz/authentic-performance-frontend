import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './accueil.css';

function Accueil() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  //Ici on di ramene la liste de slides du fichier i18n
  const slides = t('hero.slides', { returnObjects: true }) || [];

  //Pas pour faire tout le slides si ya rien a slide 
  useEffect(() => {
    if (slides.length <= 1) {
      return undefined;
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  if (slides.length === 0) {
    return null;
  }
  //Sert a eviter les erreurs de index
  const safeSlideIndex = currentSlide % slides.length;

  //Sa cest pour quand tu va derriere quand t deja au premiere slide pour passer au 3ieme
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${slides[safeSlideIndex].image })`,
        }}
      >
        <div className="hero-overlay">
          <button className="hero-arrow hero-arrow-left" onClick={prevSlide} aria-label="Slide precedent">
            &#10094;
          </button>

          <div className="hero-content">
            <h1>{slides[safeSlideIndex].title}</h1>
            <p>{slides[safeSlideIndex].description}</p>
          </div>

          <button className="hero-arrow hero-arrow-right" onClick={nextSlide} aria-label="Slide suivant">
            &#10095;
          </button>

          <Link to="/contact" className="hero-btn">
            {t('hero.button')}
          </Link>
          </div>
        </div>
   

      <section className="home-about-section">
        <div className="home-about-container">
          <div className="home-about-image-wrap">
            <img src="/images/picAccueil.jpg" alt="Atelier textile" className="home-about-image" />
          </div>

          <div className="home-about-content">
            <h2>{t('homeAbout.title')}</h2>
            <p>{t('homeAbout.text1')}</p>
            <p>{t('homeAbout.text2')}</p>

            <Link to="/contact" className="home-about-btn">
              {t('homeAbout.button')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accueil;
