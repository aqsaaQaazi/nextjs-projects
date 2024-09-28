import Image from 'next/image'

export default function Speakers() {
  const speakers = [
    { name: "Jane Doe", title: "Lead Developer at Google", description: "Expert in AI and machine learning technologies.",
      Image:"https://images.pexels.com/photos/27523299/pexels-photo-27523299/free-photo-of-round-glasses-complement-floral-dress.jpeg"
     },
    { name: "John Smith", title: "CTO of Tech Innovators", description: "Pioneering work in quantum computing.",
      Image:"https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300"
     },
    { name: "Alice Johnson", title: "Cybersecurity Specialist", description: "Leading authority on blockchain security." ,
      Image:"https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    { name: "Bob Williams", title: "UX Research Lead at Apple", description: "Innovator in human-computer interaction.",
      Image:"https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=300"
     },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Featured Speakers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full">
                <Image 
                  src={speaker.Image}
                  alt={speaker.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold dark:text-white">{speaker.name}</h3>
              <p className="text-blue-600 dark:text-blue-400">{speaker.title}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{speaker.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}