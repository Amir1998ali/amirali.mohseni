import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Ingram Micro / CEVA Logistics',
    location: 'Newport Beach, CA',
    position: 'Software Engineer',
    period: 'Sep 2022 – Mar 2024',
    details: [
      'Developed scalable Warehouse Management Systems (IWM & ESMS).',
      'Led software deployments and automated IIS hosting, reducing deployment time by 10%.',
      'Managed SQL data migrations from Ingram Micro to CEVA, ensuring seamless transitions.',
    ],
  },
  {
    company: 'Tata Consultancy Services / Humana Inc.',
    location: 'Edison, NJ',
    position: 'Software Engineer',
    period: 'Oct 2020 – Aug 2022',
    details: [
      'Optimized the Go365 rewards system, enhancing personalization and increasing redemptions by 7%.',
      'Improved rewards redemption flow for better user experience and simplified checkout.',
    ],
  },
  {
    company: 'Levyx Inc.',
    location: 'Newport Beach, CA',
    position: 'Software Engineer Intern',
    period: 'Jun 2019 – Sep 2019',
    details: [
      'Developed a Python wrapper for HeliumDB, enabling fast large-scale data processing.',
      'Benchmarked system performance, demonstrating HeliumDB’s ultra-low-latency capabilities.',
    ],
  },
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      style={styles.container}
    >
      <h2 style={styles.title}>📌 My Experience</h2>
      <p style={styles.subtitle}>A timeline of my journey in software engineering.</p>

      <div style={styles.timeline}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={styles.card}
          >
            <div style={styles.cardHeader}>
              <h3 style={styles.company}>{exp.company}</h3>
              <p style={styles.period}>{exp.period}</p>
            </div>
            <p style={styles.position}>{exp.position} - {exp.location}</p>
            <ul style={styles.details}>
              {exp.details.map((detail, i) => (
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
    minHeight: '120vh', // ✅ Increased height for proper spacing
    backgroundColor: '#181818', // ✅ Matches Home & Portfolio pages
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
  company: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: 0,
  },
  period: {
    fontSize: '14px',
    color: '#bbb',
  },
  position: {
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

export default Experience;
