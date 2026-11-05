import './App.css'
import Header from './components/Header/Header.jsx'
import Hero from './Sections/Hero/Hero.jsx'
import SkillsMarquee from './Sections/SkillsMarquee/SkillsMarquee.jsx'
import Projects from './Sections/Projects/Projects.jsx'
import About from './Sections/About/About.jsx'
import Experience from './Sections/Experience/Experience.jsx'
import Contact from './Sections/Contact/Contact.jsx'
import SmoothScroll from './components/ui/smooth-scroll'
import ProjectDetails from './pages/ProjectDetails.jsx'
import ContelarCaseStudy from './pages/ContelarCaseStudy.jsx'
import { projects } from './data/projects'

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '')
  if (pathname.startsWith('/projetos/')) {
    const project = projects.find((item) => item.href === pathname)
    if (project?.id === '02') return <ContelarCaseStudy />
    return <ProjectDetails project={project} />
  }

  return (
    <SmoothScroll>
      <div className="app">
        <Header/>
        <Hero/>
      </div>
      <SkillsMarquee/>
      <Projects/>
      <About/>
      <Experience/>
      <Contact/>
    </SmoothScroll>
  )
}
export default App
