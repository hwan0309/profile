import { useSite } from '../context/SiteContext.jsx';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';

export default function Education() {
  const { t } = useSite();
  const { education } = t;

  return (
    <Section id="education" eyebrow={education.title} lead={education.lead}>
      <div className="timeline">
        {education.items.map((item, i) => (
          <Reveal key={item.name} className="tl" delay={i * 90}>
            <p className="tl__period">
              <span className="dot" aria-hidden="true" />
              {item.period}
            </p>

            <div>
              <h3 className="tl__company">{item.name}</h3>
              <p className="tl__role">{item.role}</p>
              <ul className="detail__list tl__points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
