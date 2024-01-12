'use client'
import React from 'react'
import { AnimatePresence, motion} from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'

const Transition = () => {
    const pathname = usePathname()
    const transitionVariants = {
        initial: {
            x: '100%',
            width: '100%'
        },
        animate: {
            x: '0%',
            width: '0%'
        },
        exit: {
            x: ['0%', '100%'],
            width: ['0%', '100%']
        }
    }
  return (
    <AnimatePresence>
        <motion.div className = 'h-full' key = {pathname}>
            <motion.div className='fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-[#2e2257]' variants = {transitionVariants} initial = 'initial' animate = 'animate' exit = 'exit' transition = {{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}>1</motion.div>
            <div>2</div>
            <div>3</div>
        </motion.div>
    </AnimatePresence>
  )
}

export default Transition