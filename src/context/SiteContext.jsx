import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { content } from '../data/content.js';

const STORAGE_THEME = 'profile:theme';
const STORAGE_LANG = 'profile:lang';

const SiteContext = createContext(null);

function readStored(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function initialTheme() {
  const stored = readStored(STORAGE_THEME, null);
  if (stored === 'light' || stored === 'dark') return stored;
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

function initialLang() {
  const stored = readStored(STORAGE_LANG, null);
  if (stored === 'ko' || stored === 'en') return stored;
  const nav = typeof navigator !== 'undefined' ? navigator.language : 'ko';
  return nav && nav.toLowerCase().startsWith('ko') ? 'ko' : 'en';
}

export function SiteProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme);
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_THEME, theme);
    } catch {
      /* 저장이 막힌 환경(시크릿 모드 등)에서는 무시합니다. */
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = content[lang].htmlLang;
    try {
      localStorage.setItem(STORAGE_LANG, lang);
    } catch {
      /* 위와 동일 */
    }
  }, [lang]);

  const value = useMemo(
    () => ({
      theme,
      lang,
      t: content[lang],
      toggleTheme: () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
      toggleLang: () => setLang((prev) => (prev === 'ko' ? 'en' : 'ko')),
    }),
    [theme, lang]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSite must be used inside <SiteProvider>');
  return ctx;
}
