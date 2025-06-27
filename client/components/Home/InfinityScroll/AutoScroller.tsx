'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaJava, FaPython, FaFigma } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript } from 'react-icons/si'

const techStack = [
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
  { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
]

const AutoScroller = () => {
  const repeatedStack = [...techStack, ...techStack, ...techStack] // Triple for smooth looping

  return (
    <div className="relative overflow-hidden w-full  py-4">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-33.3333%'] }}
        transition={{
          duration: 15,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {/* Duplicated content to avoid gap */}
        {repeatedStack.map((tech, index) => (
          <div key={index} className="flex items-center space-x-1 min-w-max px-4 text-black text-base">
            <div className="text-2xl">{tech.icon}</div>
            <span className="whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AutoScroller
