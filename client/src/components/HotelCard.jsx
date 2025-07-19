import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({room, index}) => {
  return (
    <Link to={'rooms/'+room._id} onClick={()=>scrollTo(0,0)} key={room._id}>
        <div className='group relative max-w-xs w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)] transform transition-all duration-200 cursor-pointer'>
            <div className='relative overflow-hidden'>
                <img src={room.images[0]} alt="Hotel room" className='w-full h-40 object-cover transition-all duration-300 ' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-all duration-300'></div>
            </div>
            {index % 2 === 0 && (
                <p className='px-2 py-1 absolute top-2 left-2 text-xs bg-white text-gray-800 font-medium rounded-full transition-all duration-300 group-hover:bg-[#3399FF] group-hover:text-white'>
                    Best Seller
                </p>
            )}
            <div className='p-3 transition-all duration-300 '>
                <div className='flex items-center justify-between'>
                    <p className='font-playfair text-lg font-medium text-gray-800 truncate transition-all duration-300 group-hover:text-[#3399FF]'>{room.hotel.name}</p>
                    <div className='flex items-center gap-1 ml-2 transition-all duration-300'>
                        <img src={assets.starIconFilled} alt="star-icon" className='w-4 h-4' />
                        <span className='text-sm group-hover:text-[#3399FF] transition-all duration-300'>4.5</span>
                    </div>
                </div>
                <div className='flex items-center gap-1 text-sm mt-1 transition-all duration-300 group-hover:text-gray-600'>
                    <img src={assets.locationIcon} alt="location-icon" className='w-4 h-4 transition-all duration-300 group-hover:brightness-75' />
                    <span className='truncate'>{room.hotel.address}</span>
                </div>
                <div className='flex items-center justify-between mt-3'>
                    <p className='transition-all duration-300 '><span className='text-lg text-gray-800 group-hover:text-[#3399FF] transition-all duration-300'>${room.pricePerNight}</span>/night</p>
                    <button className='px-3 py-1.5 text-sm font-medium border border-gray-300 rounded transition-all duration-300 group-hover:bg-[#3399FF] group-hover:text-black group-hover:border-[#3399FF] cursor-pointer'>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default HotelCard