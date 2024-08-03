import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Gourav Singh. <br />
        All rights reserved.
      </p>
      <p>Icons by <a href="https://icons8.com/">icons8</a></p>
    </section>
  );
}

export default Footer;