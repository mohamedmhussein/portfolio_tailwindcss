'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const About = () => {
  const pathname = usePathname()
  return (
    <div key={pathname}>About</div>
  )
}

export default About