import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}
      ></div>
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          TechCon 2024 - The Premier Tech Conference
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Join the world's leading developers and tech innovators
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