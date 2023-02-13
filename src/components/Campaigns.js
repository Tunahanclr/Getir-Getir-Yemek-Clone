import React from 'react'

function Campaigns() {
  return (
    <div className='container mx-aut'>
        <h3 className='font-semibold mt-10 text-sm'>Kampanyalar</h3>
        <div className='mt-10'>
            <div className='bg-primary-brandColor w-full h-80 rounded-md relative'>
                <div className='flex justify-between px-16 items-center'>
                          <div className='mt-20 flex  flex-col'>
                            <h1 className='text-white font-semibold text-3xl'>Getir'i indirin!</h1>
                            <p className='mt-4 text-white font-semibold text-lg w-96'>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
                            <div className='flex mt-6 gap-3'>
                              <a href="https://itunes.apple.com/app/id995280265" target={'_blank'}><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"  alt="" /></a>
                              <a href="https://play.google.com/store/apps/details?id=com.getir&pli=1"   target={'_blank'}><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" /></a>
                              <a href="https://appgallery.huawei.com/#/app/C100954039"  target={'_blank'}><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" /></a>
                            </div>
                          </div>
                          <div className='mt-20 width absolute right-0  bottom-0'>
                            <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
                          </div>
                </div>
            </div>
         </div>

    </div>
  )
}

export default Campaigns