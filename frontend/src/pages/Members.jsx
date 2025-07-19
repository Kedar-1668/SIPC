import React, { useEffect, useRef } from 'react';
import './Members.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import Instagram from '../assets/Instagram.png';
import LinkedIn from '../assets/LinkedIn.png';
import Twitter from '../assets/Twitter.png';

const membersData = {
  faculty: [
    {
      name: 'Dr. A. Sharma',
      role: 'Faculty In-Charge',
      img: require('../assets/person.png'),
      links: {
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com/',
        twitter: 'https://twitter.com/'
      }
    },
    {
      name: 'Prof. B. Verma',
      role: 'Faculty In-Charge',
      img: require('../assets/person.png'),
      links: {
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com/',
        twitter: 'https://twitter.com/'
      }
    }
  ],
  fourthYear: [
    {
      name: 'Alice Roy',
      role: 'President',
      img: require('../assets/person.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    // ...add 6-7 more
  ],
  thirdYear: [
    {
      name: 'Bob Kumar',
      role: 'Coordinator',
      img: require('../assets/person.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    // ...add 6-7 more
  ],
  secondYear: [
    {
      name: 'Charlie Das',
      role: 'Member',
      img: require('../assets/person.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    // ...add 6-7 more
  ]
};

const MemberCard = ({ name, role, img, links }) => (
  <div className="member-card">
    <img src={img} alt={name} className="member-image" />
    <h3>{name}</h3>
    <p>{role}</p>
    <div className="social-icons">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/home" aria-label="LinkedIn">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/" aria-label="Twitter">
            <img src={Twitter} alt="Twitter" />
          </a>
    </div>
  </div>
);

const MembersSection = ({ title, members }) => (
  <section className="members-section">
    <h2>{title}</h2>
    <div className="members-grid">
      {members.map((m, i) => (
        <MemberCard key={i} {...m} />
      ))}
    </div>
  </section>
);

const Members = () => {
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
    <Navbar/>
    <div className="cursor-glow" ref={cursorRef}></div>

    <div className="members-page">
      <FadeInSection>
        <MembersSection title="Faculty In-Charge" members={membersData.faculty} />
      </FadeInSection>
      <FadeInSection>
        <MembersSection title="4th Year Members" members={membersData.fourthYear} />
      </FadeInSection>
      <FadeInSection>
        <MembersSection title="3rd Year Members" members={membersData.thirdYear} />
      </FadeInSection>
      <FadeInSection>
        <MembersSection title="2nd Year Members" members={membersData.secondYear} />
      </FadeInSection>
    </div>
    <Footer/>
    </>
  );
};

export default Members;
