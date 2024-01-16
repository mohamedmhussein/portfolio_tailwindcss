'use client'
import { Sora } from 'next/font/google'
import './globals.css'
import TopLeftImg from '../components/TopLeftImg'
import Nav from '../components/Nav'
import Header from '../components/Header'
import { AnimatePresence, motion } from 'framer-motion'
import Transition from '@/components/Transition'
import { usePathname } from 'next/navigation'

// font settings
const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800',] })




export default function RootLayout({ children }) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body className={sora.className}>
          <div className= {`page bg-site text-white bg-cover bg-no-repeat relative ${sora.variable} font-sora`} >
            <AnimatePresence mode='wait'>
              <motion.div className='' key={pathname}>
                <Transition />
                <TopLeftImg />
                <Nav />
                <Header />
              </motion.div>
              {children}
            </AnimatePresence>
          </div>
      </body>
    </html>
  )
}
