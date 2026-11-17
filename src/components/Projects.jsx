import { useSite } from "../context/SiteContext.jsx";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import { ArrowUpRightIcon, GithubIcon } from "./Icons.jsx";

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
            {item.links && (
              <div className="proj__links">
                {item.links.demo && (
                  <a
                    className="proj__link"
                    href={item.links.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Demo <ArrowUpRightIcon width={14} height={14} />
                  </a>
                )}
                {item.links.github && (
                  <a
                    className="proj__link"
                    href={item.links.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <GithubIcon width={14} height={14} /> GitHub
                  </a>
                )}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
