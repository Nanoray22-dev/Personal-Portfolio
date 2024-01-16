import React from 'react'
import css from './Portfolio.module.scss'
import { fadeIn, staggerChildren } from '../../utils/motion'
import { motion } from 'framer-motion'
const Portfolio = () => {
  return (
   <motion.section 
   variants={staggerChildren}
   initial="hidden"
   whileInView="show"
   viewport={{once: false, amount:0.25}}
   className={`paddings ${css.wrapper}`}>
    <a className="anchor" id="portfolio"></a>
    <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
            <div>
                <span className='primaryText'>
                My Latest Works
                </span>
                <p style={{marginTop: "10px"}}>
                Perfect Solution for digital experience
                </p>
            </div>
            <span className="secondaryText">
                Explore More Works
            </span>
        </div>
        {/* images */}
        <div className={`flexCenter ${css.showCase}`}>
            <motion.img 
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="../../../public/show.png" alt="project" />
            <motion.img 
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="../../../public/Case.png" alt="project" />
            <motion.img 
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="../../../public/showCase.png" alt="project" />
        </div>
    </div>
   </motion.section>
  );
};

export default Portfolio