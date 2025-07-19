import React, { useState } from 'react';
import './FAQ.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "Is there a fee to join?",
    answer: "No, joining the club is completely free.",
  },
  {
    question: "Can any student join?",
    answer: "Yes, students from all departments are welcome!",
  },
  {
    question: "Why is our branch unique?",
    answer: "We focus on hands-on learning and inclusive innovation.",
  },
  {
    question: "Do we provide scholarships?",
    answer: "Currently we offer recognition and mentorship, not scholarships.",
  },
  {
    question: "How does this help my career?",
    answer: "You gain experience, leadership, and tech skills valued by employers.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2>FAQs</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
