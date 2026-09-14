import { useSite } from '../context/SiteContext.jsx';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';

export default function About() {
  const { t } = useSite();
  const { about } = t;

  return (
    <Section id="about" eyebrow={about.title} lead={about.lead}>
      <div className="about">
        {about.body.map((paragraph, i) => (
          <Reveal as="p" key={paragraph.slice(0, 24)} className="about__p" delay={i * 120}>
            {paragraph}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
