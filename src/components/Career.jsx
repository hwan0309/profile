import { useState } from 'react';
import { useSite } from '../context/SiteContext.jsx';
import { ChevronIcon } from './Icons.jsx';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';

function CareerItem({ item, labels, delay, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `career-panel-${item.id}`;

  return (
    <Reveal className="tl" delay={delay}>
      <p className="tl__period">
        <span className={`dot${item.current ? ' dot--live' : ''}`} aria-hidden="true" />
        {item.period}
      </p>

      <div>
        <h3 className="tl__company">{item.company}</h3>
        <p className="tl__role">{item.role}</p>
        {item.summary && <p className="tl__summary">{item.summary}</p>}

        <button
          type="button"
          className="tl__toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls={panelId}
        >
          <ChevronIcon />
          {open ? labels.toggleClose : labels.toggleOpen}
        </button>

        <div id={panelId} className={`tl__panel${open ? ' is-open' : ''}`}>
          <div>
            {item.details.map((detail) => (
              <div key={detail.title} className="detail">
                <h4 className="detail__title">{detail.title}</h4>
                <ul className="detail__list">
                  {detail.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {detail.stories?.map((story) => (
                  <article key={story.title} className="story">
                    <h5 className="story__title">{story.title}</h5>
                    {['problem', 'approach', 'result'].map((key) => (
                      <div key={key} className={`story__row story__row--${key}`}>
                        <span className="story__label">{labels.storyLabels[key]}</span>
                        <p className="story__text">{story[key]}</p>
                      </div>
                    ))}
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Career() {
  const { t } = useSite();
  const { career } = t;

  return (
    <Section id="career" eyebrow={career.title} lead={career.lead}>
      <div className="timeline">
        {career.items.map((item, i) => (
          <CareerItem
            key={item.id}
            item={item}
            labels={career}
            delay={i * 90}
            defaultOpen={i === 0}
          />
        ))}
      </div>
    </Section>
  );
}
