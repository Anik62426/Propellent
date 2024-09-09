import React from 'react'
import SignIn from '../component/SignIn'
import Upcoming from '../component/Upcoming'
import Infogood from '../component/Infogood'
import Faqs from './Faqs'
import Plans from './Plan&Price'
import Features from './Features'
const Home = () => {
  return (
    <div>
      <SignIn/>
      <Features/>
      <Faqs/>
      <Plans/>
      
    

    </div>
    
  )
}

export default Home