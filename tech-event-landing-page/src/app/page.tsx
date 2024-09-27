import HeroSection from './components/HeroSection'
import EventDetails from './components/EventDetails'
import Schedule from './components/Schedule'
import Speakers from './components/Speakers'
import Sponsors from './components/Sponsors'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

// Import Google Analytics script
import Script from 'next/script'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <HeroSection />

      {/* Event Details Section */}
      <EventDetails />

      {/* Schedule Section */}
      <Schedule />

      {/* Speakers Section */}
      <Speakers />

      {/* Sponsors Section */}
      <Sponsors />

      {/* Registration Form Section */}
      <RegistrationForm />

      {/* Footer Section */}
      <Footer />

      {/* Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </main>
  )
}
