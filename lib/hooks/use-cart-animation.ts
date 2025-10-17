"use client"

import { useEffect, useState } from 'react'
import { useCart } from './use-cart'

export function useCartAnimation() {
  const { items } = useCart()
  const [isAnimating, setIsAnimating] = useState(false)
  const [previousItemCount, setPreviousItemCount] = useState(0)

  useEffect(() => {
    const currentItemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    
    // Only animate if the count increased (item was added)
    if (currentItemCount > previousItemCount && previousItemCount > 0) {
      setIsAnimating(true)
      
      // Reset animation after duration
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 600)
      
      return () => clearTimeout(timer)
    }
    
    setPreviousItemCount(currentItemCount)
  }, [items, previousItemCount])

  return { isAnimating }
}
