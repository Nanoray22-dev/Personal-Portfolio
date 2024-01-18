import React from 'react';
import css from './Hero.module.scss';
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../../../utils/motion';
import personal1 from '../../../../public/Person1.png';
import certified from '../../../../public/certifi.png'
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
    <motion.div 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount:0.25}}

    className={`innerWidth ${css.container}`}>

    <div className={css.upperElements}>
        <motion.span 
        variants={fadeIn ("right", "tween", 0.2, 1)}
        className='primaryText'>
            Hey There, <br /> I'm Raysell
            </motion.span>
            <motion.span 
            variants={fadeIn("left", "tween", 0.4,1)}
            className='secondaryText'>
            I Build beatiful simple
            <br />
            things, And I love what i do
            </motion.span>
    </div>

    {/* person image */}
    <motion.div 
    variants={fadeIn("up","tween", 0.3,1)}
    className={css.person}>
        <motion.img 
        variants={slideIn("up","tween", 0.5,1.3)}
        src={personal1}   alt="" />
        
    </motion.div>

    {/* email */}
    <a className={css.email} href="mailto:raysellconcepcionpaulino@gmail.com">
            raysellconcepcionpaulino@gmail.com
    </a>

    <div className={css.lowerElements}>
        <motion.div 
       variants={fadeIn ("right", "tween", 0.2, 1)}
        className={css.experience}>
            <div className='primaryText'>7</div>
            <div className='secondaryText'>
                <div>months</div>
                <div>Experiencie</div>
            </div>
        </motion.div>
        <motion.div 
         variants={fadeIn("left", "tween", 0.4,1)}
        className={css.certificate}>
           <a href={certified} target="_blank" rel="noopener noreferrer"> 
           <img src={certified} alt="" /></a>
            <span>CERTIFIED PROFFESIONAL</span>
            <span>Developer Full-Stack</span>
            </motion.div>
        </div>
    </motion.div>
    </section>
  );
}

export default Hero;
