import Image from 'next/image'

export default function Sponsors() {
  const sponsors = [
    "Google", "Microsoft", "AWS", "GitHub", "Apple", "IBM"
  ]

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image 
                src={`/placeholder.svg?text=${sponsor}`}
                alt={sponsor}
                width={150}
                height={80}
                className="transition duration-300 ease-in-out filter grayscale hover:grayscale-0 dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}