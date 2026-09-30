import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollRevealProvider() {
  const { pathname } = useLocation()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        el.classList.add('revealed')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}