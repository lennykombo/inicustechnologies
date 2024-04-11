import React from 'react'

const Solutioncards = ({ title, content, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        </div>
       
    <img className="w-full" src={imageUrl} alt={title} />
    <div className="px-6 py-4">
      
      <p className="text-gray-700 text-base">{content}</p>
    </div>
  </div>
  )
}

export default Solutioncards

