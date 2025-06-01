import { FC } from "react";
import styles from "./HomePage.scss";

const Homepage: FC = () => (
    <div>
        {/* Hero Section */}
        <section className={styles.hero}>
            <h1>Welcome to Web Catalogue</h1>
            <p>Discover amazing products at unbeatable prices!</p>
            <button>Shop Now</button>
        </section>

        {/* Featured Products */}
        <section className={styles.featuredProducts}>
            <h2>Featured Products</h2>
            {/*  <ProductList products={featuredProducts} /> */}
        </section>

        {/* Categories */}
        <section className={styles.categories}>
            <h2>Browse Categories</h2>
            <div className={styles.categoryGrid}>
                <div className={styles.categoryCard}>
                    <img src="/images/electronics.jpg" alt="Electronics" />
                    <p>Electronics</p>
                </div>
                <div className={styles.categoryCard}>
                    <img src="/images/furniture.jpg" alt="Furniture" />
                    <p>Furniture</p>
                </div>
            </div>
        </section>

        {/* Newsletter */}
        <section className={styles.newsletter}>
            <h2>Subscribe to our Newsletter</h2>
            <p>Get the latest updates and special offers.</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
            <p>© 2023 Web Catalogue. All Rights Reserved.</p>
        </footer>
    </div>
);

export default Homepage;