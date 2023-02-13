import React from 'react'

function Footer() {
  return (
    <div className='bg-white mt-20 h-64'>
        <div className='container mx-auto gap-28 flex'>
            <div className='flex gap-4  flex-col'>
                <h2 className='text-primary-brandColor text-xl'>Getir'i indirin!</h2>
                <a href="https://itunes.apple.com/app/id995280265" target={'_blank'}><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"  alt="" /></a>
                <a href="https://play.google.com/store/apps/details?id=com.getir&pli=1"   target={'_blank'}><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" /></a>
                <a href="https://appgallery.huawei.com/#/app/C100954039"  target={'_blank'}><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" /></a>
            </div>
            <div>
            <div className='flex gap-4  flex-col'>
            <h2 className='text-primary-brandColor text-xl'>Getir'i keşfedin</h2>
                <a href="" className='text-sm font-light opacity-90'>Hakkımızda</a>
                <a href="" className='text-sm font-light opacity-90'>Kariyer</a>
                <a href="" className='text-sm font-light opacity-90'>Teknoloji Kariyeri</a>
                <a href="" className='text-sm font-light opacity-90'>İletişim</a>
                <a href="" className='text-sm font-light opacity-90'>Sosyal Sorumluluk Projeleri</a>
            </div>
           
            </div>
            <div className='flex gap-4  flex-col'>
            <h2 className='text-primary-brandColor text-xl'>Yardıma mı ihtiyacınız var?</h2>
                <a href="" className='text-sm font-light opacity-90'>Sıkça Sorulan Sorular</a>
                <a href="" className='text-sm font-light opacity-90'>Kişisel Verilerin Korunması</a>
                <a href="" className='text-sm font-light opacity-90'>Gizlilik Politikası</a>
                <a href="" className='text-sm font-light opacity-90'>Kullanım Koşulları</a>
                <a href="" className='text-sm font-light opacity-90'>Çerez Politikası</a>
            </div>
            <div className='flex gap-4  flex-col'>
            <h2 className='text-primary-brandColor text-xl'>İş Ortağımız Olun
</h2>
                <a href="" className='text-sm font-light opacity-90'>Bayimiz Olun
</a>
                <a href="" className='text-sm font-light opacity-90'>Deponuzu Kiralayın
</a>
                <a href="" className='text-sm font-light opacity-90'> GetirYemek Restoranı Olun
</a>
                <a href="" className='text-sm font-light opacity-90'>GetirÇarşı İşletmesi Olun
</a>
                <a href="" className='text-sm font-light opacity-90'>Zincir Restoranlar
</a>
            </div>
        </div>
    </div>
  )
}

export default Footer