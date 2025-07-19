import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    const stats = [
        { number: '50K+', label: 'Happy Travelers' },
        { number: '2,500+', label: 'Partner Hotels' },
        { number: '150+', label: 'Destinations' },
        { number: '4.8★', label: 'Average Rating' }
    ]

    const values = [
        {
            title: 'Trust & Transparency',
            description: 'We believe in honest pricing and clear communication. No hidden fees, no surprises.',
            icon: '🛡️'
        },
        {
            title: 'Curated Excellence',
            description: 'Every hotel partner is carefully selected to ensure quality and memorable experiences.',
            icon: '✨'
        },
        {
            title: 'Personal Touch',
            description: 'Your journey is unique. We provide personalized recommendations tailored to your preferences.',
            icon: '💎'
        },
        {
            title: 'Seamless Experience',
            description: 'From search to stay, we make your travel planning effortless and enjoyable.',
            icon: '🌟'
        }
    ]

    const team = [
        {
            name: 'Sarah Chen',
            role: 'Founder & CEO',
            description: 'Former hospitality executive with 15+ years of experience in luxury travel.',
            image: '👩‍💼'
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Head of Operations',
            description: 'Travel industry veteran passionate about creating exceptional guest experiences.',
            image: '👨‍💻'
        },
        {
            name: 'Elena Petrov',
            role: 'Head of Partnerships',
            description: 'Building relationships with premium hotels worldwide to expand our curated collection.',
            image: '👩‍🤝‍👨'
        }
    ]

    return (
        <div className='flex flex-col items-center justify-start pt-20 md:pt-24 px-3 md:px-12 lg:px-16 xl:px-20 pb-16'>
            {/* Hero Section */}
            <div className='max-w-4xl text-center mb-16'>
                <h1 className='font-playfair text-3xl md:text-4xl text-gray-800 mb-4'>About NextTrip</h1>
                <p className='text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                    We're redefining travel accommodation by connecting discerning travelers with exceptional hotels. 
                    Our curated platform ensures every stay is memorable, comfortable, and perfectly suited to your journey.
                </p>
            </div>

            {/* Stats Section */}
            <div className='w-full max-w-4xl mb-20'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                    {stats.map((stat, index) => (
                        <div key={index} className='text-center'>
                            <div className='bg-[#f5f5ff]/70 rounded-xl p-6 mb-2'>
                                <h3 className='font-playfair text-2xl md:text-3xl text-gray-800 mb-1'>{stat.number}</h3>
                                <p className='text-xs text-gray-500'>{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Story Section */}
            <div className='max-w-4xl mb-20'>
                <div className='text-center mb-12'>
                    <h2 className='font-playfair text-2xl md:text-3xl text-gray-800 mb-4'>Our Story</h2>
                    <div className='w-20 h-0.5 bg-gray-300 mx-auto'></div>
                </div>
                
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-4'>
                        <p className='text-xs md:text-sm text-gray-600 leading-relaxed'>
                            Founded in 2020, NexTrip was born from a simple observation: travelers deserve better than generic booking experiences. 
                            We noticed a gap between budget platforms and luxury concierge services.
                        </p>
                        <p className='text-xs md:text-sm text-gray-600 leading-relaxed'>
                            Our mission became clear - create a platform that combines the convenience of online booking with the personal 
                            touch of boutique travel services. Every hotel in our collection is personally vetted by our team.
                        </p>
                        <p className='text-xs md:text-sm text-gray-600 leading-relaxed'>
                            Today, we're proud to serve thousands of travelers worldwide, helping them discover exceptional accommodations 
                            that transform trips into unforgettable experiences.
                        </p>
                    </div>
                    
                    <div className='bg-[#f5f5ff]/70 rounded-xl p-8 text-center'>
                        <div className='text-4xl mb-4'>🌍</div>
                        <h3 className='font-playfair text-lg text-gray-800 mb-2'>Global Reach, Local Touch</h3>
                        <p className='text-xs text-gray-600'>
                            From boutique city hotels to luxury beach resorts, we bring you closer to authentic travel experiences worldwide.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className='max-w-4xl mb-20'>
                <div className='text-center mb-12'>
                    <h2 className='font-playfair text-2xl md:text-3xl text-gray-800 mb-4'>Our Values</h2>
                    <div className='w-20 h-0.5 bg-gray-300 mx-auto'></div>
                </div>
                
                <div className='grid md:grid-cols-2 gap-8'>
                    {values.map((value, index) => (
                        <div key={index} className='bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300'>
                            <div className='text-2xl mb-3'>{value.icon}</div>
                            <h3 className='font-playfair text-lg text-gray-800 mb-2'>{value.title}</h3>
                            <p className='text-xs text-gray-600 leading-relaxed'>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className='max-w-4xl mb-12'>
                <div className='text-center mb-12'>
                    <h2 className='font-playfair text-2xl md:text-3xl text-gray-800 mb-4'>Meet Our Team</h2>
                    <div className='w-20 h-0.5 bg-gray-300 mx-auto'></div>
                </div>
                
                <div className='grid md:grid-cols-3 gap-8'>
                    {team.map((member, index) => (
                        <div key={index} className='text-center'>
                            <div className='bg-[#f5f5ff]/70 w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4'>
                                {member.image}
                            </div>
                            <h3 className='font-playfair text-lg text-gray-800 mb-1'>{member.name}</h3>
                            <p className='text-xs text-gray-500 mb-2 font-medium'>{member.role}</p>
                            <p className='text-xs text-gray-600 leading-relaxed'>{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className='max-w-2xl text-center bg-[#f5f5ff]/70 rounded-xl p-8'>
                <h3 className='font-playfair text-xl md:text-2xl text-gray-800 mb-3'>Ready to Start Your Journey?</h3>
                <p className='text-xs md:text-sm text-gray-600 mb-6'>
                    Join thousands of travelers who trust NexTrip for their accommodation needs. 
                    Discover your perfect stay today.
                </p>
                <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                    <button onClick={() => {navigate("/rooms"),scrollTo(0,0)}} className='px-6 py-2.5 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors'>
                        Explore Hotels
                    </button>
                    <button className='px-6 py-2.5 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors'>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About