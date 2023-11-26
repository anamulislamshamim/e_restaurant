import React from 'react'

const Card = ({ title1, title2, img}) => (
    <div className='relative text-gray-200 rounded-xl'>
        {/* overlay  */}
        <div className='absolute bg-black/50 w-full h-full rounded-xl'>
            <p className=' px-2 pt-4 text-2xl font-bold'>{ title1 }</p>
            <p className='px-2'>{ title2 }</p>
            <button className='border-white bg-white text-black font-semibold ml-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
            className='rounded-xl mx-h-[160px] md:max-h-[200px] w-full object-cover'
            src={ img } alt="food" 
        />
    </div>
)

export default Card