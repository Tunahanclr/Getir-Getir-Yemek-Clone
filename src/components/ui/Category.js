import React from 'react'

function Category({category:{title,id,image}}) {
  return (
    <a href="" className='mt-4 flex flex-col m-4 hover:bg-purple-100 items-center text-center'>
             <img className='gap-5 flex w-14 ' src={image} alt="" />
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap ">{title}</span>
    </a>
        
   
  )
}

export default Category