import { Card, ListGroup, Badge, Button, Tabs, Tab } from 'react-bootstrap'
import { FaGraduationCap, FaBriefcase, FaTools, FaDownload, FaSmile } from 'react-icons/fa'
import Reveal from './Reveal'

const skills = ['Java', 'Python', 'MySql', 'HTML', 'CSS', 'Networking Fundamentals', 'Cybersecurity Essentials']
const interests = ['Networking', 'Cybersecurity', 'Emerging technologies', 'Hands-on projects']

function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <h2 className="section-title">About me</h2>
      </Reveal>
      <div className="about-layout">
        <div className="about-main">
          <Reveal>
            <Card className="soft-card">
              <Card.Body>
                <Card.Title><FaSmile /> Get to know me</Card.Title>
                <Tabs defaultActiveKey="who" variant="pills" className="mb-3 gap-2">
                  <Tab eventKey="who" title="Who I am">
                    <p>
                      I'm John Clement Navarro, an Information Technology student in the Philippines with a growing interest in networking, cybersecurity, and software development. I'm drawn to understanding how technology works beneath the surface, from how systems communicate and information moves to how different components come together to create something functional. I enjoy putting these ideas into practice through hands-on activities and projects that address real-world problems.

My approach is driven by curiosity, experimentation, and continuous learning. Whether developing applications, exploring network infrastructure, or learning about system security, I value the process of understanding the details and finding practical ways to apply them. I believe good technology is not necessarily about complexity, but about creating solutions that are reliable, purposeful, and easy to use.
                    </p>
                  </Tab>
                  <Tab eventKey="interests" title="Interests">
                    <div className="badge-row">
                      {interests.map((i) => (
                        <Badge key={i} pill className="tag">{i}</Badge>
                      ))}
                    </div>
                  </Tab>
                  <Tab eventKey="fun" title="Fun facts">
                    <ListGroup variant="flush">
                      <ListGroup.Item>I like going on a walk</ListGroup.Item>
                      <ListGroup.Item>I waste my time on watching films, animes and listening to music</ListGroup.Item>
                    </ListGroup>
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card className="soft-card">
              <Card.Body>
                <Card.Title><FaGraduationCap /> Education</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Bachelor of Science in Information Technology</strong>
                    <span className="meta">University of San Agustin, 2024 to present</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Senior High School</strong>
                    <span className="meta">Santa Barbara National Comprehensive High School</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Reveal>

          <Reveal delay={200}>
            <Card className="soft-card">
              <Card.Body>
                <Card.Title><FaBriefcase /> Experience</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Freelance Technical Support</strong>
                    <span className="meta">Independent/Remote, 2021</span>
                    <span>Strengthened technical problem-solving and remote communication skills.</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Reveal>
        </div>

        <aside className="about-side">
          <Reveal delay={150}>
            <Card className="soft-card">
              <Card.Body>
                <Card.Title><FaTools /> Skills</Card.Title>
                <div className="badge-row">
                  {skills.map((s) => (
                    <Badge key={s} pill className="tag">{s}</Badge>
                  ))}
                </div>
                <Button as="a" className="btn-accent mt-4" href="/Resume.pdf" download>
  <FaDownload /> Download resume
</Button>
              </Card.Body>
            </Card>
          </Reveal>
        </aside>
      </div>
    </section>
  )
}

export default About
