import React from 'react'
import Footer from './Footer'

function Feature() {
  return (
    <div className='container mx-auto  mt-20    '>
    <div className='flex items-center flex-wrap justify-center gap-10'>
        <div className='w-96 h-80 flex flex-col justify-center items-center text-center bg-white rounded-lg'>
            <img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" alt="" />
            <h2 className=' text-xl text-primary-brandColor w-80 mt-10 font-semibold'>Her siparişinize bir kampanya
</h2>
<p className='mt-2 opacity-60 font-semibold text-sm w-72'>Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.</p>
        </div>
        <div className='w-96 h-80 flex flex-col justify-center items-center text-center bg-white rounded-lg'>
            <img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" alt="" />
            <h2 className='  text-xl text-primary-brandColor mt-10 font-semibold'>Dakikalar içinde kapınızda
</h2>
<p className='mt-2 opacity-60 font-semibold text-sm'>Getir’le siparişiniz dakikalar içinde kapınıza gelir.
</p>
        </div>
        <div className='w-96 h-80 flex flex-col justify-center items-center text-center bg-white rounded-lg'>
            <img className='w-36' src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" alt="" />
            <h2 className='text-xl text-primary-brandColor mt-10 font-semibold'>Binlerce çeşit mutluluk
</h2>
<p className='mt-2 opacity-60 font-semibold text-sm w-96'>Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.

</p>
        </div>
     
    </div>
</div>
  )
}

export default Feature