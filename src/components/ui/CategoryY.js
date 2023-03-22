import React from 'react'
import Slider from "react-slick";

function CategoryY({category:{title,image,id}}) {
    
  return (
    <div>
            <a href="" className=' rounded-xl flex flex-col m-1 flex-wrap hover:bg-purple-100 transition-all duration-75 justify-center '>
             <img className='gap-5 flex w-28 sm:w-32 ' src={image} alt="" />
            <span className='text-center text-xs sm:text-base whitespace-nowrap'>{title}</span>
    </a>
        
    </div>
  )
}

export default CategoryY