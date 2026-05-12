'use client';

import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.column}>
            <h3 className={styles.heading}>TechVenture</h3>
            <p>Building exceptional software solutions for tomorrow's challenges.</p>
            <div className={styles.social}>
              <a href="#" aria-label="Twitter">
                𝕏
              </a>
              <a href="#" aria-label="LinkedIn">
                in
              </a>
              <a href="#" aria-label="GitHub">
                ⚙️
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Software Development</a>
              </li>
              <li>
                <a href="#services">Web Development</a>
              </li>
              <li>
                <a href="#services">Mobile Apps</a>
              </li>
              <li>
                <a href="#services">Bug Fixing</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#calculator">MVP Calculator</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Contact</h4>
            <p>
              Email: <a href="mailto:hello@techventure.dev">hello@techventure.dev</a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
            </p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} TechVenture. All rights reserved.</p>
          <div className={styles.links}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}