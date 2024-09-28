import { CalendarDays, MapPin, Users } from 'lucide-react'

export default function EventDetails() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Event Details</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Event Information */}
          <div className="space-y-6">
            <div className="flex items-center">
              <CalendarDays className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-400" />
              <p className="text-lg dark:text-gray-300">Starting from October 26th</p>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-400" />
              <p className="text-lg dark:text-gray-300">Cyberville, QC / Hybrid</p>
            </div>
            <div className="flex items-center">
              <Users className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-400" />
              <p className="text-lg dark:text-gray-300">3000+ Attendees | 50+ Speakers | 20+ Workshops</p>
            </div>
          </div>
          
          {/* Map */}
          <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
            {/* Fetch and replace the API */}
            <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
            <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Karachi,Pakistan`}
        allowFullScreen
        className="rounded-lg shadow-lg"
      ></iframe>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}