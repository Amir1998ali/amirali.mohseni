import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: '📊 Employee Turnover Prediction',
    description:
      'A machine learning model that analyzes employee data to predict turnover rates. This project leverages data analysis, feature engineering, and classification techniques to provide insights into workforce retention and attrition.',
    github: 'https://github.com/Amir1998ali/Employee-Turnover',
  },
  {
    title: '📈 Apparel Sales Performance Analysis',
    description:
      'A comprehensive data analysis project focused on identifying sales trends in the apparel industry. This project explores quarterly performance, regional sales distribution, and customer purchasing behavior.',
    github: 'https://github.com/Amir1998ali/Apparel-Sales-Performance-Analysis',
  },
  {
    title: '🤖 Is ChatGPT Down?',
    description:
      'A real-time status-checking tool that helps users verify whether ChatGPT is down. This web application fetches live status updates and provides insights into service disruptions.',
    github: 'https://github.com/Amir1998ali/ischatgptdown',
    website: 'https://ischatgptdown.xyz/',
  },
  {
    title: '🤖 Is ChatGPT Down?',
    description:
      'An AI-driven tool that lets users upload PDFs and ask GPT-4-powered questions in real-time. Built with FastAPI, Streamlit, and LangChain, it processes documents in-memory for instant, secure responses.',
    github: 'https://github.com/Amir1998ali/pdf-qa-app',
    website: 'https://pdf-question-and-answer.streamlit.app/',
  },
];

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      style={styles.container}
    >
      {/* 🔥 Portfolio Title Stays at the Top */}
      <div style={styles.header}>
        <h2 style={styles.title}>🚀 My Portfolio</h2>
        <p style={styles.subtitle}>A showcase of my latest work, blending technology, AI, and innovation.</p>
      </div>

      {/* 🔥 Side-by-Side Project Cards */}
      <div style={styles.cardContainer}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={styles.card}
          >
            <div style={styles.textContainer}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.description}>{project.description}</p>
              
              <div style={styles.linkContainer}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.button}>
                  GitHub
                </a>
                {project.website && (
                  <a href={project.website} target="_blank" rel="noopener noreferrer" style={styles.button}>
                    Live Website
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Styles
const styles = {
  container: {
    width: '100vw', // ✅ Full width
    minHeight: '120vh', // ✅ Increased height to prevent cutoff
    backgroundColor: '#181818', // ✅ Matches Home Page theme
    color: '#fff',
    display: 'flex',
    flexDirection: 'column', // ✅ Stacks title and content vertically
    alignItems: 'center',
    justifyContent: 'flex-start', // ✅ Moves content to the top
    overflowX: 'hidden',
    paddingTop: '50px',
  },
  header: {
    textAlign: 'center',
    width: '100%',
    paddingBottom: '30px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#aaa',
    maxWidth: '600px',
    margin: '0 auto',
  },
  cardContainer: {
    display: 'flex', // ✅ Side-by-side layout
    flexWrap: 'wrap', // ✅ Ensures responsiveness
    justifyContent: 'center',
    gap: '20px', // ✅ Adds spacing between cards
    width: '90%',
    maxWidth: '1200px',
    marginTop: '20px',
  },
  card: {
    backgroundColor: '#222',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(255, 255, 255, 0.1)',
    width: '30%', // ✅ Fits 3 cards in a row
    minWidth: '280px',
    maxWidth: '400px',
    textAlign: 'center',
  },
  textContainer: {
    padding: '0 20px',
  },
  projectTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    color: '#bbb',
    marginBottom: '15px',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 15px',
    backgroundColor: '#ff5722',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '14px',
  },
};

export default Portfolio;
