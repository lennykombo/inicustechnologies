import React from 'react'
import './Hero.css'
import arrow from '../assets/arrow_btn.png'
import play from '../assets/play_icon.png'
import pause from '../assets/pause_icon.png'

const Hero = ({ heroData, setPlaystatus, herocount, setHerocount, playstatus }) => {

  return (
    <div className='absolute inset-x-20 bottom-1 mb-5 text-white'>
        <div>
            <p className='text-5xl font-bold leading-10 mb-10'>{heroData.text1}</p>
            <p className='max-w-96 text-xl font-outfit leading-7'>{heroData.text2}</p>
        </div>
        <div className='flex items-center gap-3 mb-5 py-2 px-2 border w-1/5 md:w-1/2 mt-4 cursor-pointer justify-between bg-white rounded-full'>
            <p className='text-black text-md font-sm'>Explore the features</p>
            <img src={arrow} alt='' style={{width:"30px"}} />
        </div>
        <div className='flex justify-between'>
        <ul className='flex list-none gap-4 items-center'>
          <li onClick={() => setHerocount(0)} className={herocount === 0 ? "hero-dot orange" : " hero-dot"}></li>
          <li onClick={() => setHerocount(1)} className={herocount === 1 ? " hero-dot orange" : " hero-dot"}></li>
          <li onClick={() => setHerocount(2)} className={herocount === 2 ? " hero-dot orange" : " hero-dot"}></li>
        </ul>
        <div className='flex items-center gap-3 cursor-pointer'>
            <img onClick={()=> setPlaystatus(!playstatus)} src={playstatus?pause:play} alt='' style={{width:"40px"}} />
            <p className='font-sm text-white'>See Video</p>
        </div>
        </div>
    </div>
  )
}

export default Hero
