import React from 'react'
import SignIn from '../component/SignIn'
import Upcoming from '../component/Upcoming'
import Infogood from '../component/Infogood'
import Faqs from './Faqs'
import Plans from './Plan&Price'
import Features from './Features'
import Testimonials from './Testimonials'

import VideoComponent from '../component/VideoComponent'


const Home = () => {
  return (
    <div>
      <SignIn/>
      <Features/>
      <Testimonials/>
      <Faqs/>
      <Plans/>
      {/* <VideoComponent/> */}
    

    </div>
    
  )
}

export default Home