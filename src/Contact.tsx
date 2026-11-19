import { useState } from 'react'
import { Card, ListGroup, Form, Button } from 'react-bootstrap'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'
import Reveal from './Reveal'

const EMAIL = 'workgmail010@gmail.com'

function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="section">
      <Reveal>
        <h2 className="section-title">Contact</h2>
      </Reveal>
      <div className="two-col">
        <Reveal>
          <Card className="soft-card">
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item><FaEnvelope /> {EMAIL}</ListGroup.Item>
                <ListGroup.Item><FaPhone /> +63 963 446 7067</ListGroup.Item>
                <ListGroup.Item><FaMapMarkerAlt /> New Lucena, Iloilo, Philippines</ListGroup.Item>
                <ListGroup.Item><FaLinkedin /> www.linkedin.com/in/john-clement-navarro</ListGroup.Item>
                <ListGroup.Item><FaGithub /> github.com/ment-00</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Reveal>

        <Reveal delay={100}>
          <Card className="soft-card">
            <Card.Body>
              <Form
                onSubmit={(e) => {
                  e.preventDefault()
                  const f = new FormData(e.currentTarget)
                  const subject = encodeURIComponent(`Portfolio message from ${f.get('name')}`)
                  const body = encodeURIComponent(String(f.get('message')))
                  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
                  setSent(true)
                }}
              >
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={4} required />
                </Form.Group>
                <Button type="submit" className="btn-accent">
                  <FaPaperPlane /> Send message
                </Button>
                {sent && <p className="sent-note">Your email app should open with the message ready to send.</p>}
              </Form>
            </Card.Body>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
