import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function stop() {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }

    function check() {
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.95) {
        setShown(true)
        stop()
      }
    }

    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    check()
    return stop
  }, [])

  return (
    <div ref={ref} className={`reveal${shown ? ' in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default Reveal