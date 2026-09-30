import { useEffect, useRef, useState } from 'react'

export default function useScrollReveal(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
  } = options

  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

export function useScrollRevealMulti(count, options = {}) {
  const refs = useRef([])
  const [visible, setVisible] = useState(new Array(count).fill(false))

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setVisible(new Array(count).fill(true))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target)
          if (index !== -1) {
            if (entry.isIntersecting) {
              setVisible((prev) => {
                const next = [...prev]
                next[index] = true
                return next
              })
              if (options.triggerOnce !== false) {
                observer.unobserve(entry.target)
              }
            } else if (options.triggerOnce === false) {
              setVisible((prev) => {
                const next = [...prev]
                next[index] = false
                return next
              })
            }
          }
        })
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    )

    refs.current.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [count, options.threshold, options.rootMargin, options.triggerOnce])

  const setRef = (index) => (el) => {
    refs.current[index] = el
  }

  return { refs: setRef, visible }
}