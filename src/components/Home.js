import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import animationData from './animation.json';

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

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
    <div style={styles.container}>
      {/* Top Section - Name & Title */}
      {showWelcome && (
        <motion.h1 variants={fadeInVariant} initial="hidden" animate="visible" style={styles.title}>
          Amirali Mohseni
        </motion.h1>
      )}
      <motion.p variants={fadeInVariant} initial="hidden" animate="visible" style={styles.subtitle}>
        Software Engineer | AI Enthusiast
      </motion.p>

      {/* Main Content - Two Column Layout */}
      <div style={styles.contentContainer}>
        {/* Left Column - About Me */}
      <motion.div variants={fadeInVariant} initial="hidden" animate="visible" style={styles.leftColumn}>
        <h3 style={styles.sectionTitle}>About Me</h3>

        <div style={styles.gridContainer}>
          {/* Row 1 */}
          <div style={styles.gridItem}>
            <h4>👨‍💻 Developer</h4>
            <p>
              Writing clean, efficient, and scalable code is more than just a skill—it's an obsession. 
              Whether it's backend architecture or full-stack applications, I love making software work seamlessly.
            </p>
          </div>

          <div style={styles.gridItem}>
            <h4>🤖 AI Enthusiast</h4>
            <p>
              AI is redefining the world, and I’m building on that wave. From **ML models** to 
              **NLP-powered applications**, I explore the intelligence behind the data.
            </p>
          </div>

          {/* Row 2 */}
          <div style={styles.gridItem}>
            <h4>📊 Data Engineer</h4>
            <p>
            I enjoy working with data at scale, structuring efficient databases, and optimizing query performance. I’m always learning how to build better pipelines to make data more accessible and useful for decision-making.
            </p>
          </div>

          <div style={styles.gridItem}>
            <h4>🚀 Innovator</h4>
            <p>
            I love exploring new ideas and finding ways to bring them to life. Whether it’s through technology, AI, or entrepreneurship, I believe in continuous learning, experimenting, and improving with each project.
            </p>
          </div>

        </div>
      </motion.div>

        {/* Right Column - Technical Expertise */}
        <motion.div variants={fadeInVariant} initial="hidden" animate="visible" style={styles.rightColumn}>
          <h3 style={styles.sectionTitle}>Technical Expertise</h3>
          
          <div style={styles.gridContainer}>
            <div style={styles.gridItem}>
              <h4>🖥️ Languages</h4>
              <p>Python, JavaScript, TypeScript, SQL, Java, C++, C#</p>
            </div>

            <div style={styles.gridItem}>
              <h4>⚙️ Frameworks</h4>
              <p>React, Node.js, Django, Flask, Express</p>
            </div>

            <div style={styles.gridItem}>
              <h4>☁️ Cloud & DevOps</h4>
              <p>AWS, Firebase, Docker, Kubernetes</p>
            </div>

            <div style={styles.gridItem}>
              <h4>📊 AI & Data</h4>
              <p>Machine Learning, NLP, Data Engineering</p>
            </div>

            {/* <div style={styles.gridItem}>
              <h4>📉 Trading & Finance</h4>
              <p>Algorithmic Trading, Crypto Market Analytics</p>
            </div>

            <div style={styles.gridItem}>
              <h4>📱 Web & Mobile</h4>
              <p>Full-Stack Development, API Design</p>
            </div> */}
          </div>
        </motion.div>

      </div>

      {/* Contact & Lottie Animation */}
      <motion.p variants={fadeInVariant} initial="hidden" animate="visible" style={styles.contact}>
        Let's build something great together. Reach out & let's connect.
      </motion.p>

      <motion.div variants={fadeInVariant} initial="hidden" animate="visible" style={styles.lottie}>
        <Lottie options={defaultOptions} height={100} width={100} />
      </motion.div>
    </div>
  );
};

// Styled Components
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#181818',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Inter", sans-serif',
  },
  title: {
    fontSize: '42px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    color: '#f0f0f0',
  },
  subtitle: {
    fontSize: '20px',
    color: '#aaa',
    fontWeight: '500',
    marginBottom: '20px',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '80%',
    maxWidth: '1100px',
    marginTop: '30px',
  },
  leftColumn: {
    flex: 1,
    textAlign: 'left',
    padding: '20px',
    backgroundColor: '#222',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(255, 255, 255, 0.1)',
    marginRight: '20px',
  },
  rightColumn: {
    flex: 1,
    textAlign: 'left',
    padding: '20px',
    backgroundColor: '#222',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(255, 255, 255, 0.1)',
    marginLeft: '20px',
  },
  sectionTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#f0f0f0',
    marginBottom: '10px',
  },
  about: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#ddd',
    marginBottom: '15px',
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
