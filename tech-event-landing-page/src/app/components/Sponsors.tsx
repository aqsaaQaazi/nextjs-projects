import Image from 'next/image'

export default function Sponsors() {
  const sponsors = [
    {
    name:"Google",
    Image:"https://pngteam.com/images/google_logo_high_resolution_hd_high_quality_transparent_2-5608x1850_e76e0ab8_transparent.png"
  },
  {
    name:"Microsoft",
    Image:"https://th.bing.com/th/id/R.0808bb2dc8dcec85349c3e249e6deac2?rik=zC8YJ1RpCQ6ifA&pid=ImgRaw&r=0"
  },
  {
    name:"AWS",
    Image:"https://th.bing.com/th?id=OIP.ZowGmoDw7Zi452WJ30-ijgHaCm&w=350&h=123&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
  },
  {
    name:"GitHub",
    Image:"https://th.bing.com/th?id=OIP.fqZ9-PPqcG_cm0k3JfoINQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
  },
  {
    name:"Apple",
    Image:"https://th.bing.com/th?id=OIP.KzOFPzLnbMPTb4zlzxi8PgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
  },
  {
    name:"IBM",
    Image:"https://th.bing.com/th?id=OIP.jWE_00NLlt3IzXSnWw9cAAHaDF&w=349&h=145&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
  }]

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsors, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image 
                src={sponsors.Image}
                alt={sponsors.name}
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