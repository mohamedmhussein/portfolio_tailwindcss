
'use client'
import './globals.css'
import ProjectsBtn from '@/components/ProjectsBtn'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { usePathname } from 'next/navigation'
import Avatar from '@/components/Avatar'
import ParticlesContainer from '@/components/ParticlesContainer'
export default function Page() {
  const title = '<Software Developer />'
  return (
    
    <div className='bg-primary/60 h-full absolute w-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/60 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-[10vh] xl:text-left container mx-auto h-full'>
          <motion.h1 
          variants = {fadeIn('down', 0.2)} 
          initial='hidden' 
          animate ='show' 
          exit='hidden' 
          className='h1'>
            Transforming ideas <br /> Into {' '}
            <span className='text-accent'>Digital Reality</span>
          </motion.h1>
          <motion.p 
          variants = {fadeIn('down', 0.3)} 
          initial='hidden' 
          animate ='show' 
          exit='hidden' 
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            Hi there! This is Mohammad, a full-stack <span className='text-accent font-semibold'>{title}</span> who is based in London, Ontario and this is my official portfolio website to showcase my web development activities.
          </motion.p>
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div 
          variants = {fadeIn('down', 0.4)} 
          initial='hidden' 
          animate ='show' 
          exit='hidden' 
          className='hidden xl:flex'>
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'> 
        </div>
        <ParticlesContainer />
        <motion.div
        variants = {fadeIn('up', 0.5)} 
        initial='hidden' 
        animate ='show' 
        exit='hidden'
        transition={{duration: 1, ease: 'easeInOut'}}
        className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}
