import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { FaMobileRetro } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";

const Projects = () => {
  return (
    <div className='min-h-screen px-6 py-6 flex flex-col items-center bg-black'>
      <p className='text-center text-4xl font-semibold font-outfit text-white mt-5'>Projects</p>
      <div className='flex flex-col md:flex-col md:w-full justify-center md:justify-between items-center px-6 py-4 mt-4'>
        <div className='w-full md:w-1/2 border-dotted border-2 flex flex-col p-5 gap-2 rounded-xl border-white m-5 items-center'>
          <div><CgWebsite color='white' size={60} /></div>
          <div className="font-bold text-xl mb-2 text-white">Websites</div>
          <div className="px-6 py-4">
            <p className="text-gray-600 text-base text-center">We thrive on pushing the boundaries of what's possible, constantly seeking new ways to innovate </p>
          </div>
          <button className=" bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">
            View Projects
          </button>
        </div>
        <div className='w-full md:w-1/2 border-dotted border-2 flex flex-col p-5 gap-2 rounded-xl border-white m-5 items-center'>
          <div><FaMobileRetro color='white' size={60} /></div>
          <div className="font-bold text-xl mb-2 text-white">Mobile Applications</div>
          <div className="px-6 py-4">
            <p className="text-gray-600 text-base text-center">With a wealth of experience across various technologies and platforms, our developers are adept at turning ideas into functional</p>
          </div>
          <button className=" bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">
            View Projects
          </button>
        </div>
        <div className='w-full md:w-1/2 border-dotted border-2 flex flex-col p-5 gap-2 rounded-xl border-white m-5 items-center'>
          <div><GrSystem color='white' size={60} /></div>
          <div className="font-bold text-xl mb-2 text-white">Web Systems</div>
          <div className="px-6 py-4">
            <p className="text-gray-600 text-base text-center">Understanding the needs and preferences of end-users is at the heart of everything we do.We prioritizing user experience </p>
          </div>
          <button className=" bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
