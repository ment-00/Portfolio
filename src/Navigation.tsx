
import { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Navigation() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-35% 0px -55% 0px',
      },
    )

    links.forEach((link) => {
      const section = document.getElementById(link.id)
      if (section) observer.observe(section)
    })

    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Navbar
      expand="md"
      sticky="top"
      collapseOnSelect
      className={`site-nav ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand">
          John Clement Navarro
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {links.map((link) => (
              <Nav.Link
                key={link.id}
                href={`#${link.id}`}
                eventKey={link.id}
                active={active === link.id}
                className="nav-item-link"
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
