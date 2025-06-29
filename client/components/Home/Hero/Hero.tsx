'use client'
import React from 'react'
import { ArrowRight, Star, Sparkles, Zap } from 'lucide-react'
import AutoScroller from '../InfinityScroll/AutoScroller'

const Hero = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50">
        
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-spin-slow transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-bounce delay-300">
          <div className="w-4 h-4 bg-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-32 animate-bounce delay-700">
          <Sparkles className="w-6 h-6 text-purple-400 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce delay-500">
          <Zap className="w-5 h-5 text-blue-400 opacity-60" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          
          {/* Badge */}
          <div className="mb-8 inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-purple-200 text-purple-700 text-sm font-medium rounded shadow-md hover:scale-105 transition-transform duration-300">
            <Star className="w-4 h-4 mr-2" />
            Trusted by 20+ Clients
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
            <span className="text-gray-900">We</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
              Supercharge
            </span>
            <br />
            <span className="text-gray-900">Your Business</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light mb-12">
            Transform your digital presence with our marketing, design, and tech solutions.
            <br className="hidden sm:block" />
            We’re your partner for <span className="font-medium text-gray-800">growth and innovation.</span>
          </p>

          {/* CTA Button */}
          <button
            type="button"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            Book a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* AutoScroller Below Hero */}
      <div className=" -mt-18 relative z-10">
        <AutoScroller />
      </div>
    </div>
  )
}

export default Hero
