import React from 'react'
import Slider from "react-slick";

function CategoryY({category:{title,image,id}}) {
    
  return (
    <div>
            <a href="" className='mt-4 flex flex-col m-1 hover:bg-purple-100 transition-all duration-75 justify-center '>
             <img className='gap-5 flex w-32 ' src={image} alt="" />
            <span className='text-center'>{title}</span>
    </a>
        
    </div>
  )
}

export default CategoryY