'use client'

import { useState, useEffect } from 'react'

interface TypeWriterProps {
  text: string
  delay?: number
  speed?: number
  className?: string
}

export default function TypeWriter({ text, delay = 0, speed = 30, className = '' }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (delay > 0) {
      const startTimeout = setTimeout(() => {
        setStarted(true)
      }, delay)
      return () => clearTimeout(startTimeout)
    } else {
      setStarted(true)
    }
  }, [delay])

  useEffect(() => {
    if (!started) return

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, started])

  return <span className={className}>{displayedText}</span>
}
