'use client'

import { useState } from 'react'

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ticketType: 'In-Person'
  })

  const [errors, setErrors] = useState<{ name?: string; email?: string}>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors : { [key: string]: string} = {}
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required"
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid"
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // Reset form after successful submission
    setFormData({ name: '', email: '', ticketType: 'In-Person' })
    setErrors({})
  }

  return (
    <section id="registration" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Register Now</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border rounded-lg focus:outline-none ${errors.name ? 'border-red-500' : 'focus:border-blue-500 dark:focus:border-blue-400'}`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border rounded-lg focus:outline-none ${errors.email ? 'border-red-500' : 'focus:border-blue-500 dark:focus:border-blue-400'}`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="ticketType" className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">Ticket Type</label>
            <select
              id="ticketType"
              name="ticketType"
              value={formData.ticketType}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
            >
              <option value="In-Person">In-Person</option>
              <option value="Virtual">Virtual</option>
            </select>
          </div>
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline dark:bg-blue-600 dark:hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </section>
  )
}