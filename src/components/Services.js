import React from 'react'
import Solutioncards from './Solutioncards'
import mobile from '../assets/mobile.jpg'
import webdesign from '../assets/webdesign.jpg'
import allapps from '../assets/allapps.jpg'
import socials from '../assets/socials.jpg'
import web from '../assets/web.jpg'

const Projects = () => {

    const carddata = [
        {
            'title':"Mobile Applications",
            'content':"From iOS to Android and everything in between, we specialize in developing intuitive and feature-rich mobile applications that captivate users and drive engagement...",
            'imageUrl':mobile
        },
        {
            'title':"Web Applications",
            'content':"Whether it's a sleek e-commerce platform or a robust enterprise solution, we have the expertise to build web applications that are scalable, secure, and seamlessly integrated with your existing systems...",
            'imageUrl':webdesign
        },
        {
            'title':"System Development",
            'content':"we specialize in crafting bespoke systems designed specifically for your organization. We collaborate closely with you to understand your requirements and challenges, ensuring we deliver a solution that streamlines your processes and boosts efficiency.",
            'imageUrl': allapps
        },
        {
            'title':"Branding & Identity",
            'content':"Your brand is more than just a logo – it's the essence of your identity. We work closely with clients to develop compelling brand strategies, logos, and visual assets that communicate their unique story and values...",
            'imageUrl': web
        },
        {
            'title':"Social media Marketing",
            'content':" we are experts in crafting dynamic social media strategies tailored to your brand's unique voice and objectives. Whether you're looking to increase brand awareness, drive website traffic, or boost sales, we've got you covered.",
            'imageUrl': socials
        },
    ]

  return (
    <div className='w-full'>
        <div className='m-4 h-full items-center justify-center'>
            <p className='text-center text-4xl font-semibold font-outfit'>Services</p>
            <div className="flex flex-wrap justify-center mt-2">
                {carddata.map((card, index) => (
                    <Solutioncards
                        key={index}
                        title={card.title}
                        content={card.content}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects
