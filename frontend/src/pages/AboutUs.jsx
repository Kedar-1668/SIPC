import React, { useEffect, useRef } from 'react';
import './AboutUs.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

//  Clubs data (moved from JoinUs)
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
    image: require('../assets/switch.png'),
  },
  {
    name: 'The ISTE Student Chapter',
    description: 'Sharpen problem-solving skills and compete in contests like Codeforces and Leetcode.',
    link: 'https://cpclub.example.com',
    image: require('../assets/sipc.png'),
  },
  {
    name: 'The IEEE Student Branch',
    description: 'Sharpen problem-solving skills and compete in contests like Codeforces and Leetcode.',
    link: 'https://cpclub.example.com',
    image: require('../assets/ieee-silicon.png'),
  }
];

const AboutUs = () => {
  const cursorRef = useRef(null);

  // ✅ Chart data
  const data = {
    labels: ['2022', '2023', '2024','2025'],
    datasets: [
      {
        label: '01 - Total Participation',
        data: [800, 1200, 1900, 2500],
        backgroundColor: '#1e3a8a',
      },
      {
        label: '02 - Outside College Participation',
        data: [300, 400, 800, 1000],
        backgroundColor: '#3b82f6',
      },
      {
        label: '03 - Silicon Participation',
        data: [500, 800, 1100, 1500],
        backgroundColor: '#60cdf6',
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: 'blanchedalmond',
          font: { size: 14 },
          boxWidth: 20,
          padding: 15
        }
      },
      title: {
        display: true,
        text: 'Participation Overview (2022–2025)',
        color: 'blanchedalmond',
        font: { size: 20 }
      }
    },
    scales: {
      x: {
        ticks: { color: 'blanchedalmond' },
        grid: { color: '#333' }
      },
      y: {
        ticks: { color: 'blanchedalmond' },
        grid: { color: '#333' },
        beginAtZero: true
      }
    }
  };

  //  Cursor Glow
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

      <div id="about" className="about-container">
        
        
        <FadeInSection>
          <section className="section about-header">
            <div className="about-content">
              <h1>About SIPC</h1>
              <p>
                Empowering students through technology, innovation, and collaborative learning since 2019.
                SIPC (Silicon Innovation and Promotion Cell) is the official technical and innovation-driven club 
                of Silicon Institute of Technology, committed to fostering student-led growth in coding, research, and futuristic technologies.
              </p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="section story-section">
            <div className="story-section-content">
              <h2>Our Story</h2>
              <p>
                The Silicon Innovation and Promotion Cell (SIPC) was established in 2019 by a group of 
                students who wanted to build a space for learning, collaboration, and hands-on innovation. 
              </p>
              <p>
                Today, SIPC brings together students from all departments empowering them to contribute to real-world projects, 
                share knowledge, and grow collectively.
              </p>
            </div>
          </section>
        </FadeInSection>

        {/*  Events */}
        <FadeInSection>
          <section className="section events-section">
            <div className="events-content">
              <h2>Our Events</h2>
              <p>SIPC organizes 10+ flagship technical events throughout the academic year, 
                providing dynamic platforms for innovation, learning, and collaboration. 
              </p>
            </div>
          </section>
        </FadeInSection>

        {/*  Mission + Vision */}
        <FadeInSection>
          <section className="section mission-vision">
            <div className="card">
              <h3>Our Mission</h3>
              <p>
                To foster a collaborative learning environment where students can develop their programming skills, 
                work on innovative projects, and prepare for successful careers in technology.
              </p>
            </div>
            <div className="card">
              <h3>Our Vision</h3>
              <p>
                To be the leading student organization that bridges the gap between academic learning and industry requirements.
              </p>
            </div>
          </section>
        </FadeInSection>

        {/* Participation Chart */}
        <FadeInSection>
          <section className="section chart-section">
            <h2>Participation</h2>
            <div className="chart-container">
              <Bar data={data} options={options} />
            </div>
          </section>
        </FadeInSection>

        {/* Sub-Clubs (merged from JoinUs) */}
        <FadeInSection>
          <section class="clubs-container">
            <h1 class="clubs-title">Our Clubs</h1>
            <p class="clubs-subtitle">Explore the communities you can join</p>

            <div class="clubs-box">   
              <div class="clubs-list">
                {clubsData.map((club, index) => (
                <div key={index} className="club-card">
                  <img src={club.image} alt={club.name} />
                  <div className="club-content">
                    <h3>{club.name}</h3>
                    <p>{club.description}</p>
                    <a href={club.link} target="_blank" rel="noopener noreferrer" className="club-link">
                      Visit Website
                    </a>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </section>

          
        </FadeInSection>

      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
