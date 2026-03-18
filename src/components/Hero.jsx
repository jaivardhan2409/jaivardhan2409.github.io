import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiDownload, FiMail } from 'react-icons/fi';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Graphic Elements */}
      <div className={styles.bgBlob1}></div>
      <div className={styles.bgBlob2}></div>

      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className={styles.greeting}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Jaivardhan Singh<span className={styles.dot}>.</span>
          </motion.h1>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="text-gradient">Full Stack Developer</span>
          </motion.h2>

          <motion.p
            className={styles.bio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            B.Tech CSE student at Lovely Professional University. I build scalable, engaging web applications
            and love turning complex problems into beautiful, intuitive interfaces.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a href="/Jai_updated.pdf" target="_blank" rel="noreferrer" className={styles.btnPrimary}>
              <FiDownload className={styles.icon} />
              Download Resume
            </a>
            <Link to="contact" smooth={true} duration={500} offset={-80} className={styles.btnSecondary}>
              <FiMail className={styles.icon} />
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Optional Code/Terminal Visualizer for the right side on desktop */}
        <motion.div
          className={`${styles.visualizer} hidden-md glass`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.windowHeader}>
            <div className={styles.dots}>
              <span className={styles.dotRed}></span>
              <span className={styles.dotYellow}></span>
              <span className={styles.dotGreen}></span>
            </div>
            <span className={styles.windowTitle}>jaivardhan@portfolio:~</span>
          </div>
          <div className={styles.windowBody}>
            <p><span className={styles.prompt}>$</span> whoami</p>
            <p className={styles.output}>jaivardhan_singh</p>
            <p><span className={styles.prompt}>$</span> cat skills.txt</p>
            <p className={styles.output}>[ "C++", "React", "Node.js", "Java" ]</p>
            <p><span className={styles.prompt}>$</span> npm start career</p>
            <p className={styles.outputSuccess}>&gt; Compiling success...</p>
            <p className={styles.pulsingCursor}>_</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
