
import { useEffect, useState } from 'react'
import Navigation from './Navigation'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Scroll progress
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }

    // Mouse glow effect
    const onMove = (e: MouseEvent) => {
      const root = document.documentElement.style
      root.setProperty('--mx', `${e.clientX}px`)
      root.setProperty('--my', `${e.clientY}px`)
    }

    // Section reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    document.querySelectorAll('main > section:not(#home)').forEach((section) => {
      observer.observe(section)
    })

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMove)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="app">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="aurora" />
      <div className="glow" />

      <Navigation />

      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
