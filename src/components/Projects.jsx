import { useSite } from '../context/SiteContext.jsx';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';

export default function Projects() {
  const { t } = useSite();
  const { projects } = t;

  return (
    <Section id="projects" eyebrow={projects.title} lead={projects.lead}>
      <div className="projects">
        {projects.items.map((item, i) => (
          <Reveal key={item.title} className="card" delay={i * 90}>
            <p className="proj__meta">{item.meta}</p>
            <h3 className="proj__title">{item.title}</h3>
            <p className="proj__body">{item.body}</p>
            <ul className="tags">
              {item.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
