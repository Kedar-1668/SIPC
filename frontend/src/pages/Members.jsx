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
      name: 'Dr. Mahendra Prasad Agasty',
      role: 'President, IIC',
      img: require('../assets/Agasthy.png'),
      links: {
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com/',
        twitter: 'https://twitter.com/'
      }
    },
    {
      name: 'Dr. Sudhansu Mohan Biswal',
      role: 'Faculty In-Charge, SIPC',
      img: require('../assets/Sudhanshu.png'),
      links: {
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com/',
        twitter: 'https://twitter.com/'
      }
    },
    {
      name: 'Er. Satish Kumar Das',
      role: 'Faculty Co-ordinator, SIPC',
      img: require('../assets/Satish1.png'),
      links: {
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com/',
        twitter: 'https://twitter.com/'
      }
    }
  ],
  fourthYear: [
    {
      name: 'Pranay Mishra',
      role: 'Secretary',
      img: require('../assets/Pranay_Mishra.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Smruti Ranjan Rout',
      role: 'Nominated Representative',
      img: require('../assets/SMRUTI_RANJAN_ROUT.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Jagat Jyoti Behera',
      role: 'Joint Secretary',
      img: require('../assets/Jagat.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Manoj Kumar Senapati',
      role: 'Core Member',
      img: require('../assets/Manoj_Kumar_Senapati.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Abinash Nanda',
      role: 'Core Member',
      img: require('../assets/Abinash_Nanda.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Akankshya Hota',
      role: 'Core Member',
      img: require('../assets/Akankshya_Hota.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Amarjyoti Senapati',
      role: 'Core Member',
      img: require('../assets/Amarjyoti_Senapati.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Nirmalya Sahoo',
      role: 'Core Member',
      img: require('../assets/Nirmalya_sahoo.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Piush Praharaj',
      role: 'Core Member',
      img: require('../assets/Piush_Praharaj.jpg'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Priyabrat Omm Kumar',
      role: 'Core Member',
      img: require('../assets/Priyabrat_Omm_Kumar.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sadiqua Farheen',
      role: 'Core Member',
      img: require('../assets/SADIQUA_FARHEEN.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sourav Subhakanta Dash',
      role: 'Core Member',
      img: require('../assets/SouravSubhakantaDash.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sumeet Kumar Rout',
      role: 'Core Member',
      img: require('../assets/SUMEET_KUMAR_ROUT.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Nirmalya Parida',
      role: 'Core Member',
      img: require('../assets/SKM_2217.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
  ],
  thirdYear: [
    {
      name: 'Aditya Das',
      role: 'Core Member',
      img: require('../assets/Aditya Das.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Anish Aniket',
      role: 'Core Member',
      img: require('../assets/Anish Aniket.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Bishwajit Panigrahi',
      role: 'Core Member',
      img: require('../assets/Bishwajit Panigrahi.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Debasish Majhi',
      role: 'Core Member',
      img: require('../assets/DEBASISH MAJHI.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Deepak Kumar Gouda',
      role: 'Core Member',
      img: require('../assets/Deepak Kumar Gouda.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Jayshree Padhi',
      role: 'Core Member',
      img: require('../assets/Jayshree padhi.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Megha Patro',
      role: 'Core Member',
      img: require('../assets/Megha Patro.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sambit Subhrajit Swain',
      role: 'Core Member',
      img: require('../assets/sambit subhrajit swain.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sampad Prasad Nayak',
      role: 'Core Member',
      img: require('../assets/Sampad Prasad Nayak.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'SN Parsuram Swain',
      role: 'Core Member',
      img: require('../assets/SN Parsuram Swain.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sambit Das',
      role: 'Core Member',
      img: require('../assets/Sambit Das.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Ayushman parida',
      role: 'Core Member',
      img: require('../assets/Ayushman parida.png'),
      links: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },

  ],
  
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
        const x = e.clientX ?? e.touches?.[0].clientX;
        const y = e.clientY ?? e.touches?.[0].clientY;
        if (x && y) {
          cursorRef.current.style.transform = `translate3d(${x - 15}px, ${y - 15}px, 0)`;
        }
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
    };
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
    </div>
    <Footer/>
    </>
  );
};

export default Members;
