import React, { useState, useEffect, useRef, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Events.css';
import FadeInSection from '../components/FadeInSection';

const Events = () => {
  const cursorRef = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Memoize pastEvents to prevent recreation on every render
  const pastEvents = useMemo(() => [
    {
      title: 'Nirman',
      date: 'March 15, 2025',
      description: 'Odisha’s No. 1 tech fest featuring events like Hackathon, Roborace, Ideathon, and more.',
      details: {
        images: [
          require('../assets/Nirman7.png'),
          require('../assets/Nirman6.png'),
          require('../assets/Nirman2.png'),
          require('../assets/Nirman3.png'),
          require('../assets/Nirman5.png'),
        ],
        objective: 'To ignite innovation, foster collaboration, and provide a national platform for future tech leaders.',
        overview: 'Nirman is the flagship annual tech fest of SIPC, drawing 1500+ participants...',
        highlights: [
          'Hacknation – 12hr Hackathon',
          'Roborace – Obstacle course',
          'Ideate – Junior & Senior editions',
          'Drone League – Aerial bots',
          'Line Follower – Autonomous cars',
          'Robo Sumo – Duel between Robots',
          'Codeverse – Coding competition',
        ],
        subEvents: [
          {
            name: 'Hacknation',
            img: require('../assets/Hacknation.png'),
            desc: 'A 12-hour hackathon...',
          },
          {
            name: 'Roborace',
            img: require('../assets/Roborace.png'),
            desc: 'Robots race dynamic tracks...',
          },
          {
            name: 'Ideate',
            img: require('../assets/Ideate.png'),
            desc: 'Pitching tech-driven solutions...',
          },
          {
            name: 'Drone League',
            img: require('../assets/Drone_League.png'),
            desc: 'A battleground of drones and brilliance...',
          },
          {
            name: 'Line Follower',
            img: require('../assets/Line_Follower.png'),
            desc: 'Track the line, lead the race...',
          },
          {
            name: 'Robo Sumo',
            img: require('../assets/Robo_Sumo.png'),
            desc: 'Where robots wrestle for glory...',
          },
          {
            name: 'Codeverse',
            img: require('../assets/Nirman4.png'),
            desc: 'Where robots wrestle for glory...',
          },
        ],
      },
    },
    {
      title: 'Techtronics',
      date: 'March 15, 2025',
      description: 'An ideation-focused event where students pitch innovative tech solutions to real-world challenges.',
      details: {
        images: [
          require('../assets/Techtronics3.png'),
          require('../assets/Techtronics1.png'),
          require('../assets/Techtronics2.png'),
        ],
        objective: 'To inspire critical thinking and problem-solving by encouraging students to propose impactful tech solutions.',
        overview: 'Techtronics is a premier ideation event under SIPC that challenges students to identify pressing issues and propose innovative, technology-driven solutions. It promotes creativity, teamwork, and structured thinking by bringing together diverse minds across disciplines to collaborate and compete in a high-energy ideathon setting.',
        highlights: [
          'Problem statements from industry & social impact domains',
          'Structured ideation & pitch deck creation',
          'Mentorship sessions with industry experts',
          'Final pitch presentation in front of a jury panel',
          'Opportunities for incubation and further development'
        ],
        subEvents: [
          {
            img: require('../assets/Techtronics4.png'),
          },
          {
            img: require('../assets/Techtronics5.png'),
          },
          {
            img: require('../assets/Techtronics6.png'),
          },
          {
            img: require('../assets/Techtronics7.png'),
          },
          {
            img: require('../assets/Techtronics8.png'),
          },
          {
            img: require('../assets/Techtronics2.png'),
          },
          
        ],
      },
    },
    {
      title: 'Udaan',
      date: 'March 15, 2025',
      description: 'A robotics event where participants compete in high-speed Roborace challenges with custom-built bots.',
      details: {
        images: [
          require('../assets/Udaan1.png'),
          require('../assets/Udaan2.png'),
          require('../assets/Udaan3.png'), 
        ],
        objective: 'To promote hands-on innovation in robotics by challenging students to design, build, and race intelligent machines.',
        overview: 'Udaan is a signature robotics event under SIPC that brings together tech enthusiasts to compete in high-adrenaline Roborace challenges. Participants build wired or wireless bots to navigate complex obstacle tracks with speed, precision, and control. The event is designed to test technical proficiency, creativity, and strategic thinking in real-world robotics.',
        highlights: [
          'Custom bot building using hardware and embedded systems',
          'Obstacle-rich tracks with ramps, discs, and speed breakers',
          'Timed Roborace challenges testing speed and agility',
          'Evaluation based on design, control, and strategy',
          'Encourages teamwork, innovation, and engineering excellence'
        ],
        subEvents: [
          {
            img: require('../assets/Udaan2.png'),
          },
          {
            img: require('../assets/Udaan4.png'),
          },
          {
            img: require('../assets/Udaan5.png'),
          },
          {
            img: require('../assets/Udaan6.png'),
          },
          
        ],
      },
    },
    {
      title: 'Smart India Hackathon',
      date: 'March 15, 2025',
      description: 'A national-level innovation competition where students solve real-world problems posed by government and industry.',
      details: {
        images: [
          require('../assets/SIH1.png'),
          require('../assets/SIH2.png'), // Replace with actual SIH-related images
        ],
        objective: 'To empower students to innovate and solve societal, industrial, and institutional problems using technology.',
        overview: 'Smart India Hackathon (SIH) is a prestigious nationwide initiative where SIPC mentors and facilitates student teams to compete in solving real-world challenges posed by government bodies, industries, and NGOs. It encourages critical thinking, design-based problem solving, and rapid prototyping while aligning with India’s vision of Atmanirbhar Bharat.',
        highlights: [
          'Real-world problem statements from ministries and industries',
          'Mentorship and guidance from SIPC faculty and alumni',
          'Participation in both software and hardware editions',
          'Exposure to national innovation ecosystem',
          'Opportunity to interact with stakeholders and get solutions implemented'
        ],
        subEvents: [
          {
            img: require('../assets/SIH3.png'),
          },
          {
            img: require('../assets/SIH4.png'),
          },
          {
            img: require('../assets/SIH5.png'),
          },
          {
            img: require('../assets/SIH6.png'),
          },
          
        ],
      },
    },
    // Add more events similarly...
  ], []); 
  const clubEvents = [
    {
      title: 'Silicon Robotics Club',
      description: 'Where innovation meets automation — build, code, and compete with robots that shape the future.',
      website: 'https://roboticsclub.example.com',
      image: require('../assets/src.png'),
    },
    {
      title: 'Silicon Circuit Club',
      description: 'Dive into the world of electronics — design, build, and innovate with circuits that power tomorrow’s tech.',
      website: 'https://circuitclub.example.com',
      image: require('../assets/CircuitClub.png'),
    },
  ];


  // Image rotation state
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    pastEvents.map(() => 0)
  );
   // Image rotation effect - now safe with memoized pastEvents
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexes((prevIndexes) =>
        prevIndexes.map((index, i) => {
          const totalImages = pastEvents[i].details.images.length;
          return (index + 1) % totalImages;
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [pastEvents]); 

  // Cursor effect
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

      <div className="events-page">

        {/* Intro Section */}
        <FadeInSection>
          <div className="section" id="about-events">
            <div className="about-events-content">
                <h1>Our Events</h1>
                <p className="events-description">
                  <p>
                  SIPC organizes 10+ major technical and professional events throughout the academic year, 
                  creating a thriving ecosystem for students to learn, innovate, and lead. At the forefront is Nirman, 
                  proudly recognized as Odisha’s No. 1 Tech Fest, featuring diverse and large-scale events like Hackathons, 
                  Roborace, Ideathons, and tech exhibitions. Other flagship events include Techtronics, an innovation-driven 
                  ideation event encouraging students to solve real-world problems creatively, and Udaan, a high-energy robotics 
                  competition that brings engineering concepts to life.
                  </p>
                  <p>
                    Beyond these, SIPC hosts regular workshops, Tech talks, Coding-Contests, Ideathons, 
                    and national-level hackathons, offering students exposure to the latest tools, 
                    technologies, and industry practices. Additionally, the various sub-clubs under 
                    SIPC—such as the Silicon Switch Club, Silicon Robotics Club, and Silicon Circuit Club—also 
                    organize their own domain-specific events, adding to the vibrant and inclusive tech culture on campus.
                  </p>
                </p>
            </div>
            
          </div>
        </FadeInSection>

        {/* Past Events Section */}
        <FadeInSection>
          <div className="section" id="past-events">
            <h1>Events</h1>
            <div className="events-grid">
              {pastEvents.map((event, index) => (
                <div className="event-card" key={index}>
                  <img
                    src={event.details.images[currentImageIndexes[index]]}
                    alt={event.title}
                    className="rotating-image"
                  />
                  <div className="event-info">
                    <h2>{event.title}</h2>
                    <p><strong>Date:</strong> {event.date}</p>
                    <p>{event.description}</p>
                    <button className="explore-btn" onClick={() => setSelectedEvent(event)}>Explore</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Modal */}
        {selectedEvent && (
          <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setSelectedEvent(null)}>×</button>
              <h2>{selectedEvent.title}</h2>
              <p><strong>Date:</strong> {selectedEvent.date}</p>
              {selectedEvent.details && (
                <>
                  <img
                    src={selectedEvent.details.images[0]}
                    alt={selectedEvent.title}
                    className="event-image"
                  />
                  <div className="event-details">
                    <p><strong>Objective:</strong> {selectedEvent.details.objective}</p>
                    <p><strong>Overview:</strong> {selectedEvent.details.overview}</p>
                    <p><strong>Highlights:</strong></p>
                    <ul>
                      {selectedEvent.details.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Sub-events Gallery */}
                  <h3 style={{ color: "#00ffe0", marginTop: '20px' }}>Sub-events Gallery</h3>
                  <div className="events-gallery">
                    {selectedEvent.details.subEvents.map((sub, i) => (
                      <div key={i} className="sub-event">
                        <img src={sub.img} alt={sub.name} />
                        <p><strong>{sub.name}</strong></p>
                        <p>{sub.desc}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Club Events Section */}
        <FadeInSection>
          <div className="section" id="club-events">
            <h1>Other Club Events</h1>
            <div className="events-grid">
              {clubEvents.map((club, index) => (
                <div className="event-card" key={index}>
                  <img src={club.image} alt={club.title} />
                  <div className="event-info">
                    <h2>{club.title}</h2>
                    <p>{club.description}</p>
                    <a href={club.website} target="_blank" rel="noopener noreferrer">
                      <button className="explore-btn">Explore</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
      <Footer />
    </>
  );
};

export default Events;
