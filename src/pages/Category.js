import React, { useState,useEffect } from 'react'
import Slider from "react-slick";
import GYcategories from "../api/GYcategories.json"
import Category from '../components/ui/CategoryY'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'


function NextBtn(props) {
  const {className,style,onClick}=props;
  return (
    <button className={`${className} !text-primary-brandColor`} style={style} onClick={onClick }><AiOutlineArrowRight size={22}/></button>
  )
}
function PrevBtn({ className, style, onClick }) {
  return (
      <button className={`${className}!text-brand-color`} onClick={onClick}>
          <AiOutlineArrowLeft size={22} />
      </button>
  )
}


function Product() {
  const [categories,setCategories]=useState([])

  useEffect(() => {
      setCategories(GYcategories)

  }, [])
  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow:8,
      slidesToScroll: 2,
      nextArrow:<NextBtn/>,
      prevBtn: <PrevBtn/>,
  };

  return (
    
    <div className='container bg-white mt-5'>
    <h2 className='font-semibold text-sm'>Mutfaklar</h2>
      <div className='mt-4'>
      <Slider {...settings}>
      {categories && categories.map((category,index)=><Category key={index} category={category}/>)}
      </Slider>

      </div>
   
    
  </div>
  )
}

export default Product