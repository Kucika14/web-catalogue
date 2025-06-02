import styles from './App.scss';
import HomePage from './HomePage/HomePage';
import ProductList from './ProductList/ProductList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './AboutPage/AboutPage';
import ContactPage from './ContactPage/ContactPage';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <header className={styles.header}>
          <h1>Product Management App</h1>
        </header>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <p>© 2023 Web Catalogue. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;