// Home.js
import React from 'react';
import Lottie from 'react-lottie';  
import animationData from './animation.json';  

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
      <h2 style={{ color: '#333' }}>Welcome to My Personal Website!</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        Hi, I'm <strong>Amirali Mohseni</strong>, a software developer with a strong background in 
        computer science and a deep interest in data science, AI, and machine learning. I specialize in building 
        scalable solutions using Python, JavaScript, and various modern technologies. 
      </p>

      <div style={{ margin: '20px auto', padding: '15px', width: '80%', maxWidth: '400px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#555' }}>Experience</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><strong>Software Developer at XYZ Company</strong> (2021 - Present)</li>
          <li><strong>Intern at ABC Corp</strong> (2020 - 2021)</li>
          <li><strong>Freelance Developer</strong> (2019 - 2020)</li>
        </ul>
      </div>

      <div style={{ margin: '20px auto', padding: '15px', width: '80%', maxWidth: '400px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#555' }}>Education</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><strong>Bachelor of Science in Computer Science</strong> - University of Technology (2015 - 2019)</li>
          <li><strong>Data Science Bootcamp</strong> - Online Course (2020)</li>
        </ul>
      </div>

      <div style={{ margin: '20px auto', padding: '15px', width: '80%', maxWidth: '400px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#555' }}>Skills</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><strong>Languages:</strong> Python, JavaScript, TypeScript</li>
          <li><strong>Frameworks:</strong> React, Node.js, Django</li>
          <li><strong>Technologies:</strong> RESTful APIs, GraphQL, Docker, AWS</li>
          <li><strong>Specializations:</strong> Data Science, Machine Learning, AI</li>
        </ul>
      </div>

      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        Feel free to browse through my work and get in touch if you'd like to collaborate or learn more about my 
        journey in tech!
      </p>
      
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Home;