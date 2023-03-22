import React from 'react'

const İnfo = () => {
  return (
    <div className='container mb-28 bg-white h-72 sm:h-48 flex flex-col justify-center rounded-lg mx-auto mt-20 '>
        <div className=' gap-2 flex justify-between items-center px-20'>
          <div>
            <h3 className='text-primary-brandColor font-semibold text-xl sm:text-2xl'>Restoran sahibi misiniz?</h3>
            <p className='text-color-gray-storm text-sm sm:text-base '>GetirYemek restoran iş ortaklarından biri olun, işinizi daha az maliyetle büyütün, müşteri memnuniyetini artırın.
</p>
          </div>
          <div>
    <button className='bg-yellow-300 text-primary-brandColor w-32 sm:w-36 h-12 text-center text-sm font-semibold rounded-md'>Hemen Başvur</button>
          </div>
        </div>

    </div>
  )
}

export default İnfo