import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} John Clement Navarro. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://github.com/ment-00" aria-label="GitHub" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/john-clement-navarro" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="mailto:workgmail010@gmail.com" aria-label="Email"><FaEnvelope /></a>
        <a href="#home" aria-label="Back to top"><FaArrowUp /></a>
      </div>
    </footer>
  )
}

export default Footer
