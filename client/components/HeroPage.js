import React from 'react'

const HeroPage = () => {
  return (
    <div>    <section className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 py-24 h-screen relative overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0 z-0">
      <div className="animate-float bg-gradient-to-r from-indigo-700 to-purple-700 w-64 h-64 rounded-full opacity-20 absolute top-1/4 left-1/4"></div>
      <div className="animate-float bg-gradient-to-r from-purple-700 to-indigo-700 w-48 h-48 rounded-full opacity-20 absolute bottom-1/4 right-1/4 animation-delay-2000"></div>
    </div>
  
    <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
      {/* Logo or Icon */}
      <img
        src="/images/mytoken-logo.png" // Replace with your logo path
        alt="MyToken Logo"
        className="w-24 h-24 mx-auto mb-6 animate-bounce"
      />
  
      {/* Heading */}
      <h2 className="text-5xl font-bold text-white">Welcome to MyToken</h2>
  
      {/* Subheading */}
      <p className="text-xl text-gray-200">
        The most anticipated token in the crypto space! Join the presale and earn rewards.
      </p>
  
      {/* Token Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md">
          <h3 className="text-2xl font-semibold text-yellow-400">100M+</h3>
          <p className="text-gray-200">Total Supply</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md">
          <h3 className="text-2xl font-semibold text-yellow-400">$0.10</h3>
          <p className="text-gray-200">Presale Price</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md">
          <h3 className="text-2xl font-semibold text-yellow-400">25%</h3>
          <p className="text-gray-200">Presale Bonus</p>
        </div>
      </div>
  
      {/* Call-to-Action Button */}
      <button className="bg-yellow-400 text-black py-3 px-8 rounded-xl text-lg shadow-md hover:bg-yellow-500 transition-colors mt-8">
        Join Presale
      </button>
    </div>
  </section></div>
  )
}

export default HeroPage