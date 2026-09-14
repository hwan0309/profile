import { useSite } from '../context/SiteContext.jsx';
import { ArrowUpRightIcon, GithubIcon } from './Icons.jsx';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';

export default function OpenSource() {
  const { t } = useSite();
  const { opensource } = t;

  return (
    <Section id="opensource" eyebrow={opensource.title} lead={opensource.lead}>
      <div className="os">
        {opensource.items.map((item, i) => (
          <Reveal
            as="a"
            key={item.name}
            delay={i * 90}
            className="card os__card"
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="os__icon">
              <GithubIcon width={22} height={22} />
            </span>
            <span>
              <span className="os__name">{item.name}</span>
              <span className="os__desc">{item.desc}</span>
            </span>
            <ArrowUpRightIcon className="os__arrow" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
