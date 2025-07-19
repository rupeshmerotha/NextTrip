import React from 'react'
import { assets } from '../assets/assets'

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white">
      
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-3xl font-playfair font-bold text-white">
          Stay in the Loop
        </h2>
        <p className="text-gray-400 mt-2">
          Get exclusive travel offers, destination inspiration, and the latest updates from <span className="font-semibold text-white">NextTrip</span> — right in your inbox.
        </p>
      </div>

      {/* Input & Button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full max-w-xl">
        <input
          type="email"
          className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none w-full"
          placeholder="Enter your email"
        />
        <button className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all">
          Subscribe
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="w-3.5 invert group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>

      {/* Footer Note */}
      <p className="text-gray-500 mt-6 text-xs text-center">
        By subscribing, you agree to our <a href="/privacy-policy" className="underline hover:text-white">Privacy Policy</a> and consent to receive emails from NextTrip.
      </p>
    </div>
  )
}

export default NewsLetter
