import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Clients from './components/Clients.jsx'
import Integrations from './components/Integrations.jsx'
import Statement from './components/Statement.jsx'
import Services from './components/Services.jsx'
import Models from './components/Models.jsx'
import Plans from './components/Plans.jsx'
import Pricing from './components/Pricing.jsx'
import Process from './components/Process.jsx'
import Cases from './components/Cases.jsx'
import About from './components/About.jsx'
import CtaBand from './components/CtaBand.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Clients />
      <main>
        <Statement />
        <Services />
        <Integrations />
        <Models />
        <Plans />
        <Pricing />
        <Process />
        <Cases />
        <About />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
