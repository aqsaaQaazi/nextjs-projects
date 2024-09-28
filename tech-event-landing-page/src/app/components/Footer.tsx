import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 ">
      <div className="container mx-auto px-4 items-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p> &copy; 2024 TechCon - All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            
            <Link href="https://www.linkedin.com/in/aqsaa-qaazi-7b69982b4/?originalSubdomain=pk" target="_blank" className="hover:text-blue-400 transition duration-300">
              <Linkedin />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <div className='mt-4 md:mb-0'>
            
            </div>
        </div>
        <div className="mt-4 text-center text-sm">
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
          {' | '}
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}