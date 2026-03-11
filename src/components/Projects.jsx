import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: 'Poll App',
      description: 'A dynamic polling platform with robust state management and REST API integrations.',
      tags: ['React', 'Node.js', 'Express', 'State Mgt'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'CineSelect',
      description: 'A full-stack movie ticket booking platform. Features include interactive seat booking and real-time showtime selection.',
      tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  const featuredProject = {
    title: 'Podify',
    subtitle: 'AI Podcast Recommender',
    description: 'An advanced podcast recommendation engine powered by Google Gemini LLM. It features a modular LLM orchestration pipeline to deliver highly personalized content to users, packaged in a breathtaking, responsive UI.',
    tags: ['Google Gemini LLM', 'React (Vite)', 'Node.js', 'AI Orchestration'],
    github: '#',
    demo: '#'
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Featured Work
        </motion.h2>

        <div className={styles.projectsWrapper}>
          {/* Hero Project: Podify */}
          <motion.div 
            className={`${styles.heroProject} glass`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.heroContent}>
              <div className={styles.projectHeader}>
                <div className={styles.featuredBadge}>
                  <FiStar /> MVP Project
                </div>
                <h3>{featuredProject.title}</h3>
                <h4 className="text-gradient">{featuredProject.subtitle}</h4>
              </div>
              
              <div className={styles.projectBody}>
                <p>{featuredProject.description}</p>
              </div>
              
              <div className={styles.tagsContainer}>
                {featuredProject.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              
              <div className={styles.projectLinks}>
                <a href={featuredProject.github} className={styles.link} target="_blank" rel="noreferrer">
                  <FiGithub /> Source Code
                </a>
                <a href={featuredProject.demo} className={styles.linkPrimary} target="_blank" rel="noreferrer">
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
            
            <div className={styles.heroVisual}>
              <div className={styles.mockup}>
                <div className={styles.mockupHeader}>
                  <span></span><span></span><span></span>
                </div>
                <div className={styles.mockupBody}>
                  <div className={styles.podifyVisual}>
                    <div className={styles.waveform}>
                      {[1,2,3,4,5,6,7,8,6,4,5,7,9,4,3,2,5].map((h, i) => (
                        <div key={i} className={styles.bar} style={{ height: `${h * 10}%`, animationDelay: `${i * 0.1}s` }}></div>
                      ))}
                    </div>
                    <div className={styles.geminiBadge}>Powered by Google Gemini</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Standard Project Cards */}
          <div className={styles.cardsGrid}>
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className={`${styles.card} glass`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={styles.cardInner}>
                  <div className={styles.cardHeader}>
                    <h3>{project.title}</h3>
                    <div className={styles.cardLinks}>
                      <a href={project.github} className={styles.iconLink} target="_blank" rel="noreferrer">
                        <FiGithub />
                      </a>
                      <a href={project.demo} className={styles.iconLink} target="_blank" rel="noreferrer">
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                  <p className={styles.cardDesc}>{project.description}</p>
                </div>
                
                <div className={styles.cardFooter}>
                  <div className={styles.tagsContainer}>
                    {project.tags.map(tag => (
                      <span key={tag} className={styles.tagSmall}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
