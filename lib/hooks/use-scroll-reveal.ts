"use client"

import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(threshold = 0.1, delay = 0) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smoother animation trigger
          requestAnimationFrame(() => {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          })
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, delay])

  return [ref, isVisible] as const
}
