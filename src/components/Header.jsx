import { useEffect, useState } from 'react';
import { useSite } from '../context/SiteContext.jsx';
import { NAV_IDS } from '../data/content.js';
import { useScrollSpy, useScrolledPast } from '../hooks/useScrollSpy.js';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons.jsx';

export default function Header() {
  const { t, theme, lang, toggleTheme, toggleLang } = useSite();
  const active = useScrollSpy(NAV_IDS);
  const stuck = useScrolledPast(24);
  const [menuOpen, setMenuOpen] = useState(false);

  // 드로어가 열려 있는 동안에는 뒤쪽 스크롤을 잠급니다.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
      <header className={`header${stuck ? ' is-stuck' : ''}`}>
        <div className="shell header__inner">
          <a className="brand" href="#top">
            <span className="brand__name">{t.brand.name}</span>
            <span className="brand__role">{t.brand.role}</span>
          </a>

          <nav className="nav" aria-label={t.brand.name}>
            {NAV_IDS.map((id) => (
              <a
                key={id}
                className={`nav__link${active === id ? ' is-active' : ''}`}
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
              >
                {t.nav[id]}
              </a>
            ))}
          </nav>

          <div className="toolbar">
            <button
              type="button"
              className="lang-btn"
              onClick={toggleLang}
              aria-label={t.a11y.toggleLang}
            >
              <span className={lang === 'ko' ? 'lang-btn__on' : undefined}>KO</span>
              <span aria-hidden="true">/</span>
              <span className={lang === 'en' ? 'lang-btn__on' : undefined}>EN</span>
            </button>

            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={t.a11y.toggleTheme}
              aria-pressed={theme === 'light'}
            >
              {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
            </button>

            <button
              type="button"
              className="icon-btn menu-btn"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer${menuOpen ? ' is-open' : ''}`} hidden={!menuOpen}>
        <nav className="shell" aria-label={t.a11y.openMenu}>
          {NAV_IDS.map((id, i) => (
            <a key={id} className="drawer__link" href={`#${id}`} onClick={() => setMenuOpen(false)}>
              <span>{t.nav[id]}</span>
              <span>{String(i + 1).padStart(2, '0')}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
