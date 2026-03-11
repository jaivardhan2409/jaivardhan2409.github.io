import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit action
    alert(`Thank you for your message, ${formData.name}! I will get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'jaivardhanr107@gmail.com',
      link: 'mailto:jaivardhanr107@gmail.com'
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'github.com/jaivardhan2409',
      link: 'https://github.com/jaivardhan2409'
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/jaivardhan2409',
      link: 'https://linkedin.com/in/jaivardhan2409'
    }
  ];

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Get In Touch
        </motion.h2>

        <div className={styles.grid}>
          {/* Contact Info Column */}
          <motion.div 
            className={styles.infoCol}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's Connect</h3>
            <p className={styles.description}>
              Whether you have a question, a project idea, or just want to say hi, 
              I'd love to hear from you. My inbox is always open!
            </p>

            <div className={styles.socials}>
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx} 
                  href={info.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`${styles.socialCard} glass`}
                >
                  <div className={styles.socialIcon}>{info.icon}</div>
                  <div className={styles.socialDetails}>
                    <span className={styles.socialLabel}>{info.label}</span>
                    <span className={styles.socialValue}>{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div 
            className={styles.formCol}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className={`${styles.form} glass`}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Your message here..." 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                Send Message <FiSend className={styles.sendIcon} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
