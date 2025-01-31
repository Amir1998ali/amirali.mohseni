import React from 'react';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import animationData from './animation.json';

const Home = () => {


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      style={styles.container}
    >
      <h2 style={styles.title}>Amirali Mohseni</h2>
      <p style={styles.subtitle}>Software Engineer</p>

      {/* 🔥 Two-Column Layout for Desktop, Stacked for Mobile */}
      <div style={styles.contentContainer}>
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          style={styles.card}
        >
          <h3 style={styles.sectionTitle}>About Me</h3>
          <ul style={styles.list}>
            <li><strong>👨‍💻 Developer:</strong> I enjoy building things that work efficiently and make a difference, whether it’s a backend system or a full-stack app.</li>
            <li><strong>🤖 AI & Data:</strong> Curious about how AI shapes our world. I like working with ML models, automation, and making data useful.</li>
            <li><strong>📊 Problem Solver:</strong> I focus on writing clean, structured code that improves performance and scales well.</li>
            <li><strong>🚀 Always Learning:</strong> Technology evolves fast, and I try to keep up—exploring new tools, frameworks, and better ways to build.</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          style={styles.card}
        >
          <h3 style={styles.sectionTitle}>Technical Expertise</h3>
          <ul style={styles.list}>
            <li><strong>🖥️ Languages:</strong> Python, JavaScript, TypeScript, SQL, Java, C++</li>
            <li><strong>⚙️ Frameworks:</strong> React, Node.js, Django, Flask, Express</li>
            <li><strong>☁️ Cloud & DevOps:</strong> AWS, Firebase, Docker, Kubernetes</li>
            <li><strong>📊 AI & Data:</strong> Machine Learning, NLP, Data Engineering</li>
          </ul>
        </motion.div>
      </div>


      <motion.div variants={fadeInVariant} initial="hidden" animate="visible" style={styles.lottie}>
        <Lottie options={defaultOptions} height={100} width={100} />
      </motion.div>
    </motion.div>
  );
};

// Styles
const styles = {
  container: {
    width: '100vw',
    minHeight: '120vh', // ✅ Ensures proper spacing
    backgroundColor: '#181818', // ✅ Matches Portfolio & Experience pages
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
  contentContainer: {
    display: 'flex',
    flexWrap: 'wrap', // ✅ Ensures responsiveness
    justifyContent: 'center',
    gap: '20px',
    width: '90%',
    maxWidth: '1100px',
  },
  card: {
    backgroundColor: '#222',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(255, 255, 255, 0.1)',
    width: '45%', // ✅ Even distribution
    minWidth: '280px',
    maxWidth: '500px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '16px',
    color: '#bbb',
    lineHeight: '1.6',
  },
  contact: {
    fontSize: '18px',
    color: '#ddd',
    marginTop: '30px',
  },
  lottie: {
    marginTop: '20px',
  },
};

export default Home;
