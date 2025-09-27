import { useState, useEffect } from 'react'

export function useAnimation() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [animationSpeed, setAnimationSpeed] = useState(1)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  const changeSpeed = (speed) => {
    setAnimationSpeed(speed)
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [isAnimating])

  return {
    isAnimating,
    animationSpeed,
    toggleAnimation,
    changeSpeed
  }
}