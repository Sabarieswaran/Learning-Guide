import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

// ─────────────────────────────────────────────
// Tech color map — for left-border accents
// Topics without a specific brand color use undefined (plain --border)
// ─────────────────────────────────────────────
const TECH_COLORS: Record<string, string | undefined> = {
  HTML:                    'var(--tech-html)',
  CSS:                     'var(--tech-css)',
  JavaScript:              'var(--tech-js)',
  TypeScript:              'var(--tech-ts)',
  Angular:                 'var(--tech-angular)',
  RxJS:                    'var(--tech-rxjs)',
  'Browser Internals':     undefined,
  Performance:             undefined,
  'Frontend System Design': undefined,
  'Machine Coding':        undefined,
  'Company Guides':        undefined,
};

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const topics = [
  {
    icon: '⬜',
    title: 'HTML',
    description: 'Semantic markup, accessibility, forms, Web Components, and browser APIs.',
    category: 'Foundation',
    href: '/docs/html/introduction',
  },
  {
    icon: '⬜',
    title: 'CSS',
    description: 'Flexbox, Grid, custom properties, animations, and responsive design.',
    category: 'Foundation',
    href: '/docs/css/introduction',
  },
  {
    icon: '⬜',
    title: 'JavaScript',
    description: 'Closures, the event loop, promises, async/await, and ES2025 internals.',
    category: 'Foundation',
    href: '/docs/javascript/introduction',
  },
  {
    icon: '⬜',
    title: 'TypeScript',
    description: 'Generics, mapped types, conditional types, and strict-mode patterns.',
    category: 'Foundation',
    href: '/docs/typescript/introduction',
  },
  {
    icon: '⬜',
    title: 'Angular',
    description: 'Components, signals, routing, reactive forms, DI, and performance.',
    category: 'Core',
    href: '/docs/angular/introduction',
  },
  {
    icon: '⬜',
    title: 'RxJS',
    description: 'Observables, subjects, operators, and Angular integration patterns.',
    category: 'Core',
    href: '/docs/rxjs/introduction',
  },
  {
    icon: '⬜',
    title: 'Browser Internals',
    description: 'Rendering pipeline, event loop, memory management, and storage APIs.',
    category: 'Advanced',
    href: '/docs/browser/introduction',
  },
  {
    icon: '⬜',
    title: 'Performance',
    description: 'Core Web Vitals, lazy loading, Angular optimization, and Lighthouse patterns.',
    category: 'Advanced',
    href: '/docs/performance/introduction',
  },
  {
    icon: '⬜',
    title: 'Frontend System Design',
    description: 'Dashboards, chat apps, file upload, and component library architecture.',
    category: 'Senior',
    href: '/docs/frontend-system-design/introduction',
  },
  {
    icon: '⬜',
    title: 'Machine Coding',
    description: 'Kanban boards, tree views, and data grids built live in Angular.',
    category: 'Senior',
    href: '/docs/machine-coding/introduction',
  },
  {
    icon: '⬜',
    title: 'Company Guides',
    description: 'Interview processes and question banks for JPMorgan, Microsoft, Adobe, Flipkart, Oracle.',
    category: 'Interview',
    href: '/docs/company-guides/overview',
  },
];

const learningPaths = [
  {
    label: 'Beginner',
    title: 'Foundations',
    steps: [
      'HTML — Semantic structure & accessibility',
      'CSS — Layout, animations & responsive design',
      'JavaScript — Core language & browser APIs',
      'TypeScript — Static types & generics',
      'Angular — Components & templates',
    ],
  },
  {
    label: 'Intermediate',
    title: 'Angular Professional',
    steps: [
      'Angular — Signals, routing & forms',
      'RxJS — Reactive data flows',
      'Performance — Change detection & bundles',
      'Browser Internals — Rendering & memory',
    ],
  },
  {
    label: 'Senior / Principal',
    title: 'Interview Ready',
    steps: [
      'JavaScript Internals — Event loop & closures',
      'Angular Internals — Signals & change detection',
      'Performance — Core Web Vitals',
      'Frontend System Design — Scalable architectures',
      'Machine Coding — Live problem solving',
    ],
  },
];

const companies = [
  { name: 'JPMorgan', slug: 'jpmorgan' },
  { name: 'Microsoft', slug: 'microsoft' },
  { name: 'Adobe', slug: 'adobe' },
  { name: 'Flipkart', slug: 'flipkart' },
  { name: 'Oracle', slug: 'oracle' },
];

// ─────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────

function Hero() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
        <span className="hero-title-line1">From Junior Engineer</span>
        <span className="hero-title-line2">
          to{' '}
          <span className="hero-title-gradient">Principal.</span>
        </span>
      </h1>

      <p className="hero-subtitle">
        A structured, interview-focused handbook covering every topic a senior
        frontend engineer needs — with production Angular examples, Mermaid
        diagrams, and curated interview questions.
      </p>

      {/* 3px stack-gradient rule */}
      <span className="hero-rule" aria-hidden="true" />

      <div className="hero-actions">
        <Link className="hero-cta-primary" to="/docs/roadmap/overview">
          Start Learning
        </Link>
        <Link className="hero-cta-secondary" to="/docs/angular/introduction">
          Angular guide →
        </Link>
      </div>

      {/* Stats — plain monospace text row */}
      <div className="hero-stats" aria-label="Site statistics">
        <span className="hero-stat-item">13 topics</span>
        <span className="hero-stat-item">100+ chapters</span>
        <span className="hero-stat-item">500+ interview questions</span>
        <span className="hero-stat-item">5 company guides</span>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Topics List
// ─────────────────────────────────────────────

function TopicsSection() {
  return (
    <section className="topics-section">
      <p className="topics-section-heading">Curriculum</p>
      <h2 className="topics-section-title">Everything you need</h2>

      <ul className="topics-list" role="list">
        {topics.map((topic) => {
          const accentColor = TECH_COLORS[topic.title];
          return (
            <li key={topic.title}>
              <Link
                className="topic-row"
                to={topic.href}
                style={
                  {
                    '--row-accent': accentColor ?? 'var(--border)',
                  } as React.CSSProperties
                }
              >
                <span className="topic-row-body">
                  <span className="topic-row-title">{topic.title}</span>
                  <span className="topic-row-desc">{topic.description}</span>
                </span>
                <span className="topic-row-category">{topic.category}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// ─────────────────────────────────────────────
// Learning Paths
// ─────────────────────────────────────────────

function LearningPathsSection() {
  return (
    <section className="paths-section">
      <div className="paths-inner">
        <p className="paths-section-heading">Learning Paths</p>
        <h2 className="paths-section-title">Choose your starting point</h2>
        <div className="paths-grid">
          {learningPaths.map((path) => (
            <div key={path.title} className="path-card">
              <p className="path-card-label">{path.label}</p>
              <p className="path-card-title">{path.title}</p>
              <ul className="path-steps">
                {path.steps.map((step) => (
                  <li key={step} className="path-step">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Company Guides
// ─────────────────────────────────────────────

function CompanySection() {
  return (
    <section className="company-section">
      <p className="company-section-heading">Interview Prep</p>
      <h2 className="company-section-title">Company-specific guides</h2>
      <p className="company-section-desc">
        Tailored preparation covering interview processes, question patterns,
        and what each company focuses on.
      </p>
      <div className="company-list" role="list">
        {companies.map((company, i) => (
          <React.Fragment key={company.slug}>
            <Link
              className="company-list-link"
              to={`/docs/company-guides/${company.slug}`}
            >
              {company.name}
            </Link>
            {i < companies.length - 1 && (
              <span className="company-list-sep" aria-hidden="true">
                /
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="The world's best Angular & Frontend Engineering handbook — HTML, CSS, JavaScript, TypeScript, Angular, RxJS, Browser Internals, Performance, System Design, and interview prep."
    >
      <main>
        <Hero />
        <TopicsSection />
        <LearningPathsSection />
        <CompanySection />
      </main>
    </Layout>
  );
}
