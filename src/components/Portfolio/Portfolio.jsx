import React from 'react'
import css from './Portfolio.module.scss'
import { fadeIn, staggerChildren } from '../../utils/motion'
import { motion } from 'framer-motion'
import show from "../../../public/Tips.png";
import Case from "../../../public/Case.png";
import showCase from "../../../public/showCase.png"
import PHP from '../../../public/PHP.png'
import todo from '../../../public/TO-DO.png'
import windbnb from '../../../public/Windbnd.png'
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
            src={show} alt="project" />
            <motion.img 
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src={Case} alt="project" />
            <motion.img 
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src={showCase} alt="project" />
            
        </div>
        <div className={`flexCenter ${css.showCase}`}>
            <motion.img 
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src={PHP} alt="project" />
            <motion.img 
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src={todo} alt="project" />
            {/* <motion.img 
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src={windbnb} alt="project" /> */}
            
        </div>
    </div>
   </motion.section>
  );
};

export default Portfolio