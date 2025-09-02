import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import FadeInSection from "../components/FadeInSection";
import Background from "../assets/background.mp4";
import Timeline from "../components/Timeline";
import './Home.css';

const Home = () => {
  const cursorRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  // Event Data
  const events = [
    {
      image: require('../assets/Nirman8.png'),
      title: 'Nirman',
      description: 'Odisha’s No. 1 tech fest featuring events like Hackathon, Roborace, Ideathon, and more.',
    },
    {
      image: require('../assets/Techtronics5.png'),
      title: 'Techtronics',
      description: 'An ideation-focused event where students pitch innovative tech solutions to real-world challenges.',
    },
    {
      image: require('../assets/Udaan1.png'),
      title: 'Udaan',
      description: 'A robotics event where participants compete in high-speed Roborace challenges with custom-built bots.',
    },
    {
      image: require('../assets/SIH1.png'),
      title: 'Smart India Hackathon',
      description: 'A national-level innovation competition where students solve real-world problems posed by government and industry.',
    },
  ];

  // Cursor Glow
  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 15}px, ${e.clientY - 15}px, 0)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Parallax Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (videoRef.current) videoRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      if (overlayRef.current) overlayRef.current.style.transform = `translateY(${scrollY * 0.6}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="cursor-glow" ref={cursorRef}></div>

      {/* Hero Section with Background Video */}
      <div id="home" className="video-section">
        <div className="video-container">
          <ReactPlayer
            ref={videoRef}
            url={Background}
            playing
            muted
            loop
            controls={false}
            width="100%"
            height="100%"
            className="react-player"
            config={{
              file: {
                attributes: {
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }
                }
              }
            }}
          />
        </div>

        <div ref={overlayRef} className="video-overlay-button">
          <div className="btn-wrapper">
            <Link to="/join" className="section-btn">Join Us</Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <FadeInSection>
        <div id="aboutus" className="section">
          <div className="aboutus-content">
            <div className="text">
              <h1>About Us</h1>
              <p>We are a community of students passionate about learning and leading through tech events.</p>
              <Link to="/about" className="section-btn">Learn More</Link>
            </div>
            <div className="image">
              <img src={require('../assets/About.png')} alt="About" />
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Events Section */}
      <FadeInSection>
        <div id="events" className="section events-section">
        <div className="parallax-layer background-layer"></div>
        <div className="parallax-layer mid-layer">
          <h1>Events</h1>
          <p>We host workshops, speaker sessions, and coding contests throughout the year.</p>
        </div>

        <div className="events-wrapper parallax-layer fore-layer">
          <div className="events-scroller" id="eventScroller">
            {[...events, ...events].map((event, index) => (
              <div className="event-card" key={index}>
                <img src={event.image} alt={event.title} />
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

          <Link to="/events" className="section-btn">View Events</Link>
        </div>

      </FadeInSection>

      <FadeInSection>
        <Timeline />
      </FadeInSection>

      {/* Core Members Section */}
      <FadeInSection>
        <div id="coremembers" className="section members-section">
          <div className="parallax-layer background-layer"></div>
          <div className="coremembers-content parallax-layer mid-layer">
            <div className="image">
              <img src={require('../assets/members.png')} alt="Core Member" />
            </div>
            <div className="text">
              <h1>Core Members</h1>
              <p>Meet our amazing team who drive the vision forward.</p>
              <Link to="/members" className="section-btn">Meet the Team</Link>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="partners" className="section partners-section">
          <h1 className="partners-heading">Collaboration With Colleges</h1>
          <div className="partners-grid">
            <div className="partner-logo"><img src={require('../assets/NIT_Rourkela.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/IIT.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/IIIT.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/KIIT.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/ITER.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/OUTR.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/Centurion.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/cvraman.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/GIET.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/Trident.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/GITA.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/Einstein_college.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/Indira_Gandhi_Institute_of_Technology,_Sarang.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/Padmashree_Krutartha.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/Parala_Maharaja.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/Nalanda.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/government_college_of_engineering_kalahandi.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/CTTC.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/BJB.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/Ajay_Binay.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/Gayatri.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/NISER.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/VSSUT.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/BIITM.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/SRUSTI.png')} alt="" /></div>
            <div className="partner-logo"><img src={require('../assets/MITS.png')} alt="" /></div>
          </div>
        </div>
      </FadeInSection>
      {/* Leadership Messages Section */}
      
        <div className="leadership-section">
          <FadeInSection>
          {/* Branch Counsellor */}
          <div className="leadership-card">
            <img src={require('../assets/sipc.png')} alt="Branch Counsellor" />
            <div className="message-text">
              <h2>Message from <span className="highlight">Vice-Chancellor</span></h2>
              <p>"As a faculty member, it is a privilege to welcome you to NIRMAN 4.0—our 
                premier technical fest where innovation meets ambition. This platform is not 
                just about competition; it’s about nurturing visionary thinking, fostering 
                creativity, and driving technological transformation. With events like 
                Hacknation, Robo Race, and Drone League, students are empowered to push 
                boundaries, collaborate meaningfully, and emerge as the tech leaders of 
                tomorrow. I take immense pride in the dedication and talent our students 
                bring to this stage and look forward to witnessing the ideas that will shape the future."</p>
              <p className="author">Dr. Jaideep Talukdar</p>
            </div>
          </div>
          </FadeInSection>
          <FadeInSection>
          {/* Faculty Coordinator */}
          <div className="leadership-card reverse">
            <img src={require('../assets/Agasthy.png')} alt="Faculty Coordinator" />
            <div className="message-text">
              <h2>Message from <span className="highlight">President, IIC</span></h2>
              <p>"I take great pride in welcoming you to NIRMAN 4.0—SIPC’s premier platform 
                for innovation, creativity, and learning. This event brings together bright 
                young minds to explore groundbreaking technologies and tackle real-world 
                challenges. From robotics to AI, NIRMAN is designed to inspire collaboration, 
                critical thinking, and bold experimentation. It is more than just a competition—it 
                is a celebration of the relentless spirit of innovation that drives our students and community forward."</p>
              <p className="author">Dr. Mahendra Prasad Agasty</p>
            </div>
          </div>
          </FadeInSection>

          <FadeInSection>
          {/* Technical Head */}
          <div className="leadership-card">
            <img src={require('../assets/Sudhanshu.png')} alt="Technical Head" />
            <div className="message-text">
              <h2>Message from <span className="highlight">Faculty In-Charge, SIPC</span></h2>
              <p>"It is with great enthusiasm that I welcome you all to NIRMAN 4.0—a dynamic 
                celebration of technology, creativity, and collaborative spirit. As a faculty 
                member, I am proud to see this event serve as a launchpad for students to 
                explore emerging technologies, connect with like-minded innovators, and 
                take on real-world challenges. More than just a fest, NIRMAN encourages 
                critical thinking, bold experimentation, and a shared passion for meaningful 
                innovation. I urge every participant to immerse themselves in this journey and 
                make lasting contributions to our growing tech community."</p>
              <p className="author">Dr. Sudhansu Mohan Biswal</p>
            </div>
          </div>
          </FadeInSection>

          <FadeInSection>
          {/* Chairperson */}
          <div className="leadership-card reverse">
            <img src={require('../assets/Satish1.png')} alt="Chairperson" />
            <div className="message-text">
              <h2>Message from <span className="highlight">Faculty Co-ordinator, SIPC</span></h2>
              <p>"I am honored to welcome all participants, mentors, and guests to NIRMAN 4.0. 
                This flagship event, driven by the Silicon Innovation and Promotion Cell (SIPC), 
                reflects our ongoing commitment to cultivating innovation and practical problem-solving 
                among students. It brings immense joy to witness young minds channel their creativity 
                through robotics, AI, and sustainable solutions, setting new standards of excellence 
                each year. I commend the hard work of our organizers and participants and encourage 
                everyone to embrace the opportunities for learning, growth, and collaboration that NIRMAN proudly offers."</p>
              <p className="author">Er. Satish Kumar Das</p>
            </div>
          </div>
          </FadeInSection>

        </div>
      


      <FadeInSection>
        <FAQ />
      </FadeInSection>

      <Footer />
    </>
  );
};

export default Home;
