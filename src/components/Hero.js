import Product from './Categories'
import Slider from "react-slick";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Categories from './Categories';
import Campaigns from './Campaigns';

export default function Hero() {
  const [selected, setSelected] = useState('TR');
  
  const phones={
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15',
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };
  return (
    <div className='relative before:bg-gradient-to-r before:from-brandColor before:to-transparent before:absolute  before:inset-0  before:h-[500px] before:z-10'>
        <Slider {...settings}>
          <div className=''>
            <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" alt="" />
          </div>
          <div>
            <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" alt="" />
          </div>
          <div>
            <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="" />
          </div>
          
    
        </Slider>
        <div className='container flex justify-between items-center left-1/2 -translate-x-1/2 mt-32 absolute top-0 z-10 '>
          <div className=' flex flex-col'>
            <img className='w-44 ' src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
            <h2 className='text-3xl text-white mt-9  w-80'>Dakikalar içinde kapınızda</h2>
          </div>
          <div className='bg-white w-96 h-52 flex justify-center items-center flex-col  rounded-lg'>
            <h3 className='text-primary-brandColor text-xl text-center mt-4'>Giriş yap veya kayıt ol</h3>
              <div className='flex  justify-center mt-4 space-x-6'>
             <ReactFlagsSelect
  countries={Object.keys(phones)}
  customLabels={phones}
  placeholder="+90"
  onSelect={code => setSelected(code)}
  selected={selected}
 className='w-32'/>
            <input type="text" placeholder='Telefon numarası girin'  className=' border-2 placeholder:text-sm  border-border-number-color transition-all duration-75' />
              </div>
              <button className=' hover:bg-brandColor hover:text-yellow-400  text-sm text-primary-brandColor font-semibold flex justify-center mt-3 text-center bg-yellow-400  w-80 h-11 rounded-md items-center'>Telefon numarası ile devam et</button>
          </div>
        </div>
      <Categories/>
      <Campaigns/>
    </div>
  )
}
