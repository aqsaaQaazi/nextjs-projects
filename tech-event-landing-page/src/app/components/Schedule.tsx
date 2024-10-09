export default function Schedule() {
    const scheduleData = [
      {
        day: "Day 1",
        events: [
          { time: "9:00 AM - 10:00 AM", title: "Keynote - The Future of AI", type: "Keynote" },
          { time: "11:00 AM - 12:00 PM", title: "Machine Learning Workshop", type: "Workshop" },
        ]
      },
      {
        day: "Day 2",
        events: [
          { time: "11:00 AM - 1:00 PM", title: "Building Scalable Apps with Next.js", type: "Workshop" },
          { time: "2:00 PM - 3:00 PM", title: "Cybersecurity in the Age of AI", type: "Talk" },
        ]
      },
      {
        day: "Day 3",
        events: [
          { time: "10:00 AM - 11:00 AM", title: "The Future of Web3", type: "Panel" },
          { time: "3:00 PM - 4:30 PM", title: "Women in Tech", type: "Panel Discussion" },
        ]
      },
    ]
  
    return (
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Event Schedule</h2>
          <div className="space-y-8">
            {scheduleData.map((day, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <h3 className="text-xl font-semibold bg-blue-400 dark:bg-blue-600 text-white p-4">{day.day}</h3>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {day.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{event.time}</p>
                      <p className="font-medium dark:text-white">{event.title}</p>
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full 
                        ${event.type === 'Keynote' ? 'bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200' : 
                          event.type === 'Workshop' ? 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200' : 
                          'bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200'}`}>
                        {event.type}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }