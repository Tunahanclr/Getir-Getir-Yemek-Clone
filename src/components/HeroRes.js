import { useState,useEffect } from "react";
import React from 'react'
import ReactFlagsSelect from "react-flags-select";

export default function HeroRes() {
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
      autoplaySpeed: 3000,
      cssEase: ""
    };
  return (
    <div className='md:hidden'>
        <h1 className="text-center text-primary-brandColor font-semibold ">Getir</h1>
         <div className='container flex   items-center  justify-center    '>
          <div className='bg-white w-full h-full flex justify-center items-center flex-col  rounded-lg'>
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
    </div>
  )
}
