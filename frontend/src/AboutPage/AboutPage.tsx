import { FC } from "react";
import styles from "./AboutPage.scss";

const AboutPage: FC = () => (
    <div className={styles.aboutPage}>
        <h1>About Us</h1>
        <section className={styles.section}>
            <h2>Our Mission</h2>
            <p>
                We strive to provide the best web catalogue experience, helping users discover and manage their favorite products with ease.
            </p>
        </section>
        <section className={styles.section}>
            <h2>Our Team</h2>
            <p>
                Our dedicated team is passionate about building intuitive and reliable web applications for everyone.
            </p>
        </section>
        <section className={styles.section}>
            <h2>Contact</h2>
            <p>
                Have questions or feedback? Reach out to us at <a href="mailto:info@webcatalogue.com">info@webcatalogue.com</a>.
            </p>
        </section>
    </div>
);

export default AboutPage;