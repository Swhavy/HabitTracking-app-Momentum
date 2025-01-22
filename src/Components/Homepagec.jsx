import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import business from '../assets/Images/business.jpg'
import Footer from './Footer'

const Homepage = () => {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-blue-50">
      <div className="flex flex-col items-center w-[90%] md:w-[80%] bg-blue-500 relative rounded-md">
        <img
          src={business}
          alt=""
          className="aspect-[7360/4912] object-cover w-full rounded-md"
        />
        <div className="darkContainer w-full h-full bg-black/50 absolute inset-0 rounded-md flex justify-center items-center">
          <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 max-[383px]:gap-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-white mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12 max-[420px]:text-sm max-[383px]:text-xs max-[383px]:text-[0.6rem]">
              Take Control of Your Habits with Momentum
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12 max-w-2xl mx-auto text-gray-200 semibold max-[420px]:text-[.8rem] max-[383px]:text-[0.56rem]">
              Achieve your goals by tracking habits, setting personalized goals,
              and analyzing your progress. Stay motivated and productive with
              Momentum today.
            </p>
            <div className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6 2xl:space-x-7 max-[383px]:flex-col max-[383px]:gap-2 max-[383px]:items-center">
              <a
                className="bg-blue-700 text-white py-2 px-4 sm:py-2 sm:px-5 md:py-3 md:px-6 lg:py-3 lg:px-7 xl:py-4 xl:px-8 2xl:py-4 2xl:px-9 rounded-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold hover:bg-blue-800 transition duration-300 max-[420px]:w-[10rem] max-[420px]:h-[2rem] max-[383px]:text-[0.6rem] max-[383px]:px-10"
                href="/signup"
                data-discover="true"
              >
                Start Your Journey
              </a>
              <a
                className="text-blue-700 py-2 px-6 rounded-full text-base font-semibold border-2 border-white hover:bg-blue-700 hover:text-white transition duration-300 sm:py-2 sm:px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 max-[420px]:w-[10rem] max-[420px]:h-[2rem] max-[420px]:py-0 max-[420px]:text-center max-[383px]:text-[0.6rem] max-[383px]:px-10"
                href="/learn-more"
                data-discover="true"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <motion.section
        ref={sectionRef}
        className="beautiful py-16 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}} // Trigger animation only when inView is true
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Why Choose Momentum?
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="text-blue-700 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="currentColor"
              >
                <path d="M12 4C8.13 4 5 7.13 5 11c0 1.75.68 3.34 1.77 4.58-.24.49-.43 1.02-.57 1.58-2.09-1.24-3.45-3.56-3.45-6.16C3.75 5.13 7.88 1 12 1s8.25 4.13 8.25 9c0 2.6-1.36 4.92-3.45 6.16-.14-.56-.33-1.09-.57-1.58C18.32 14.34 19 12.75 19 11c0-3.87-3.13-7-7-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Track Your Progress
            </h3>
            <p className="text-gray-700">
              Stay on top of your goals by tracking your daily habits and
              routines. Monitor your progress to stay motivated.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="text-blue-700 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="currentColor"
              >
                <path d="M20 12h-4v4h-4v-4H4v-4h8V4h4v4h4v4z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Set Personalized Goals
            </h3>
            <p className="text-gray-700">
              Customize your goals to fit your lifestyle and preferences. Make
              your journey unique and tailored to you.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="text-blue-700 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="currentColor"
              >
                <path d="M12 4C8.13 4 5 7.13 5 11c0 1.75.68 3.34 1.77 4.58-.24.49-.43 1.02-.57 1.58-2.09-1.24-3.45-3.56-3.45-6.16C3.75 5.13 7.88 1 12 1s8.25 4.13 8.25 9c0 2.6-1.36 4.92-3.45 6.16-.14-.56-.33-1.09-.57-1.58C18.32 14.34 19 12.75 19 11c0-3.87-3.13-7-7-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Analyze Your Progress
            </h3>
            <p className="text-gray-700">
              Use our tools to analyze your progress and make adjustments to
              your habits and goals. Stay on track and achieve your dreams.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={sectionRef}
        className="py-16 bg-gray-200 w-[90%]"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}} // Trigger animation only when inView is true
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2
          className="text-3xl font-bold text-center text-blue-800 mb-12 aos-init aos-animate"
          data-aos="fade-up"
        >
          Our Impact
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div
            className="bg-white p-8 rounded-lg shadow-xl text-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-5xl font-extrabold text-blue-700">10K+</h3>
            <p className="text-gray-700">Users Reached</p>
          </div>
          <div
            className="bg-white p-8 rounded-lg shadow-xl text-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-5xl font-extrabold text-blue-700">1.5M+</h3>
            <p className="text-gray-700">Habits Tracked</p>
          </div>
          <div
            className="bg-white p-8 rounded-lg shadow-xl text-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-5xl font-extrabold text-blue-700">50K+</h3>
            <p className="text-gray-700">Goals Achieved</p>
          </div>
        </div>
      </motion.section>
      <motion.section
        ref={sectionRef}
        className="py-16 bg-gray-100 w-[90%]"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}} // Trigger animation only when inView is true
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2
          className="text-3xl font-bold text-center text-blue-800 mb-8 aos-init aos-animate"
          data-aos="fade-up"
        >
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div
            className="bg-white p-8 rounded-lg shadow-md aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-gray-700 italic">
              "Momentum helped me stay consistent with my workout routine, and
              now I'm in the best shape of my life!"
            </p>
            <p className="text-blue-700 font-semibold mt-4">- Ellis</p>
          </div>
          <div
            className="bg-white p-8 rounded-lg shadow-md aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-gray-700 italic">
              "Tracking my productivity with Momentum allowed me to focus on
              what matters, and my work efficiency skyrocketed!"
            </p>
            <p className="text-blue-700 font-semibold mt-4">- Valentine</p>
          </div>
          <div
            className="bg-white p-8 rounded-lg shadow-md aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="text-gray-700 italic">
              "Thanks to Momentum, I've built healthy habits around learning and
              reading every day!"
            </p>
            <p className="text-blue-700 font-semibold mt-4">- David</p>
          </div>
        </div>
      </motion.section>
      <motion.section
        ref={sectionRef}
        className="beautiful py-16 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}} // Trigger animation only when inView is true
        transition={{ duration: 0.8, ease: 'easeOut' }}
      ></motion.section>

      <div className="w-screen min-h-screen flex flex-col items-center bg-blue-50">
        <motion.section
          className="bg-blue-700 py-12 rounded-lg text-white relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute top-0 right-0 m-6 text-blue-700 font-semibold text-sm shadow-lg transform rotate-2 bg-white py-2 px-4 rounded-lg border-2 border-blue-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Momentum
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 m-6 text-blue-700 font-semibold text-sm shadow-lg transform rotate-2 bg-white py-2 px-4 rounded-lg border-2 border-blue-300 max-[730px]:bottom-[-1.5rem] max-[730px]:left-[-1.5rem]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Track Your Habits.
          </motion.div>
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-6">
              Ready to Achieve Your Goals?
            </h3>
            <p className="text-lg mb-8">
              Join thousands of successful users who are building better habits
              with Momentum. Take the first step towards your success.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                className="bg-white text-blue-700 py-2 px-6 rounded-full text-base font-semibold hover:bg-gray-100 transition duration-300 sm:py-2 sm:px-6 md:py-3 md:px-8 lg:py-4 lg:px-10"
                href="/signup"
                data-discover="true"
              >
                Sign Up Now
              </a>
              <a
                className="bg-transparent border-2 border-white py-2 px-6 rounded-full text-base font-semibold text-white hover:bg-white hover:text-blue-700 transition duration-300 sm:py-2 sm:px-6 md:py-3 md:px-8 lg:py-4 lg:px-10"
                href="/login"
                data-discover="true"
              >
                Log In
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
export default Homepage
