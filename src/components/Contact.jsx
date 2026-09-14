import { useSite } from '../context/SiteContext.jsx';
import { ArrowUpRightIcon } from './Icons.jsx';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';

export default function Contact() {
  const { t } = useSite();
  const { contact } = t;

  return (
    <Section id="contact" eyebrow={contact.title} lead={contact.lead} className="contact">
      <div className="contact__list">
        {contact.items.map((item, i) => {
          // mailto: 는 새 탭으로 열 대상이 아니라서 target/rel 을 붙이지 않습니다.
          const external = !item.href.startsWith('mailto:');

          return (
          <Reveal
            as="a"
            key={item.label}
            delay={i * 110}
            className="card contact__card"
            href={item.href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer noopener' : undefined}
          >
            <span className="contact__label">{item.label}</span>
            <span className="contact__value">
              {item.value}
              <ArrowUpRightIcon width={15} height={15} />
            </span>
          </Reveal>
          );
        })}
      </div>

      <Reveal as="p" className="footnote" delay={220}>
        {contact.footnote}
      </Reveal>
    </Section>
  );
}
