import { useSite } from '../context/SiteContext.jsx';
import Reveal from './Reveal.jsx';

export default function Hero() {
  const { t } = useSite();
  const { hero } = t;

  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__inner shell">
        <Reveal as="h1" className="hero__title">
          <span>{hero.greeting}</span>
          <span>{hero.role}</span>
          <span>
            <span className="hero__accent">{hero.name}</span>
            {hero.suffix}
          </span>
        </Reveal>

        {hero.tagline?.length > 0 && (
          <Reveal as="p" className="hero__tagline" delay={140}>
            {hero.tagline.map((line, i) => (
              <span key={line}>
                {line}
                {i < hero.tagline.length - 1 && <br />}
              </span>
            ))}
          </Reveal>
        )}

        <Reveal className="hero__cta" delay={160}>
          <a className="btn btn--primary" href="#career">
            {hero.cta.primary}
          </a>
          <a className="btn btn--ghost" href="#contact">
            {hero.cta.secondary}
          </a>
        </Reveal>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>{hero.scroll}</span>
        <span className="scroll-hint__line" />
      </div>
    </section>
  );
}
