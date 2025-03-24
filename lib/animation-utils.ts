"use client"

import { useEffect, useState } from "react"

// This helper ensures animations trigger properly on component mount
export function useAnimationTrigger() {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setShouldAnimate(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return shouldAnimate
}

