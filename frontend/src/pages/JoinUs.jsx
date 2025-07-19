
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import './JoinUs.css';

const clubsData = [
  {
    name: 'Silicon Circuit Club',
    description: 'Dive into the world of electronics — design, build, and innovate with circuits that power tomorrow’s tech.',
    link: 'https://aimlclub.example.com',
    image: require('../assets/CircuitClub.png'),
  },
  {
    name: 'Silicon Robotics Club',
    description: 'Where innovation meets automation — build, code, and compete with robots that shape the future.',
    link: 'https://cyberclub.example.com',
    image: require('../assets/src.png'),
  },
  {
    name: 'Silicon Switch Club',
    description: 'Build and deploy responsive websites and mobile apps with modern technologies.',
    link: 'https://webappclub.example.com',
    image: require('../assets/sipc.png'),
  },
  {
    name: 'The ISTE Student Chapter',
    description: 'Sharpen problem-solving skills and compete in contests like Codeforces and Leetcode.',
    link: 'https://cpclub.example.com',
    image: require('../assets/sipc.png'),
  },
  {
    name: 'The IEEE STudent Branch',
    description: 'Sharpen problem-solving skills and compete in contests like Codeforces and Leetcode.',
    link: 'https://cpclub.example.com',
    image: require('../assets/ieee-silicon.png'),
  }
];

const JoinUs = () => {
  const cursorRef = useRef(null);
  useEffect(() => {
  const move = (e) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${e.clientX - 15}px, ${e.clientY - 15}px, 0)`;
    }
  };
  window.addEventListener("mousemove", move);
  return () => window.removeEventListener("mousemove", move);
}, []);

  return (
    <>
      <Navbar />
      <div className="cursor-glow" ref={cursorRef}></div>

      <div className="clubs-container">
        <h1 className="clubs-title">SIPC Sub-Clubs</h1>
        <p className="clubs-subtitle">Choose your path and join a club that fits your passion.</p>

        <div className="clubs-list">
          {clubsData.map((club, index) => (
            <FadeInSection key={index}>
              <div className="club-card">
                <img src={club.image} alt={club.name} />
                <div className="club-content">
                  <h2>{club.name}</h2>
                  <p>{club.description}</p>
                  <a href={club.link} target="_blank" rel="noopener noreferrer" className="club-link">
                    Visit Website
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JoinUs;
