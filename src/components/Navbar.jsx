import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Certificates', to: 'certificates' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link to="home" smooth={true} duration={500} spy={true} offset={-80} onClick={() => setMobileMenuOpen(false)}>
            <span className="text-gradient">JS</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className={`${styles.nav} hidden-md`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass={styles.activeLink}
                  className={styles.navLink}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle Menu">
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavList}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass={styles.activeLink}
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
