import About from './components/About.jsx';
import BackToTop from './components/BackToTop.jsx';
import Career from './components/Career.jsx';
import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import OpenSource from './components/OpenSource.jsx';
import Projects from './components/Projects.jsx';
import { useSite } from './context/SiteContext.jsx';

export default function App() {
  const { t } = useSite();

  return (
    <>
      <a className="skip-link" href="#about">
        {t.nav.about}
      </a>

      <Header />

      <main>
        <Hero />
        <About />
        <Career />
        <Projects />
        <Education />
        <OpenSource />
        <Contact />
      </main>

      <BackToTop />
    </>
  );
}
