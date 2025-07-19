import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30'>
        <Title
        title="What Our Guests Say"
        subTitle={<div>Discover why discerning travelers consistently choose <span className="font-semibold">NextTrip</span> for their exclusive and luxurious accommodation around the world.</div>}/>
        <div className="flex flex-wrap items-center justify-center gap-6 pt-14 mt-8">
                {testimonials.map((testimonial)=>(
                    <div key={testimonial.id} className='bg-white p-6 rounded-xl shadow w-80 h-65 flex flex-col'>
                        <div className='flex items-center gap-3 mb-4'>
                            <img className='w-12 h-12 rounded-full' src={testimonial.image} alt={testimonial.name}/>
                            <div>
                                <p className='font-playfair text-xl'>{testimonial.name}</p>
                                <p className='text-gray-500 text-sm'>{testimonial.address}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 mb-4'>
                            {/* Add star rating here if available in testimonial data */}
                            {testimonial.rating && Array.from({ length: testimonial.rating }, (_, i) => (
                                <span key={i} className='text-yellow-400'>★</span>
                            ))}
                        </div>
                        <p className='text-gray-500 text-sm leading-relaxed flex-1 overflow-hidden'>{testimonial.review}</p>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Testimonials