import { useEffect, useState } from 'react'
import { Image, Button } from 'react-bootstrap'
import { FaFolderOpen, FaEnvelope } from 'react-icons/fa'

const roles = ['IT student', 'Networking enthusiast', 'Cybersecurity learner', 'Iloilo, PH']

function useTyping(words: string[]) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    const done = text === word
    const delay = done && !deleting ? 1400 : deleting ? 40 : 80
    const t = setTimeout(() => {
      if (done && !deleting) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((index + 1) % words.length)
      } else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, index, words])

  return text
}

function Home() {
  const [imgFailed, setImgFailed] = useState(false)
  const typed = useTyping(roles)

  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>John Clement Navarro</h1>
        <p className="typing">
          <span>{typed}</span>
          <i className="caret" />
        </p>
        <p className="lead-text">
          An aspiring IT professional with a keen interest in networking and cybersecurity. I enjoy learning about
          network infrastructure, system security, developing and emerging technologies. I am continuously developing
          my technical skills through academic projects, hands-on activities, and self-learning, with the goal of
          building a career in the IT industry.
        </p>
        <div className="hero-actions">
          <Button className="btn-accent" href="#projects">
            <FaFolderOpen /> See my projects
          </Button>
          <Button variant="outline-light" href="#contact">
            <FaEnvelope /> Get in touch
          </Button>
        </div>
      </div>
      <div className="avatar-wrap">
        {imgFailed ? (
          <div className="hero-img avatar" aria-hidden="true">JN</div>
        ) : (
          <Image
            src="/profile.jpg"
            roundedCircle
            className="hero-img"
            alt="Portrait of John Clement Navarro"
            onError={() => setImgFailed(true)}
          />
        )}
      </div>
    </section>
  )
}

export default Home
