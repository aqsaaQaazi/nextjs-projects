import HeroSection from './components/HeroSection'
import EventDetails from './components/EventDetails'
import Schedule from './components/Schedule'
import Speakers from './components/Speakers'
import Sponsors from './components/Sponsors'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'
import Navbar from './components/navbar'


export default function Home() {
  return (
    <main className="min-h-screen bg-['background']">
      {/* navbar */}
      <Navbar/>

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

    </main>
  )
}
