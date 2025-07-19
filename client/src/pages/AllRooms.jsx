import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'

const CheckBox = ({label, selected = false, onChange = () => { }}) => {
    return (
        <label className="flex gap-2 items-center cursor-pointer mt-1.5 text-xs">
            <input type="checkbox" checked={selected} onChange={(e) => onChange(e.target.checked, label)} />
            <span className="font-light select-none">{label}</span>
        </label>
    )
}

const RadioButton = ({label, selected = false, onChange = () => { }}) => {
    return (
        <label className="flex gap-2 items-center cursor-pointer mt-1.5 text-xs">
            <input type="radio" name="sortOptions" checked={selected} onChange={() => onChange(label)} />
            <span className="font-light select-none">{label}</span>
        </label>
    )
}

const AllRooms = () => {
    const navigate = useNavigate()
    const [openFilters,setOpenFilters]= useState(false)

            const roomTypes = [
            "Single Bed",
            "Double Bed",
            "Luxury Room",
            "Family Suite",
        ];

        const priceRanges = [
            '0 to 500',
            '500 to 1000',
            '1000 to 2000',
            '2000 to 3000',
        ];

        const sortOptions = [
            "Price Low to High",
            "Price High to Low",
            "Newest First"
        ];
            
    return (
        <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-20 md:pt-24 px-3 md:px-12 lg:px-16 xl:px-20'>
            {/* rooms list */}
            <div>
                <div className='flex flex-col items-start text-left'>
                    <h1 className='font-playfair text-3xl md:text-4xl'>Hotel Rooms</h1>
                    <p className='text-xs md:text-sm text-gray-500/90 mt-1.5'>
                        Explore all available rooms at NexTrip. Find the perfect stay for your next trip with our curated list of comfortable and affordable hotel rooms.
                    </p>
                </div>
                
                {roomsDummyData.map((room) => (
                    <div key={room._id} className='flex flex-col md:flex-row items-start py-7 gap-4 botder-b border-gray-300 last:pb-20 last:border-0'>
                        <img 
                            onClick={() => {navigate(`/rooms/${room._id}`),scrollTo(0,0)}}
                            src={room.images[0]} 
                            alt="hotel-img" 
                            title="View Room Details" 
                            className='max-h-52 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'
                        />
                        <div className='md:w-1/2 flex flex-col gap-1.5'>
                            <p className='text-gray-500 text-sm'>{room.hotel.city}</p>
                            <p onClick={() => {navigate(`/rooms/${room._id}`),scrollTo(0,0)}} className='text-gray-800 text-2xl font-playfair cursor-pointer'>{room.hotel.name}</p>
                            <div className='flex items-center'>
                                <StarRating/>
                                <p className='ml-2 text-sm'>200+ reviews</p>
                            </div>
                            <div className='flex items-center gap-1 text-gray-500 mt-1.5 text-xs'>
                                <img src={assets.locationIcon}/>
                                <span>{room.hotel.address}</span>
                            </div>
                            <div className='flex flex-wrap items-center mt-2 mb-4 gap-3'>
                                {room.amenities.map((item,index)=>(
                                    <div key={index} className='flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#f5f5ff]/70'>
                                        <img src={facilityIcons[item]} className='w-4 h-4'></img>
                                        <p className='text-xs'>{item}</p>
                                    </div>
                                ))}
                            </div>
                            <p className='text-lg font-medium text-gray-700'>${room.pricePerNight} /night</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* filter */}
            <div className="bg-white w-64 border border-gray-300 text-gray-600 max-lg:mb-6 min-lg:mt-12">
                <div className={`flex items-center justify-between px-4 py-2 min-lg:border-b border-gray-300 ${openFilters && "border-b"}`}>
                    <p className="text-sm font-medium text-gray-800">FILTERS</p>
                    <div className="text-xs cursor-pointer">
                        <span onClick={() => setOpenFilters(!openFilters)} className="lg:hidden">
                            {openFilters ? 'HIDE' : 'SHOW'}
                        </span>
                        <span className="hidden lg:block">CLEAR</span>
                    </div>
                </div><div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
                <div className="px-4 pt-4">
                    <p className="font-medium text-gray-800 pb-1.5 text-sm">Popular filters</p>
                    {roomTypes.map((room, index) => (
                        <CheckBox key={index} label={room} />
                    ))}
                </div>
                <div className="px-4 pt-4">
                    <p className="font-medium text-gray-800 pb-1.5 text-sm">Price Range</p>
                    {priceRanges.map((range, index) => (
                        <CheckBox key={index} label={`$ ${range}`} />
                    ))}
                </div>
                <div className="px-4 pt-4 pb-5">
                    <p className="font-medium text-gray-800 pb-1.5 text-sm">Sort By</p>
                    {sortOptions.map((option, index) => (
                        <RadioButton key={index} label={option}/>
                    ))}
                </div>
            </div>


            </div>
        </div>
    )
}

export default AllRooms