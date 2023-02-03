import React,{useState} from 'react'
import hamburger from '../assets/Hamburger.mp4'
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import YemekCategory from './Category';
import Feature from './Feature';


export default function Getiryemekhero() {
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
    <>
<div className='relative'>
       <Slider
        {...settings}>
          <div className=''>
          <video className='w-full h-[600px] object-cover' src={hamburger} autoPlay loop muted >
        </video>
          </div>
        </Slider>
        <div className='container flex justify-end items-center left-1/2 -translate-x-1/2 mt-32 absolute top-0 z-10 '>
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
    </div>
    <YemekCategory/>
    <Feature/>
    </>
  )
}
