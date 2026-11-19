import { useState } from 'react'
import type { MouseEvent } from 'react'
import { Card, Badge, Modal, Button } from 'react-bootstrap'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Reveal from './Reveal'
import { projects } from './projectsData'
import type { Project } from './projectsData'

const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))]

function tilt(e: MouseEvent<HTMLDivElement>) {
  const r = e.currentTarget.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width - 0.5
  const y = (e.clientY - r.top) / r.height - 0.5
  e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`
}

function untilt(e: MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = ''
}

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [filter, setFilter] = useState('All')
  const visible = projects.filter((p) => filter === 'All' || p.tags.includes(filter))

  return (
    <section id="projects" className="section">
      <Reveal>
        <h2 className="section-title">Projects</h2>
      </Reveal>
      <div className="filter-row">
        {allTags.map((t) => (
          <Button
            key={t}
            size="sm"
            variant="outline-light"
            className={filter === t ? 'btn-accent' : ''}
            onClick={() => setFilter(t)}
          >
            {t}
          </Button>
        ))}
      </div>
      <div className="card-grid">
        {visible.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <Card className="soft-card" onMouseMove={tilt} onMouseLeave={untilt}>
              <button
                type="button"
                className="img-button"
                onClick={() => setSelected(p)}
                aria-label={`Enlarge screenshot of ${p.title}`}
              >
                <Card.Img variant="top" src={p.image} alt={`Screenshot of ${p.title}`} className="project-img" />
              </button>
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <div className="badge-row mb-3">
                  {p.tags.map((t) => (
                    <Badge key={t} pill className="tag">{t}</Badge>
                  ))}
                </div>
                <Card.Text>{p.desc}</Card.Text>
                {p.link && (
                  <Button variant="outline-light" size="sm" href={p.link} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Open project
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Reveal>
        ))}
      </div>

      <Modal show={selected !== null} onHide={() => setSelected(null)} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selected?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {selected && <img src={selected.image} alt={`Full screenshot of ${selected.title}`} className="modal-img" />}
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default Projects
