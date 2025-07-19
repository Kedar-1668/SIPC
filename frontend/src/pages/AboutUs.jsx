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


const AboutUs = () => {
  const cursorRef = useRef(null);
  const data = {
  labels: ['2022', '2023', '2024','2025'],
  datasets: [
    {
      label: '01 - Total Participation',
      data: [800, 1200, 1900, 2500],
      backgroundColor: '#1e3a8a', // Dark blue
    },
    {
      label: '02 - Outside College Participation',
      data: [300, 400, 800, 1000],
      backgroundColor: '#3b82f6', // Light blue
    },
    {
      label: '03 - Silicon Participation',
      data: [500, 800, 1100, 1500],
      backgroundColor: '#60cdf6', // Aqua blue
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: 'blanchedalmond',
        font: {
          size: 14
        },
        boxWidth: 20,
        padding: 15
      }
    },
    title: {
      display: true,
      text: 'Participation Overview (2022–2025)',
      color: 'blanchedalmond',
      font: {
        size: 20
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: 'blanchedalmond'
      },
      grid: {
        color: '#333'
      },
      stacked: false
    },
    y: {
      ticks: {
        color: 'blanchedalmond'
      },
      grid: {
        color: '#333'
      },
      beginAtZero: true,
    }
  }
};
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
    <Navbar/>
    <div className="cursor-glow" ref={cursorRef}></div>
    <div id="about" className="about-container">
      <FadeInSection>
        <section className="section about-header">
          <div className="about-content">
            <h1>About SIPC</h1>
            <p>Empowering students through technology, innovation, and collaborative learning since 2019
            SIPC (Silicon Innovation and Promotion Cell) is the official technical and innovation-driven club 
            of Silicon Institute of Technology, committed to fostering student-led growth in coding, research, and futuristic technologies.</p>
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
                What started as a small initiative has grown into one of the most dynamic and interdisciplinary student organizations on campus.
              </p>
              <p>
                Today, SIPC brings together students from all departments empowering them to contribute to real-world projects, 
                share knowledge, and grow collectively.
              </p>
              <p>
                The club now serves as the umbrella body for multiple specialized technical groups, including:

                Silicon Switch Club, Silicon Robotics Club, Silicon Circuit Club
                And other domain-specific student-led initiatives
              </p>
          </div>
      </section>
      </FadeInSection>
      <FadeInSection>
        <section className="section events-section">
          <div className="events-content">
            <h2>Our Events</h2>
            <p>SIPC organizes 10+ flagship technical events throughout the academic year, 
              providing dynamic platforms for innovation, learning, and collaboration. 
              Among these, Nirman stands out as Odisha’s No. 1 Tech Fest, attracting participants 
              from across the state and beyond for its grand showcase of technology, innovation, 
              and excellence. Techtronics, our premier ideation event, encourages students to think 
              critically and propose creative solutions to real-world problems. Udaan, a flagship 
              robotics competition, challenges participants to design, build, and showcase intelligent 
              robotic systems, blending engineering precision with innovative thinking. SIPC also actively 
              mentors students for national-level events like the Smart India Hackathon, fostering 
              problem-solving at scale. In addition, the club conducts coding contests, hands-on workshops, 
              ideathons, technical seminars, and Tech talks, nurturing a campus-wide culture of innovation and 
              skill development across all disciplines.</p>
          </div>
          
        </section>
      </FadeInSection>
      
      <FadeInSection>
        <section className="section mission-vision">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To foster a collaborative learning environment where students can develop their programming skills, work on innovative 
            projects, and prepare for successful careers in technology while contributing positively to the broader tech community.
          </p>
        </div>
        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To be the leading student organization that bridges the gap between academic learning and industry requirements, 
            creating tomorrow's tech leaders who are not only technically proficient but also ethically responsible and 
            innovation-driven.
          </p>
        </div>
      </section>
      </FadeInSection>
      
      
      <FadeInSection>
        <section className="section chart-section">
          <h2>Participation</h2>
          <div className="chart-container">
            <Bar data={data} options={options} />
          </div>
        </section>
      </FadeInSection>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
