import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,  // trigger every time in/out happens
    threshold: 0.2,       // 20% of element visible to count as "in view"
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.6, ease: 'easeIn' },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
