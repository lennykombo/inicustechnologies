import React from 'react'
import './Background.css'
import video1 from '../assets/video1.mp4'
//import video2 from '../assets/video2.mp4'
import image1 from '../assets/applic.jpg'
import image2 from '../assets/robot.jpg'
import image3 from '../assets/plan.jpg'
//import image4 from '../assets/mobile.jpg'

const Background = ({ playstatus, herocount}) => {
 
    if(playstatus){
        return (
            <video className='h-screen w-full float-left top-0 left-0 right-0 bottom-0 p-0 object-cover z-10 fade-in' autoPlay loop muted>
                <source src={video1} type='video/mp4'/>
            </video>
        );
    }else if(herocount ===0){
        return <img src={image1} alt='' className='h-screen w-full float-left top-0 left-0 right-0 bottom-0 p-0 object-cover -z-10 fade-in' />
    }else if(herocount ===1){
        return <img src={image2} alt='' className='h-screen w-full float-left top-0 left-0 right-0 bottom-0 p-0 object-cover -z-10 fade-in' />
    }else if(herocount ===2){
        return <img src={image3} alt='' className='h-screen w-full float-left top-0 left-0 right-0 bottom-0 p-0 object-cover -z-10 fade-in' />
    }/*else if(herocount ===3){
        return <img src={image4} alt='' className='h-screen w-full float-left top-0 left-0 right-0 bottom-0  p-0 object-cover -z-10 fade-in' />
    }*/
}

export default Background
