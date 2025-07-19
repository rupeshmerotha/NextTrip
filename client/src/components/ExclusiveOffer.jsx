import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffer = () => {
  return (
    <div className='flex flex-col px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-8 md:gap-16'>
            <div className='flex-1 max-w-4xl'>
                <Title
                align="left"
                title="Exclusive Offers"
                subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
                />
            </div>
            <button className='group flex items-center gap-2 font-medium mt-4 md:mt-0 cursor-pointer transition-all duration-300 whitespace-nowrap flex-shrink-0'>
                View All Offers
                <img src={assets.arrowIcon} alt="arrow-icon" className='group-hover:translate-x-1 group-hover:brightness-0 group-hover:saturate-100 group-hover:hue-rotate-180 transition-all duration-300'/>
            </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
            {exclusiveOffers.map((items)=>(
                <div key={items._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/30'
                style={{backgroundImage: `url(${items.image})`}}>
                    <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full transition-all duration-300 group-hover:bg-[#3399FF] group-hover:text-white'>{items.priceOff}% OFF</p>
                    <div className='transition-all duration-300 group-hover:transform group-hover:translate-y-[-2px]'>
                        <p className='text-2xl font-medium font-plafair'>{items.title}</p>
                        <p>{items.description}</p>
                        <p className='text-xs text-white/70 mt-3 group-hover:text-white/90 transition-all duration-300'>Expires {items.expiryDate}</p>
                    </div>
                    <button className='flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5 transition-all duration-300  group-hover:bg-white/10 group-hover:px-2 group-hover:py-1 group-hover:rounded-md'>
                        View Offers
                        <img className="invert group-hover:translate-x-1 transition-all duration-300 group-hover:brightness-0 group-hover:saturate-100 group-hover:hue-rotate-180" src={assets.arrowIcon} alt="arrow-icon" />
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ExclusiveOffer