import React from 'react'
import video3 from '../assets/video3.mp4'

const Quote = () => {
  return (
    <div className='h-screen items-center relative'>
        <div className='h-full absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50'></div>
          <video className='h-screen w-full float-left top-0 left-0 right-0 bottom-0 p-0 object-cover z-10 fade-in' autoPlay loop muted>
                <source src={video3} type='video/mp4'/>
               
            </video>
            <div className='absolute top-28 left-10 flex flex-col p-4' style={{ width:"90%" }}>
                <div><p className='lg:text-5xl w-4/6 mb-10 font-outfit text-white text-center sm:text-lg'>We are more than happy to work with you</p></div>
                <div className='flex justify-between'>
                    <p className='w-3/4 leading-8 text-white font-outfit'>Every project at Innicus innovations begins with a deep dive into understanding our clients' goals, challenges, and target audience. Our iterative approach ensures transparency, flexibility, and continuous improvement throughout the project lifecycle.</p>
                    <div className="mt-6">
              <button type="submit" className="inline-block py-5 px-6 text-lg leading-6 font-semibold text-white bg-yellow-600 hover:bg-yellow-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">ASK FOR A QUOTATION</button>
            </div>
                </div>
            </div>
    </div>
  )
}

export default Quote