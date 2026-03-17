import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCalendar } from 'react-icons/fi';
import styles from './ExperienceEducation.module.css';

const ExperienceEducation = () => {
  const education = [
    {
      title: 'B.Tech Computer Science & Engineering',
      institution: 'Lovely Professional University',
      date: 'Ongoing',
      score: 'CGPA: 6.7',
      icon: <FiBookOpen />
    },
    {
      title: 'Intermediate',
      institution: 'Higher Secondary School',
      date: 'Completed',
      score: 'Score: 83%',
      icon: <FiBookOpen />
    },
    {
      title: 'Matriculation',
      institution: 'Secondary School',
      date: 'Completed',
      score: 'Score: 78%',
      icon: <FiBookOpen />
    }
  ];

  const achievements = [
    {
      title: 'Cyber Security Workshop',
      institution: 'Intensive Training Program',
      date: '10 Days',
      description: 'Gained hands-on experience with ethical hacking, network security, and vulnerability assessment.',
      icon: <FiAward />
    },
    {
      title: 'Build-a-Thon Hackathon',
      institution: 'Tech Competition',
      date: 'Participant',
      description: 'Competed with 500+ participants to develop innovative software solutions under tight deadlines.',
      icon: <FiAward />
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className={`section ${styles.experienceEducation}`}>
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          My Journey
        </motion.h2>

        <div className={styles.timelineGrid}>
          {/* Education Timeline */}
          <div className={styles.timelineColumn}>
            <h3 className={styles.columnTitle}>
              <FiBookOpen className={styles.titleIcon} /> Education
            </h3>
            
            <div className={styles.timeline}>
              {education.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={styles.timelineItem}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={styles.timelineDot}></div>
                  <div className={`${styles.timelineContent} glass`}>
                    <div className={styles.timelineHeader}>
                      <h4>{item.title}</h4>
                      <span className={styles.date}>
                        <FiCalendar className={styles.iconS} /> {item.date}
                      </span>
                    </div>
                    <h5>{item.institution}</h5>
                    <p className={styles.scoreHighlight}>{item.score}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Timeline */}
          <div className={styles.timelineColumn}>
            <h3 className={styles.columnTitle}>
              <FiAward className={styles.titleIcon} /> Achievements
            </h3>
            
            <div className={styles.timeline}>
              {achievements.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={styles.timelineItem}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={styles.timelineDot}></div>
                  <div className={`${styles.timelineContent} glass`}>
                    <div className={styles.timelineHeader}>
                      <h4>{item.title}</h4>
                      <span className={styles.date}>
                        <FiCalendar className={styles.iconS} /> {item.date}
                      </span>
                    </div>
                    <h5>{item.institution}</h5>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
