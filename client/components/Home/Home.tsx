import React from 'react'
import Hero from './Hero/Hero'
import Service from './Services/Service'
import About from './AboutUs/About'
import Team from './Team/Team'
import ContactUs from './ContactUs/Contact'

const Home = () => {
  return (
    <div  className='overflow-hidden'>
        <Hero/>
        <About/>
        <Service/>
        <Team/>
        <ContactUs/>
    </div>
  )
}

export default Home