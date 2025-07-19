import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/Title'

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null
  })

  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free WiFi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false,
    }
  })

  return (
    <form className="max-w-2xl mx-auto p-4 pb-12 text-sm">
      <Title
        align='left'
        font='outfit'
        title='Add Room'
        subTitle='Fill in the details carefully and accurate room details, pricing, and amenities.'
        className="text-lg"
      />

      {/* Upload Area For Images */}
      <div className="mt-6">
        <p className='text-gray-800 font-medium mb-1'>Images</p>
        <div className='grid grid-cols-4 gap-2'>
          {Object.keys(images).map((key) => (
            <label htmlFor={`roomImage${key}`} key={key} className="cursor-pointer">
              <div className="border border-dashed border-gray-300 rounded p-1 hover:border-primary transition-all">
                <img
                  className='w-full h-20 object-cover rounded'
                  src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
                  alt=""
                />
              </div>
              <input
                type="file"
                accept="image/*"
                id={`roomImage${key}`}
                hidden
                onChange={e => setImages({ ...images, [key]: e.target.files[0] })}
              />
            </label>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
        <div>
          <label className="block text-gray-800 font-medium mb-1">Room Type</label>
          <select
            value={inputs.roomType}
            onChange={e => setInputs({ ...inputs, roomType: e.target.value })}
            className='border border-gray-300 rounded p-1.5 w-full text-sm focus:ring-1 focus:ring-primary'
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-800 font-medium mb-1">
            Price <span className='text-xs font-normal'>/night</span>
          </label>
          <div className="relative">
            <span className="absolute left-2 top-1.5 text-sm">$</span>
            <input
              type="number"
              placeholder='0'
              className='border border-gray-300 rounded p-1.5 pl-6 w-full text-sm focus:ring-1 focus:ring-primary'
              value={inputs.pricePerNight}
              onChange={e => setInputs({ ...inputs, pricePerNight: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className='text-gray-800 font-medium mb-1'>Amenities</p>
        <div className='grid grid-cols-2 gap-1'>
          {Object.keys(inputs.amenities).map((amenity, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`amenities${index + 1}`}
                checked={inputs.amenities[amenity]}
                onChange={() =>
                  setInputs({
                    ...inputs,
                    amenities: {
                      ...inputs.amenities,
                      [amenity]: !inputs.amenities[amenity],
                    },
                  })
                }
                className="h-3 w-3 text-primary rounded focus:ring-primary border-gray-300"
              />
              <label htmlFor={`amenities${index + 1}`} className="ml-1.5 text-gray-700 text-xs">
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <button className='bg-primary text-white px-6 py-2 rounded text-sm hover:bg-primary-dark transition-colors'>
          Add Room
        </button>
      </div>
    </form>
  )
}

export default AddRoom