"use client";

import React from 'react'
import { motion } from 'framer-motion';

const ContactUs = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion 
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'tween' }} // Set the transition to linear
      className=""
    >
      <div>
        <div className='text-center h-80 my-20 text-5xl'>Contact Us page</div>
      </div>
    </motion.main>
  )
}

export default ContactUs