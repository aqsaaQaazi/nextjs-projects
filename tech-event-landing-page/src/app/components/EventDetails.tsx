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
              <p className="text-lg dark:text-gray-300">March 5th - 7th, 2024</p>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-400" />
              <p className="text-lg dark:text-gray-300">Silicon Valley, CA / Virtual</p>
            </div>
            <div className="flex items-center">
              <Users className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-400" />
              <p className="text-lg dark:text-gray-300">3000+ Attendees | 50+ Speakers | 20+ Workshops</p>
            </div>
          </div>
          
          {/* Map */}
          <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
            {/* Replace with actual Google Maps embed */}
            <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
              Google Maps Embed Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}