'use client' // Enables client-side rendering for this component

// Import necessary dependencies
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button" // Custom Button component
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card" // Card components
import { motion, AnimatePresence } from 'framer-motion' // Animation library
import dynamic from 'next/dynamic' // For dynamic imports
import { FaBirthdayCake, FaGift } from 'react-icons/fa' // Icons for cake and gift
import { GiBalloons } from 'react-icons/gi' // Icon for balloons

// Define type for Confetti component props
type ConfettiProps = {
  width: number
  height: number
}

// Dynamically import Confetti component (ssr: false disables server-side rendering for it)
const DynamicConfetti = dynamic(() => import('react-confetti'), { ssr: false })

// Define color arrays for candles, balloons, and confetti
const candleColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'] // Candle colors
const balloonColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'] // Balloon colors
const confettiColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'] // Confetti colors

// BirthdayWish Component
export default function BirthdayWish() {
  // State to track the number of candles lit
  const [candlesLit, setCandlesLit] = useState<number>(0)

  // State to track the number of balloons popped
  const [balloonsPoppedCount, setBalloonsPoppedCount] = useState<number>(0)

  // State to manage confetti display
  const [showConfetti, setShowConfetti] = useState<boolean>(false)

  // State to store the window size (for confetti positioning)
  const [windowSize, setWindowSize] = useState<ConfettiProps>({ width: 0, height: 0 })

  // State to handle celebration (prevents button from being clicked multiple times)
  const [celebrating, setCelebrating] = useState<boolean>(false)

  // Constants for total number of candles and balloons
  const totalCandles: number = 5
  const totalBalloons: number = 5

  // Effect to update window size for confetti placement
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize() // Call initially to set size on load
    window.addEventListener('resize', handleResize) // Add event listener for resize

    return () => window.removeEventListener('resize', handleResize) // Cleanup on unmount
  }, [])

  // Effect to trigger confetti when all candles are lit and balloons are popped
  useEffect(() => {
    if (candlesLit === totalCandles && balloonsPoppedCount === totalBalloons) {
      setShowConfetti(true) // Show confetti when both conditions are met
    }
  }, [candlesLit, balloonsPoppedCount])

  // Function to light a candle based on the index
  const lightCandle = (index: number) => {
    if (index === candlesLit) {
      setCandlesLit(prev => prev + 1) // Increment candles lit if the correct one is clicked
    }
  }

  // Function to pop a balloon based on the index
  const popBalloon = (index: number) => {
    if (index === balloonsPoppedCount) {
      setBalloonsPoppedCount(prev => prev + 1) // Increment balloons popped if the correct one is clicked
    }
  }

  // Function to start the celebration sequence
  const celebrate = () => {
    setCelebrating(true) // Disable the celebrate button
    setShowConfetti(true) // Show confetti immediately
    const interval = setInterval(() => {
      setCandlesLit(prev => {
        if (prev < totalCandles) return prev + 1 // Light each candle one by one
        clearInterval(interval) // Stop the interval once all candles are lit
        return prev
      })
    }, 500) // Delay between lighting each candle
  }

  return (
    // Main container with minimum height and centered content
    <div className="min-h-screen bg-[#fef3c7] flex items-center justify-center p-4">
      {/* Animated wrapper for the card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Birthday card with shadow and border */}
        <Card className="bg-[#d6e6eb] mx-auto overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl border-4 border-[#f7c1c8]">
          {/* Card header with birthday message */}
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-[]"> 🎉 Happy Birthday! 🍾</CardTitle>
            <CardDescription className="text-2xl font-semibold text-gray-600"><strong><i>Laiba</i></strong> turned 18 🥳</CardDescription>
            <p className="text-lg text-gray-500"> on <i>18th September 2024</i></p>
            <h6 className='text-center text-slate-600 bg-yellow-100'>click on celebrate to light candles</h6>
          </CardHeader>
          {/* Card content with candles and balloons */}
          <CardContent className="space-y-6 text-center">
            {/* Candles section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Light the candles:</h3>
              <div className="flex justify-center space-x-2">
                {/* Map through candles and render based on state */}
                {[...Array(totalCandles)].map((_, index) => (
                  <AnimatePresence key={index}>
                    {/* Lit or unlit candle based on index */}
                    {(celebrating && index <= candlesLit) || (!celebrating && index < candlesLit) ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.5, delay: celebrating ? index * 0.5 : 0 }}
                      >
                        {/* Lit candle */}
                        <FaBirthdayCake
                          className="w-8 h-8 cursor-pointer hover:scale-110"
                          style={{ color: candleColors[index % candleColors.length] }}
                          onClick={() => lightCandle(index)} // Light the candle on click
                        />
                      </motion.div>
                    ) : (
                      // Unlit candle
                      <FaBirthdayCake
                      className={`w-8 h-8 transition-colors duration-300 ease-in-out cursor-pointer hover:scale-110`}
                      style={{ color: candleColors[index % candleColors.length] }}
                        onClick={() => lightCandle(index)} // Light the candle on click
                      />
                    )}
                  </AnimatePresence>
                ))}
              </div>
            </div>
            {/* Balloons section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">click to Pop za balloons:</h3>
              <div className="flex justify-center space-x-2">
                {/* Map through balloons and render based on state */}
                {[...Array(totalBalloons)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 1 }}
                    animate={{ scale: index < balloonsPoppedCount ? 0 : 1 }} // Pop the balloon on click
                    transition={{ duration: 0.3 }}
                  >
                    {/* Balloon icon */}
                    <GiBalloons
                      className="w-8 h-8 cursor-pointer hover:scale-110"
                      style={{ color: index < balloonsPoppedCount ? '#D1D5DB' : balloonColors[index % balloonColors.length] }}
                      onClick={() => popBalloon(index)} // Pop the balloon on click
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
          {/* Card footer with celebrate button */}
          <CardFooter className="flex justify-center">
            <Button
              className="button-candle bg-[#a3d9a5] hover:bg-flame-red transition-all duration-300"
              onClick={celebrate} // Trigger celebration on click
              disabled={celebrating} // Disable button once celebration starts
            >
              Celebrate! <FaGift className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      {/* Confetti component */}
      {showConfetti && (
        <DynamicConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          colors={confettiColors} // Use defined confetti colors
        />
      )}
    </div>
  )
}
