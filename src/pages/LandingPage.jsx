import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../assets/unnamed.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaLaptopCode } from 'react-icons/fa'
import { MdStyle } from 'react-icons/md'
import { TbComponents, TbSparkles } from 'react-icons/tb'
import { motion } from 'framer-motion'

const LandingPage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between -mt-10 bg-gradient-to-r from-pink-50 via-rose-50 to-violet-50 px-10 md:px-16 py-12 gap-10 md:gap-0">
        
        {/* LEFT: Text Section */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left md:ml-10 lg:ml-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-stone-800 mb-4" style={{fontFamily: 'satoshi-black'}}>
            Hi, I’m Roseanne Faith Frankie
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-stone-800 mb-6" style={{fontFamily: 'satoshi-medium'}}>
            Aspiring
            <span className="ml-2 block sm:inline">
              <TypeAnimation
                sequence={[
                  'UI/UX Designer',
                  2000,
                  'Graphic Designer',
                  2000,
                  'Video Editor',
                  2000,
                  '',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl sm:text-2xl md:text-3xl text-pink-600 font-bold"
              />
            </span>
          </p>
          
          <p 
            className="mt-4 text-lg text-stone-700 italic" 
            style={{ fontFamily: 'satoshi-medium' }}
          >
            Designing functional experiences people enjoy.
          </p>

          <Link 
            to="/projects"
            className="mt-6 inline-block text-pink-500 tracking-wide hover:underline underline-offset-4 decoration-2 transition-all"
            style={{ fontFamily: 'satoshi-bold' }}
          >
            View my work →
          </Link>

        </motion.div>

        {/* RIGHT: Image Section */}
        <motion.div 
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profileImg}
            alt="Roseanne Faith Frankie"
            className="w-80 h-auto object-cover drop-shadow-[15px_15px_0px_black] rounded-lg md:ml-8"
          />
        </motion.div>
      </section>

      {/* ABOUT + HIGHLIGHTS */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20 mt-10 mb-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl text-stone-800 mb-4" style={{fontFamily: 'satoshi-bold'}}>About Me</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed" style={{fontFamily: 'satoshi-medium'}}>
            I’m a graphics designer focused on creating clean, expressive, and visually engaging designs that communicate
            ideas clearly and leave a lasting impression. I blend creativity with thoughtful composition, typography, and visual
            storytelling to turn concepts into polished design work.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[ 
            { icon: <FaLaptopCode size={70} />, title: 'User Experience', desc: 'Designing interfaces that feel intuitive, smooth, and easy to use.' },
            { icon: <MdStyle size={70} />, title: 'Visual Design', desc: 'Crafting modern layouts with thoughtful typography, color, and composition.' },
            { icon: <TbComponents size={70} />, title: 'Interactive UI', desc: 'Turning ideas into responsive, engaging experiences that work across devices.' },
            { icon: <TbSparkles size={70} />, title: 'Motion Design', desc: 'Adding subtle movement and visual rhythm to make experiences feel polished and memorable.' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-pink-50 border-2 border-stone-900 p-6 rounded-xl shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-black mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-base sm:text-lg" style={{fontFamily: 'satoshi-bold'}}>{item.title}</h3>
              <p className="text-zinc-600 mt-2 text-xs sm:text-sm" style={{fontFamily: 'satoshi-medium'}}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default LandingPage
