"use client";

import AppSection from "@/components/appSection/AppSection";
import DriverSection from "@/components/driversSection/DriverSection";
import FreeMarketingSection from "@/components/freeMarketingSection/FreeMarketingSection";
import Hero from "@/components/heroSection/Hero";
import ServicesSection from "@/components/servicesSection/ServicesSection";
import { motion } from 'framer-motion';


export default function Home() {
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
      transition={{ type: 'linear' }} // Set the transition to linear
      className="flex min-h-screen flex-col items-center justify-between"
    >
      {/* <main className="flex min-h-screen flex-col items-center justify-between "> */}
        <Hero />
        <ServicesSection />
        <DriverSection />
        <AppSection />
        <FreeMarketingSection />
      {/* </main> */}
    </motion.main>
  )
}
