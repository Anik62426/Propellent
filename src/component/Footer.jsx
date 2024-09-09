import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-5 gap-4 w-[98%] h-[14rem] pl-20  mb-20 border-t-2 pt-14'>
        <div className='flex'>
            <a href='./'><img className='rounded-full' src={"https://res.cloudinary.com/dcfcgilpx/image/upload/v1725833905/cvtk8ybmr8jovbkjlcns.webp"}/></a>
            <a className='pt-1.5 pl-2 font-semibold text-lg' href='./'> Parrot Api</a>
        </div>
        <div className='font-sans text-lg '>
          <p className='text-xl font-bold pb-4'>Company</p>
          <p className='pb-1 font-semibold'>About us</p>
          <p className='pb-1 font-semibold'>Contact</p>
          <p className='pb-1 font-semibold'>Support</p>
          <p className='pb-1 font-semibold'>Terms</p>
        </div>
        <div className='font-sans text-lg'>
            <p className='text-xl font-bold pb-4'>Ai voice Generator</p>
            <p className='pb-1 font-semibold'>Joe Biden</p>
            <p className='pb-1 font-semibold'>Donald Trump</p>
            <p className='pb-1 font-semibold'>Andrew Tate</p>
            <p className='pb-1 font-semibold'>Joe Rogan</p>
            <p className='pb-1 font-semibold'>Barack Obama</p>
        </div>
        <div className='font-sans text-lg'>
            <p className='text-xl font-bold pb-4'>Popular AI Voices</p>
            <p className='pb-1 font-semibold'>Elon Musk</p>
            <p className='pb-1 font-semibold'>Mark Zuckerberg</p>
            <p className='pb-1 font-semibold'>Ben Shapiro</p>
             <p className='pb-1 font-semibold'>Mr Beast</p>
             <p className='pb-1 font-semibold'>Mia Khalifa</p>
        </div>
        <div className='font-sans text-lg'>
            <p className='text-xl font-bold pb-4'>Install App</p>
            <a href='https://apps.apple.com/us/app/parrot-voice-generator-ai-app/id6443546763' target='blank'> <img className='mt-4 mr-6 w-[12rem]' src={"https://www.tryparrotai.com/_next/image?url=%2Fapp-store-btn.webp&w=640&q=75"}></img></a>
            <a href='https://play.google.com/store/apps/details?id=com.parrot.ai_voice_generator_changer&referrer=utm_source%3Dwebsite%26utm_medium%3Dwebsite-footer' target='blank'><img className='mt-4 mr-6 w-[12rem]' src={"https://www.tryparrotai.com/_next/image?url=%2FdownloadGooglePlay.png&w=640&q=75"}/>
            </a>
       </div>
    </div>
  )
}

export default Footer