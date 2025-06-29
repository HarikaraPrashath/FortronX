"use client"
import { Code2, Figma, Coffee, Database, Globe } from "lucide-react"

const techStack = [
  { name: "React", icon: Code2, color: "text-cyan-400" },
  { name: "Next.js", icon: Globe, color: "text-black" },
  { name: "Java", icon: Coffee, color: "text-red-500" },
  { name: "Python", icon: Database, color: "text-yellow-500" },
  { name: "Figma", icon: Figma, color: "text-pink-500" },
  { name: "TypeScript", icon: Code2, color: "text-blue-500" },
]

const AutoScroller = () => {
  return (
    <div className="relative overflow-hidden w-full py-8 bg-gradient-to-r from-gray-50 to-white">
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="flex animate-scroll">
        {/* First set */}
        {techStack.map((tech, index) => {
          const IconComponent = tech.icon
          return (
            <div
              key={`first-${index}`}
              className="flex items-center space-x-3 min-w-max px-8 text-gray-800 hover:text-gray-900 transition-colors group"
            >
              <div className={`text-3xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="w-8 h-8" />
              </div>
              <span className="whitespace-nowrap font-medium text-lg">{tech.name}</span>
            </div>
          )
        })}

        {/* Second set for seamless loop */}
        {techStack.map((tech, index) => {
          const IconComponent = tech.icon
          return (
            <div
              key={`second-${index}`}
              className="flex items-center space-x-3 min-w-max px-8 text-gray-800 hover:text-gray-900 transition-colors group"
            >
              <div className={`text-3xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="w-8 h-8" />
              </div>
              <span className="whitespace-nowrap font-medium text-lg">{tech.name}</span>
            </div>
          )
        })}

        {/* Third set for extra smoothness */}
        {techStack.map((tech, index) => {
          const IconComponent = tech.icon
          return (
            <div
              key={`third-${index}`}
              className="flex items-center space-x-3 min-w-max px-8 text-gray-800 hover:text-gray-900 transition-colors group"
            >
              <div className={`text-3xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="w-8 h-8" />
              </div>
              <span className="whitespace-nowrap font-medium text-lg">{tech.name}</span>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default AutoScroller
