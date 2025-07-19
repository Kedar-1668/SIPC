import React from 'react';
import './Timeline.css';


const events = [
  {
    title: "Coding Contests",
    description: "A competitive event where participants solve programming challenges to test their coding skills and problem-solving speed.",
  },
  
  {
    title: "Robotics Events",
    description: "A thrilling competition where teams design and program robots to complete tasks, overcome challenges, or battle it out in dynamic arenas.",
  
    title: "Hackathons",
    description: "An intense innovation sprint where teams collaborate to build creative tech solutions within a limited timeframe.",
  },
  {
    title: "Ideathons",
    description: "A creative brainstorming competition where participants pitch innovative ideas to solve real-world problems.",
  },
  {
    title: "Tech Talks",
    description: "An engaging platform where experts share insights on emerging technologies and industry trends.",
  },
  {
    title: "Workshops",
    description: "Hands-on learning sessions designed to equip participants with practical skills in emerging technologies.",
  },
  {
    title: "Roborace",
    description: "A high-octane showdown where speed, precision, and robotic brilliance collide on a thrilling obstacle-packed track.",
  },
  {
    title: "Robo Sumo",
    description: "Robo Sumo blends speed, strategy, and sensor-driven combat in a thrilling battle of tech-fueled dominance.",
  },
];

const LoopingTimeline = () => {
  // Repeat events twice to create an infinite scroll illusion
  const loopedEvents = [...events, ...events];

  return (
    <div className="timeline-loop-wrapper">
      <h1 className="timeline-heading">Activities</h1>
      <div className="timeline-loop-scroll">
        <div className="timeline-loop-content">
          {loopedEvents.map((event, index) => (
            <div key={index} className="timeline-loop-item">
              <div className="timeline-content">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoopingTimeline;
