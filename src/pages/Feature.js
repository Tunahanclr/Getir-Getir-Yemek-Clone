import React from 'react'

function Feature() {
  return (
    <div className='container mx-auto  mt-12'>
        <div className='flex items-center flex-wrap justify-center gap-10'>
            <div className='w-96 h-80 flex flex-col justify-center items-center text-center bg-white rounded-lg'>
                <img src="https://getir.com/_next/static/images/intro-courier-71fe5640548ab5def63f180df7e79a5c.svg" alt="" />
                <h2 className=' text-xl text-primary-brandColor w-80 mt-10 font-semibold'>Binlerce restorandan yemeğinizi görerek seçin!</h2>
            </div>
            <div className='w-96 h-80 flex flex-col justify-center items-center text-center bg-white rounded-lg'>
                <img src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" alt="" />
                <h2 className=' w-60 text-xl text-primary-brandColor mt-10 font-semibold'>Haftanın her günü bulabileceğiniz yüzlerce kampanya ile indirimli fiyatlardan yararlanın!
</h2>
            </div>
            <div className='w-96 h-80 flex flex-col justify-center items-center text-center bg-white rounded-lg'>
                <img className='w-36' src="https://getir.com/_next/static/images/intro-foods-17936a3941c6c42663b203911b0e744d.svg" alt="" />
                <h2 className='text-xl w-60 text-primary-brandColor mt-10 font-semibold'>Kredi kartı, kapıda ya da yemek kartları ile hızlı ve güvenli ödeme yapın!
</h2>
            </div>
         
        </div>
    </div>
  )
}

export default Feature