import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Shirt, Bed, HardHat, Grid3X3, ArrowRight, Store, Search } from './Icons';
import products from '../data/products';
import './produits.css';

function Produits() {
  const { t, i18n } = useTranslation();
  
  // États pour les filtres, la recherche et le TRI
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('popular');
  
  const lang = i18n.resolvedLanguage && i18n.resolvedLanguage.startsWith('fr') ? 'fr' : 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Filtrage (Catégorie + Recherche)
  const filteredProducts = products.filter(p => {
    const matchCategory = activeFilter === 'all' || p.category === activeFilter;
    const searchLower = searchQuery.toLowerCase();
    const matchSearch = p[lang].name.toLowerCase().includes(searchLower) || 
                        p[lang].description.toLowerCase().includes(searchLower);
    return matchCategory && matchSearch;
  });

  // 2. Tri (Sorting)
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'popular') {
      return a.id - b.id; 
    } 
    else if (sortOption === 'az') {
      return a[lang].name.localeCompare(b[lang].name);
    } 
    else if (sortOption === 'za') {
      return b[lang].name.localeCompare(a[lang].name);
    } 
    else if (sortOption === 'complexAsc') {
      return a.complexity - b.complexity;
    } 
    else if (sortOption === 'complexDesc') {
      return b.complexity - a.complexity;
    }
    return 0;
  });

  const getCategoryIcon = (category) => {
    if (category === 'clothing') return <Shirt size={16} />;
    if (category === 'linens') return <Bed size={16} />;
    if (category === 'workwear') return <HardHat size={16} />;
    return null;
  };

  const getCategoryLabel = (category) => {
    if (category === 'clothing') return t('products.clothing');
    if (category === 'linens') return t('products.linens');
    if (category === 'workwear') return t('products.workwear');
    return category;
  };

  return (
    <div className="products-page">
      
      <header className="products-hero">
        <h1 className="animate-fade-in">{t('products.mainTitle')}</h1>
        <div className="section-divider"></div>
        
        <div className="b2b-notice animate-fade-in" style={{ backgroundColor: '#F9F8F6', borderLeft: '4px solid #C9B59C', padding: '20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px', maxWidth: '800px', margin: '0 auto 30px auto', textAlign: 'left' }}>
          <Store size={24} style={{ color: '#4a3728', minWidth: '24px' }} />
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a3728', lineHeight: 1.5 }}>
            {lang === 'fr' 
              ? "Ce catalogue interactif présente des exemples d'articles textiles que notre atelier maîtrise. Nous ne vendons pas ces articles au détail. Nous offrons le service de fabrication et d'assemblage à grande échelle à partir de vos propres designs et tissus." 
              : "This interactive catalog presents examples of textile items our workshop masters. We do not sell these items retail. We offer large-scale manufacturing and assembly services based on your own designs and fabrics."}
          </p>
        </div>
      </header>

      <div className="search-container animate-fade-in-up" style={{ maxWidth: '600px', margin: '0 auto 20px auto', position: 'relative' }}>
        <input 
          type="text" 
          placeholder={lang === 'fr' ? "Rechercher un produit..." : "Search a product..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          style={{ width: '100%', padding: '12px 20px 12px 45px', borderRadius: '25px', border: '2px solid #e0e0e0', fontSize: '1rem', outline: 'none' }}
        />
        <div style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#999' }}>
          <Search size={20} />
        </div>
      </div>

      <div className="filter-container animate-fade-in-up">
        <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>
          <Grid3X3 size={18} /> {t('products.allProducts')}
        </button>
        <button className={`filter-btn ${activeFilter === 'clothing' ? 'active' : ''}`} onClick={() => setActiveFilter('clothing')}>
          <Shirt size={18} /> {t('products.clothing')}
        </button>
        <button className={`filter-btn ${activeFilter === 'linens' ? 'active' : ''}`} onClick={() => setActiveFilter('linens')}>
          <Bed size={18} /> {t('products.linens')}
        </button>
        <button className={`filter-btn ${activeFilter === 'workwear' ? 'active' : ''}`} onClick={() => setActiveFilter('workwear')}>
          <HardHat size={18} /> {t('products.workwear')}
        </button>
      </div>

      <div className="products-top-bar animate-fade-in-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', maxWidth: '1200px', margin: '0 auto 30px auto' }}>
        <p className="products-count" style={{ color: '#666', fontWeight: 'bold' }}>
          {sortedProducts.length} {lang === 'fr' ? 'produits' : 'products'}
        </p>
        
        <div className="sort-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="sort" style={{ color: '#4a3728', fontWeight: '600', fontSize: '0.9rem' }}>{t('sort.label')}</label>
          <select 
            id="sort" 
            value={sortOption} 
            onChange={(e) => setSortOption(e.target.value)}
            style={{ padding: '8px 15px', borderRadius: '8px', border: '1px solid #C9B59C', backgroundColor: '#fff', color: '#333', outline: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            <option value="popular">{t('sort.popular')}</option>
            <option value="az">{t('sort.az')}</option>
            <option value="za">{t('sort.za')}</option>
            <option value="complexAsc">{t('sort.complexAsc')}</option>
            <option value="complexDesc">{t('sort.complexDesc')}</option>
          </select>
        </div>
      </div>

      <div className="products-grid">
        {sortedProducts.length === 0 ? (
          <p className="no-results" style={{ textAlign: 'center', width: '100%', padding: '40px', color: '#666' }}>
            {lang === 'fr' ? "Aucun produit trouvé pour cette recherche." : "No products found for this search."}
          </p>
        ) : (
          sortedProducts.map((product, index) => (
            <Link to={`/products/${product.id}`} key={product.id} className={`product-card animate-fade-in-up stagger-${(index % 6) + 1}`}>
              <div className="product-image-container">
                <img src={product.image} alt={product[lang].name} className="product-image" />
                <div className="product-overlay">
                  <span className="view-details">
                    {t('products.viewDetails')} <ArrowRight size={16} />
                  </span>
                </div>
              </div>
              <div className="product-info">
                <span className="product-category">
                  {getCategoryIcon(product.category)} {getCategoryLabel(product.category)}
                </span>
                <h3 className="product-name">{product[lang].name}</h3>
              </div>
            </Link>
          ))
        )}
      </div>

      <div className="products-cta-section animate-fade-in-up">
        <Store size={48} strokeWidth={1.5} className="cta-icon" />
        <h3>{t('products.ctaText')}</h3>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-btn primary">
            {t('products.btnContact')} <ArrowRight size={18} />
          </Link>
          <Link to="/rendez-vous" className="cta-btn secondary">
            {t('products.btnMeeting')} <ArrowRight size={18} />
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Produits;