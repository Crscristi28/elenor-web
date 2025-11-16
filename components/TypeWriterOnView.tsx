'use client'

import { useEffect, useRef, useState } from 'react'

interface TypeWriterOnViewProps {
  text: string
  speed?: number
  className?: string
}

export default function TypeWriterOnView({ text, speed = 35, className = '' }: TypeWriterOnViewProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)
  const [displayedText, setDisplayedText] = useState('')

  // Detect when element comes into view
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true)
            observer.unobserve(element)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [started])

  // Start typing when visible
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

  return <span ref={ref} className={className}>{displayedText}</span>
}
