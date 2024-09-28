import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{backgroundImage: "url('https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=300')"}}
      ></div>
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 text-yellow-600">
        DevSummit 2024 - 
        </h1>
        <h2 className='text-5xl md:text-6xl font-bold mb-4'>The Future of Tech Starts Here</h2>
        <p className="text-xl md:text-2xl mb-8">
        Engage with top developers and innovators.
        </p>
        <Link 
          href="#registration" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Register Now
        </Link>
      </div>
    </section>
  )
}