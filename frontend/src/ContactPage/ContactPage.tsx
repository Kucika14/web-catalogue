import { FC } from "react";
import styles from "./ContactPage.scss";

const ContactPage: FC = () => (
    <div className={styles.contactPage}>
        <h1>Contact Us</h1>
        <p>
            For inquiries, please email us at <a href="mailto:info@example.com">info@example.com</a> or call (123) 456-7890.
        </p>
        <address>
            123 Main Street<br />
            City, State, ZIP
        </address>
    </div>
);

export default ContactPage;