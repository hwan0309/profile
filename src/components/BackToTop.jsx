import { useSite } from '../context/SiteContext.jsx';
import { useScrolledPast } from '../hooks/useScrollSpy.js';
import { ArrowUpIcon } from './Icons.jsx';

export default function BackToTop() {
  const { t } = useSite();
  const shown = useScrolledPast(600);

  return (
    <button
      type="button"
      className={`to-top${shown ? ' is-shown' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t.a11y.toTop}
      tabIndex={shown ? 0 : -1}
    >
      <ArrowUpIcon />
    </button>
  );
}
