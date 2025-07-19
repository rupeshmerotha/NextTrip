import React from 'react'

const Title = ({ title, subTitle, align = 'center' }) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  }

  return (
    <div className={`max-w-4xl ${alignmentClasses[align]}`}>
      <h2
        className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'
        style={{ fontFamily: `'Playfair Display', serif` }}
      >
        {title}
      </h2>
      {subTitle && (
        <p className='text-gray-600 text-lg leading-relaxed'>
          {subTitle}
        </p>
      )}
    </div>
  )
}

export default Title