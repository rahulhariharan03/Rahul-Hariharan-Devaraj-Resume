import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Summary from './summary'
import Skills from './skills'
import Experience from './professionalSummary'
import Projects from './projects'
import Education from './education'




function App() {
  return (
    <>
      <h1>Rahul Hariharan D</h1>

      <p>Software Developer | Chennai, India</p>

      <div className="contact-info">
        <a href="tel:+916374871863">
          📞 +91 6374871863
        </a>

        <span> | </span>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rahulhari266@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ✉️ rahulhari266@gmail.com
        </a>

        <span> | </span>

        <a
          href="https://www.linkedin.com/in/rahul-hariharan-devaraj-b1077020b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>

        <span> | </span>

        <a
          href="https://github.com/rahulhariharan03/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </div>

      {}
      <Summary/>
      {}
      <Skills/>
      {}
      <Experience/>
      {}
      <Projects/>
      {}
      <Education/>
    </>
  )
}

   

export default App