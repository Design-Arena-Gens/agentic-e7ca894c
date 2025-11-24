'use client';

import { useState } from 'react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    { id: 1, name: 'Диван "Комфорт Люкс"', category: 'sofas', price: '189 000 ₽', image: '🛋️' },
    { id: 2, name: 'Кресло "Релакс"', category: 'chairs', price: '45 000 ₽', image: '🪑' },
    { id: 3, name: 'Кровать "Императорская"', category: 'beds', price: '250 000 ₽', image: '🛏️' },
    { id: 4, name: 'Обеденный стол "Милан"', category: 'tables', price: '95 000 ₽', image: '🪑' },
    { id: 5, name: 'Шкаф-купе "Версаль"', category: 'storage', price: '175 000 ₽', image: '🚪' },
    { id: 6, name: 'Диван угловой "Престиж"', category: 'sofas', price: '280 000 ₽', image: '🛋️' },
  ];

  const categories = [
    { id: 'all', name: 'Все категории' },
    { id: 'sofas', name: 'Диваны' },
    { id: 'chairs', name: 'Кресла' },
    { id: 'beds', name: 'Кровати' },
    { id: 'tables', name: 'Столы' },
    { id: 'storage', name: 'Шкафы' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.logo}>✨ ЭЛИТНАЯ МЕБЕЛЬ</h1>
          <nav style={styles.nav}>
            <a href="#catalog" style={styles.navLink}>Каталог</a>
            <a href="#about" style={styles.navLink}>О нас</a>
            <a href="#contact" style={styles.navLink}>Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>Мебель вашей мечты</h2>
          <p style={styles.heroSubtitle}>
            Итальянское качество • Премиум материалы • Эксклюзивный дизайн
          </p>
          <div style={styles.heroButtons}>
            <button style={styles.primaryButton}>Смотреть каталог</button>
            <button style={styles.secondaryButton}>Получить консультацию</button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={styles.features}>
        <div style={styles.feature}>
          <div style={styles.featureIcon}>🏆</div>
          <h3 style={styles.featureTitle}>20 лет опыта</h3>
          <p style={styles.featureText}>Проверенное качество и надежность</p>
        </div>
        <div style={styles.feature}>
          <div style={styles.featureIcon}>🚚</div>
          <h3 style={styles.featureTitle}>Бесплатная доставка</h3>
          <p style={styles.featureText}>По всей России от 50 000 ₽</p>
        </div>
        <div style={styles.feature}>
          <div style={styles.featureIcon}>⭐</div>
          <h3 style={styles.featureTitle}>Гарантия 5 лет</h3>
          <p style={styles.featureText}>На всю нашу продукцию</p>
        </div>
        <div style={styles.feature}>
          <div style={styles.featureIcon}>🎨</div>
          <h3 style={styles.featureTitle}>Индивидуальный дизайн</h3>
          <p style={styles.featureText}>Изготовим по вашему эскизу</p>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" style={styles.catalog}>
        <h2 style={styles.sectionTitle}>Наша коллекция</h2>

        <div style={styles.categories}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                ...styles.categoryButton,
                ...(activeCategory === cat.id ? styles.categoryButtonActive : {})
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div style={styles.products}>
          {filteredProducts.map(product => (
            <div key={product.id} style={styles.productCard}>
              <div style={styles.productImage}>{product.image}</div>
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productPrice}>{product.price}</p>
              <button style={styles.productButton}>Подробнее</button>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Section */}
      <section style={styles.promo}>
        <h2 style={styles.promoTitle}>🎉 Специальное предложение!</h2>
        <p style={styles.promoText}>
          Скидка 15% на всю коллекцию при заказе от 200 000 ₽
        </p>
        <button style={styles.primaryButton}>Воспользоваться предложением</button>
      </section>

      {/* About */}
      <section id="about" style={styles.about}>
        <h2 style={styles.sectionTitle}>Почему выбирают нас</h2>
        <div style={styles.aboutContent}>
          <div style={styles.aboutCard}>
            <h3 style={styles.aboutCardTitle}>Премиум материалы</h3>
            <p style={styles.aboutCardText}>
              Используем только натуральную кожу, массив дерева ценных пород и
              высококачественные европейские ткани.
            </p>
          </div>
          <div style={styles.aboutCard}>
            <h3 style={styles.aboutCardTitle}>Итальянский дизайн</h3>
            <p style={styles.aboutCardText}>
              Работаем с ведущими итальянскими дизайнерами. Каждая модель —
              произведение искусства.
            </p>
          </div>
          <div style={styles.aboutCard}>
            <h3 style={styles.aboutCardTitle}>Ручная работа</h3>
            <p style={styles.aboutCardText}>
              Наши мастера с многолетним опытом создают каждое изделие
              с вниманием к деталям.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.contact}>
        <h2 style={styles.sectionTitle}>Свяжитесь с нами</h2>
        <div style={styles.contactInfo}>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>📞</span>
            <span>+7 (495) 123-45-67</span>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>📧</span>
            <span>info@elitemebel.ru</span>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>📍</span>
            <span>Москва, ул. Примерная, д. 123</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 Элитная Мебель. Все права защищены.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    margin: 0,
    padding: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#1a1a2e',
    color: 'white',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
  hero: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '6rem 2rem',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    opacity: 0.95,
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryButton: {
    backgroundColor: '#ff6b6b',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 15px rgba(255,107,107,0.4)',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.2s',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '4rem auto',
    padding: '0 2rem',
  },
  feature: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s',
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  featureTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#1a1a2e',
  },
  featureText: {
    color: '#666',
    lineHeight: '1.6',
  },
  catalog: {
    maxWidth: '1200px',
    margin: '4rem auto',
    padding: '0 2rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#1a1a2e',
  },
  categories: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  categoryButton: {
    padding: '0.75rem 1.5rem',
    border: '2px solid #667eea',
    backgroundColor: 'white',
    color: '#667eea',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s',
  },
  categoryButtonActive: {
    backgroundColor: '#667eea',
    color: 'white',
  },
  products: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem',
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '2rem',
    textAlign: 'center',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  productImage: {
    fontSize: '5rem',
    marginBottom: '1rem',
  },
  productName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#1a1a2e',
  },
  productPrice: {
    fontSize: '1.5rem',
    color: '#ff6b6b',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  productButton: {
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    padding: '0.75rem 2rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background-color 0.3s',
  },
  promo: {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: 'white',
    padding: '4rem 2rem',
    textAlign: 'center',
    margin: '4rem 0',
  },
  promoTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  promoText: {
    fontSize: '1.3rem',
    marginBottom: '2rem',
  },
  about: {
    maxWidth: '1200px',
    margin: '4rem auto',
    padding: '0 2rem',
  },
  aboutContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  aboutCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
  },
  aboutCardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#667eea',
  },
  aboutCardText: {
    color: '#666',
    lineHeight: '1.8',
  },
  contact: {
    maxWidth: '1200px',
    margin: '4rem auto',
    padding: '0 2rem',
  },
  contactInfo: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    flexWrap: 'wrap',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.1rem',
    color: '#1a1a2e',
  },
  contactIcon: {
    fontSize: '1.5rem',
  },
  footer: {
    backgroundColor: '#1a1a2e',
    color: 'white',
    textAlign: 'center',
    padding: '2rem',
    marginTop: '4rem',
  },
};
