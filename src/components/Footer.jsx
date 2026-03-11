import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.brand}>
            <Link to="home" smooth={true} duration={500} className={styles.logo}>
              <span className="text-gradient">JS</span>
            </Link>
            <p className={styles.tagline}>Building scalable web applications</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linksCol}>
              <h4>Navigation</h4>
              <ul>
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Jaivardhan Singh. All rights reserved.
          </p>
          
          <div className={styles.socials}>
            <a href="mailto:jaivardhanr107@gmail.com" aria-label="Email"><FiMail /></a>
            <a href="https://github.com/jaivardhan2409" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://linkedin.com/in/jaivardhan2409" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          </div>

          <Link to="home" smooth={true} duration={500} className={styles.backToTop} aria-label="Back to top">
            <FiArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
