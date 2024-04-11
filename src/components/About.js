import React from 'react'
import mobile from '../assets/mobile.jpg'
import webdesign from '../assets/webdesign.jpg'
import allapps from '../assets/allapps.jpg'

const About = () => {
  return (
    <div className='h-screen flex flex-1 w-full items-center justify-center' >
        <div className='flex gap-5 mt-2 ' style={{width:'95%',alignSelf:'center', justifySelf:'center', height:"95%"}}>
            <div className='flex gap-5 bg-white pb-5 shadow-lg'>
                <div className='hidden lg:flex sm:flex-col relative w-1/2 h-full my-10'>
                <img src={allapps} alt='' className='w-1/2 rounded-lg ml-10' />
                <img src={mobile} alt='' className='w-1/2 h-60 rounded-lg absolute top-40 right-0' />
                <img src={webdesign} alt='' className='w-1/2 rounded-lg absolute bottom-10 left-5' />
                </div>
                <div className='relative justify-center flex w-full sm:w-1/2 md:w-full h-full my-10'>
  <div className='flex flex-col w-full'>
    <p className='text-4xl sm:text-5xl text-center leading-10 sm:leading-12 font-md font-outfit'>About Us</p>
    <p className='text-lg sm:text-xl text-center font-outfit leading-7 px-4 mt-10'>
      Welcome to Inicus Innovations, where innovation meets creativity
      to shape the digital landscape. We are a dynamic team of
      visionaries, designers, and developers dedicated to transforming
      ideas into impactful mobile and web applications, as well 
      as fostering distinctive branding strategies that resonate with audiences worldwide.
    </p>
    <p className='hidden sm:flex sm:flex-col text-lg sm:text-xl text-center font-outfit leading-7 px-4 mt-5'>
      Our mission is clear: to empower businesses and individuals with
      cutting-edge digital solutions that drive growth and enhance 
      user experiences. We believe in leveraging technology to simplify 
      complexities and unlock new possibilities, all while staying true to our 
      core values of integrity, collaboration, and excellence.
    </p>
  </div>
</div>


            </div>  
        </div>
    </div>
  )
}

export default About