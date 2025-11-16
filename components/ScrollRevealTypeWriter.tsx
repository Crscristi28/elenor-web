'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './ScrollReveal.module.css'

interface ScrollRevealTypeWriterProps {
  text: string
  delay?: number
  speed?: number
  className?: string
}

export default function ScrollRevealTypeWriter({
  text,
  delay = 0,
  speed = 40,
  className = ''
}: ScrollRevealTypeWriterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState('')

  // Handle scroll reveal
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add(styles.visible)
              setIsVisible(true)
            }, delay)
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
  }, [delay])

  // Handle typing animation after visible
  useEffect(() => {
    if (!isVisible) return

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
  }, [text, speed, isVisible])

  return (
    <span ref={ref} className={`${styles.reveal} ${className}`}>
      {displayedText}
    </span>
  )
}
