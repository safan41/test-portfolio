import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { me } from "../assets"
import { FaInstagram, FaGithub, FaTwitter, FaRegEnvelope } from 'react-icons/fa';


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#2ca30b]'>Safwan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I make things sometimes. <br className='xs:block hidden' />
            CCHS &lsquo;24
          </p>
          <div className="pt-5 grid grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/safan25641/'><FaInstagram size={48} className="fill-slate-400 hover:fill-slate-500" /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/safan41'><FaTwitter size={48} className="fill-slate-400 hover:fill-slate-500" /></a>
            <a target="_blank" rel="noopener noreferrer" href='mailto:safan25641@gmail.com'><FaRegEnvelope size={48} className="fill-slate-400 hover:fill-slate-500" /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/safan41'><FaGithub size={48} className="fill-slate-400 hover:fill-slate-500" /></a>
          </div>
        </div>
        
        <img 
          src={me}
          alt="Photo of Me"
          className="lg:w-72 lg:h-72 md:w-64 md:h-64 xs:w-32 xs:h-32 rounded-full" 
          />  
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
