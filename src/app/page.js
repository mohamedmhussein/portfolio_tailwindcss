
'use client'
import './globals.css'
import ProjectsBtn from '@/components/ProjectsBtn'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'
export default function Page() {
  const title = '<Software Developer />'
  return (
    <div className='bg-primary/60 h-full' >
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/60 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left container mx-auto'>
          <motion.h1 variants = {fadeIn('down', 0.2)} initial='hidden' animate = 'show' exit='hidden' className='h1'>
            Transforming ideas <br /> Into {' '}
            <span className='text-accent'>Digital Reality</span>
          </motion.h1>
          <motion.p variants = {fadeIn('down', 0.3)} initial='hidden' animate = 'show' exit='hidden' className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            I am Mohammad, a full-stack {title} who is based in London, Ontario and this is my official portfolio website to showcase my web development activities.
          </motion.p>
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div variants = {fadeIn('down', 0.4)} initial='hidden' animate = 'show' exit='hidden' className='hidden xl:flex'>
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
    </div>
  )
}
