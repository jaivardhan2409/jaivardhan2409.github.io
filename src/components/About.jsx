import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiUser } from 'react-icons/fi';
import styles from './About.module.css';

const About = () => {
  const techSkills = [
    'C++', 'JavaScript', 'C', 'Java', 'React', 'Node.js', 'Bootstrap', 'MySQL'
  ];

  const softSkills = [
    'Problem-Solving', 'Team Player', 'Time-Management', 'Adaptability', 'Communication'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className={styles.grid}>
          {/* Bio Column */}
          <motion.div 
            className={`${styles.card} glass`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                <FiUser className={styles.icon} />
              </div>
              <h3>Introduction</h3>
            </div>
            <p className={styles.bioText}>
              I'm a passionate Computer Science student who loves exploring new technologies 
              and finding elegant solutions to complex coding challenges. My journey in software development 
              started with C++ and has blossomed into a full-stack career building scalable web applications.
            </p>
            <p className={styles.bioText}>
              When I'm not coding, I enjoy participating in hackathons, learning about cloud computing and cybersecurity, 
              and constantly looking for the next problem to solve. 
            </p>
            
            <div className={styles.softSkillsWrapper}>
              <h4>Soft Skills</h4>
              <ul className={styles.softSkillsList}>
                {softSkills.map((skill, index) => (
                  <li key={index} className={styles.softSkillItem}>
                    <span className={styles.bullet}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Skills Column */}
          <motion.div 
            className={`${styles.card} glass`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                <FiCode className={styles.icon} />
              </div>
              <h3>Technical Arsenal</h3>
            </div>
            <p className={styles.bioText}>
              Here are the programming languages and technologies I work with regularly to bring ideas to life:
            </p>
            
            <motion.div 
              className={styles.pillsContainer}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {techSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className={styles.skillPill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
