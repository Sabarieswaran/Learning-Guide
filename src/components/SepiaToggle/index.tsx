import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'lg-sepia-mode';
const SEPIA_ATTR = 'sepia';

/**
 * Sepia mode toggle button.
 * Sets/removes data-theme="sepia" on <html>.
 * Persists to localStorage. Works on mobile and desktop.
 */
export default function SepiaToggle(): JSX.Element {
  const [isSepia, setIsSepia] = useState(false);

  // Restore persisted preference on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'true') {
        document.documentElement.setAttribute('data-theme', SEPIA_ATTR);
        setIsSepia(true);
      }
    } catch {}
  }, []);

  const toggle = () => {
    const next = !isSepia;
    setIsSepia(next);

    if (next) {
      // Save current theme so we can restore it
      const current = document.documentElement.getAttribute('data-theme');
      if (current && current !== SEPIA_ATTR) {
        try { sessionStorage.setItem('lg-pre-sepia-theme', current); } catch {}
      }
      document.documentElement.setAttribute('data-theme', SEPIA_ATTR);
      try { localStorage.setItem(STORAGE_KEY, 'true'); } catch {}
    } else {
      let prev = 'light';
      try { prev = sessionStorage.getItem('lg-pre-sepia-theme') ?? 'light'; } catch {}
      document.documentElement.setAttribute('data-theme', prev);
      try { localStorage.setItem(STORAGE_KEY, 'false'); } catch {}
    }
  };

  return (
    <button
      className="sepia-toggle navbar__item"
      onClick={toggle}
      aria-pressed={isSepia}
      aria-label={isSepia ? 'Disable sepia mode' : 'Enable sepia mode'}
      title={isSepia ? 'Sepia mode on — click to disable' : 'Enable sepia reading mode'}
      style={{
        // Inline style ensures visibility is not overridden by Docusaurus mobile CSS
        display: 'flex',
        visibility: 'visible',
        opacity: isSepia ? 1 : 0.7,
      }}
    >
      📖
    </button>
  );
}
