import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'lg-sepia-mode';
const SEPIA_ATTR = 'sepia';

/**
 * Sepia mode toggle button.
 * Adds/removes data-theme="sepia" on <html>.
 * Persists choice to localStorage.
 * Does not conflict with Docusaurus light/dark toggle —
 * sepia is a reading-comfort overlay, not a Docusaurus theme.
 */
export default function SepiaToggle(): JSX.Element {
  const [isSepia, setIsSepia] = useState(false);

  // Restore persisted preference on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'true') {
      document.documentElement.setAttribute('data-theme', SEPIA_ATTR);
      setIsSepia(true);
    }
  }, []);

  const toggle = () => {
    const next = !isSepia;
    setIsSepia(next);

    if (next) {
      // Save current light/dark theme so we can restore it
      const current = document.documentElement.getAttribute('data-theme');
      if (current && current !== SEPIA_ATTR) {
        sessionStorage.setItem('lg-pre-sepia-theme', current);
      }
      document.documentElement.setAttribute('data-theme', SEPIA_ATTR);
      localStorage.setItem(STORAGE_KEY, 'true');
    } else {
      // Restore previous light/dark theme
      const prev = sessionStorage.getItem('lg-pre-sepia-theme') ?? 'light';
      document.documentElement.setAttribute('data-theme', prev);
      localStorage.setItem(STORAGE_KEY, 'false');
    }
  };

  return (
    <button
      className="sepia-toggle navbar__item"
      onClick={toggle}
      aria-pressed={isSepia}
      aria-label={isSepia ? 'Disable sepia reading mode' : 'Enable sepia reading mode'}
      title={isSepia ? 'Sepia mode on — click to disable' : 'Enable sepia reading mode'}
    >
      📖
    </button>
  );
}
