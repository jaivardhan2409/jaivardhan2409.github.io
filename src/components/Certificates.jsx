import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import styles from './Certificates.module.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'Data Structures & Algorithms',
      issuer: 'Lovely Professional University (LPU)',
      category: 'Core Computer Science',
      date: '2023'
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      category: 'Cloud Architecture',
      date: '2023'
    },
    {
      title: 'Java Programming',
      issuer: 'Neo Colab',
      category: 'Software Development',
      date: '2022'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="certificates" className={`section ${styles.certificates}`}>
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Certifications
        </motion.h2>

        <motion.div 
          className={styles.certGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              className={`${styles.certCard} glass`}
              variants={cardVariants}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconCircle}>
                  <FiAward className={styles.icon} />
                </div>
                <span className={styles.date}>{cert.date}</span>
              </div>
              
              <div className={styles.cardBody}>
                <span className={styles.category}>{cert.category}</span>
                <h3>{cert.title}</h3>
                <p className={styles.issuer}>{cert.issuer}</p>
              </div>
              
              <div className={styles.cardDecor}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
