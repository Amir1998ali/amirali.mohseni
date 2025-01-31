import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    institution: 'University of California, Irvine',
    location: 'Irvine, CA',
    degree: 'B.S. in Computer Science',
    period: '2017 – 2020',
    details: [
      'Graduated with a 3.72 GPA, focusing on data structures, algorithms, and AI.',
      'Worked on projects involving machine learning, data engineering, and scalable software development.',
    ],
  },
  {
    institution: 'Caltech AI & Machine Learning Bootcamp',
    location: 'California Institute of Technology',
    degree: 'AI & Machine Learning Apprentice',
    period: '2024 – Present',
    details: [
      'Building expertise in AI, deep learning, and cloud-based ML solutions.',
      'Working on AI-powered applications and automation projects.',
    ],
  },
];

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      style={styles.container}
    >
      <h2 style={styles.title}>🎓 My Education</h2>
      <p style={styles.subtitle}>A timeline of my academic journey.</p>

      <div style={styles.timeline}>
        {education.map((edu, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={styles.card}
          >
            <div style={styles.cardHeader}>
              <h3 style={styles.institution}>{edu.institution}</h3>
              <p style={styles.period}>{edu.period}</p>
            </div>
            <p style={styles.degree}>{edu.degree} - {edu.location}</p>
            <ul style={styles.details}>
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Styles
const styles = {
  container: {
    width: '100vw',
    minHeight: '120vh', // ✅ Ensures content fits properly
    backgroundColor: '#181818', // ✅ Matches Home, Portfolio, and Experience pages
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '50px',
    overflowX: 'hidden',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#aaa',
    marginBottom: '30px',
    maxWidth: '600px',
    textAlign: 'center',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '90%',
    maxWidth: '800px',
  },
  card: {
    backgroundColor: '#222',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(255, 255, 255, 0.1)',
    borderLeft: '5px solid #ff5722', // ✅ Timeline effect
    transition: 'all 0.3s ease-in-out',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #444',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  institution: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: 0,
  },
  period: {
    fontSize: '14px',
    color: '#bbb',
  },
  degree: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#ddd',
    marginBottom: '10px',
  },
  details: {
    paddingLeft: '20px',
    fontSize: '14px',
    color: '#bbb',
  },
};

export default Education;
