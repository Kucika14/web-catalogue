import styles from './App.scss';
import HomePage from './HomePage/HomePage';
import ProductList from './ProductList/ProductList';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1>Product Management App</h1>
      </header>
      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">about</a>
        <a href="/contact">Contact</a>
      </nav>
      <HomePage />
      {/* <ProductList /> */}

      <footer className={styles.footer}>
        <p>&copy; 2025 Web Catalogue</p>
      </footer>
    </div>
  );
}

export default App;
