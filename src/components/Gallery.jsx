import React from 'react'

const Gallery = () => {
  return (
    <section className='pb-20 md:pb-30'>
        <div className='grid grid-cols-3 gap-1 md:gap-2.5'>
            <div>
                <img className='size-full' src="./gallery(5).png" alt="" />
            </div>
            <div className='grid grid-cols-1 gap-1 md:gap-2.5'>
                <img className='size-full' src="./gallery(4).png" alt="" />
                <img className='size-full' src="./gallery(3).png" alt="" />
            </div>
            <div className='grid grid-cols-1 gap-1 md:gap-2.5'>
                <img className='size-full' src="./gallery(2).png" alt="" />
                <img className='size-full' src="./gallery(1).png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Gallery
