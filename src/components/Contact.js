import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { FaFacebook, FaTiktok } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   const handlesubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICEID;
    const templateId = process.env.REACT_APP_TEMPLATEID;
    const publicKey = process.env.REACT_APP_PUBLICKEY;

    const templateParams = {
        from_name: name ,
        from_email: email,
        to_name: 'inicus',
        message: message,
    }

    //email send library
    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
        console.log('Email sent successfully', response)
        setName('');
        setEmail('');
        setMessage('');
    }).catch((error) => {
        console.log('error sending email', error);
    });
   }

  return (
    <div className='h-screen flex flex-col w-full items-center justify-center'>
      <div className='flex flex-col gap-5 mt-2 bg-gray-100 items-center' style={{width:'95%',alignSelf:'center', justifySelf:'center', height:"95%"}}>
        <div className='mt-8 text-4xl font-outfit'>contact us</div>
        <div className='flex flex-col sm:flex-row w-full items-center gap-4'>
  <div className='w-full sm:w-1/2 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
    <div>
    <p className='text-center mb-5'> Let's embark on this journey together and create something extraordinary. </p>
      <p className='text-4xl font-outfit font-semibold text-center'>For more information reach out to us</p>
      <div className='flex gap-5 justify-center mt-3'>
        <div>
          <p>Tell: </p>
        </div>
        <div className='flex flex-col'>
          <div>
            +254 793 55 62 35
          </div>
          <div>
            +254 103 43 12 53
          </div>
          <div>
            +254 728 40 11 32
          </div>
        </div>
      </div>
     
      <div className='flex items-center gap-4 justify-center mt-6'>
        <div className='cursor-pointer p-2 bg-white rounded-full'>
          <FaFacebook size={20} />
        </div>
        <div className='cursor-pointer p-2 bg-white rounded-full'>
          <FaInstagramSquare size={20} />
        </div>
        <div className='cursor-pointer p-2 bg-white rounded-full'>
          <MdEmail size={20} />
        </div>
        <div className='cursor-pointer p-2 bg-white rounded-full'>
          <FaTiktok size={20} />
        </div>
      </div>
    </div>
  </div>
  <div className="bg-gray-100 w-full sm:w-1/2 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
    <div className="mt-12">
      <form onSubmit={handlesubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 p-3 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-3 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" className="mt-1 p-3 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div className="mt-6">
          <button type="submit" className="inline-block py-3 px-6 text-lg leading-6 font-semibold text-white bg-yellow-600 hover:bg-yellow-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</div>

        </div>
    </div>
  )
}

export default Contact