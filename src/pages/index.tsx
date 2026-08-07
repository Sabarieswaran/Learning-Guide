import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const topics = [
  {
    icon: '🌐',
    title: 'HTML',
    description:
      'Semantic markup, accessibility, forms, Web Components, and browser APIs. The foundation every frontend engineer must master.',
    badge: 'Foundation',
    href: '/docs/html/introduction',
  },
  {
    icon: '🎨',
    title: 'CSS',
    description:
      'Flexbox, Grid, custom properties, animations, and responsive design. Write stylesheets that scale across every viewport.',
    badge: 'Foundation',
    href: '/docs/css/introduction',
  },
  {
    icon: '⚡',
    title: 'JavaScript',
    description:
      'Closures, the event loop, promises, async/await, and ES2025. Deep internals and practical patterns for production code.',
    badge: 'Foundation',
    href: '/docs/javascript/introduction',
  },
  {
    icon: '🔷',
    title: 'TypeScript',
    description:
      'Advanced type system, generics, mapped types, conditional types, and strict-mode patterns for enterprise codebases.',
    badge: 'Foundation',
    href: '/docs/typescript/introduction',
  },
  {
    icon: '🔴',
    title: 'Angular',
    description:
      'Components, signals, routing, reactive forms, dependency injection, and performance patterns used in production apps.',
    badge: 'Core',
    href: '/docs/angular/introduction',
  },
  {
    icon: '♻️',
    title: 'RxJS',
    description:
      'Observables, subjects, operators, and Angular integration patterns. Build reactive data flows with confidence.',
    badge: 'Core',
    href: '/docs/rxjs/introduction',
  },
  {
    icon: '🧠',
    title: 'Browser Internals',
    description:
      'Rendering pipeline, event loop, memory management, and storage APIs. Know what happens from URL to pixel.',
    badge: 'Advanced',
    href: '/docs/browser/introduction',
  },
  {
    icon: '🚀',
    title: 'Performance',
    description:
      'Core Web Vitals, lazy loading, Angular optimization, and Lighthouse 100 patterns. Build fast by default.',
    badge: 'Advanced',
    href: '/docs/performance/introduction',
  },
  {
    icon: '🏗️',
    title: 'Frontend System Design',
    description:
      'Design dashboards, chat systems, and component libraries at scale. Ace the senior-level system design interview.',
    badge: 'Senior',
    href: '/docs/frontend-system-design/introduction',
  },
  {
    icon: '💻',
    title: 'Machine Coding',
    description:
      'Kanban boards, tree views, and data grids built from scratch in Angular. Structured approach for live coding rounds.',
    badge: 'Senior',
    href: '/docs/machine-coding/introduction',
  },
  {
    icon: '🏢',
    title: 'Company Guides',
    description:
      'Interview processes, question banks, and preparation strategies for JPMorgan, Microsoft, Adobe, Flipkart, and Oracle.',
    badge: 'Interview',
    href: '/docs/company-guides/overview',
  },
];

const learningPaths = [
  {
    icon: '🌱',
    title: 'Beginner Path',
    level: 'Beginner',
    steps: [
      'HTML — Semantic structure & accessibility',
      'CSS — Layout, animations & responsive design',
      'JavaScript — Core language & browser APIs',
      'TypeScript — Static types & generics',
      'Angular Basics — Components & templates',
    ],
  },
  {
    icon: '⚡',
    title: 'Angular Professional',
    level: 'Intermediate → Advanced',
    steps: [
      'Angular — Signals, routing & forms',
      'RxJS — Reactive data flows',
      'Performance — Change detection & bundles',
      'Browser Internals — Rendering & memory',
    ],
  },
  {
    icon: '🎯',
    title: 'Senior Interview',
    level: 'Senior / Principal',
    steps: [
      'JavaScript Internals — Event loop & closures',
      'Angular Internals — Signals & change detection',
      'Performance — Core Web Vitals',
      'Frontend System Design — Scalable architectures',
      'Machine Coding — Live problem solving',
      'Company Guides — Targeted interview prep',
    ],
  },
];

// ─────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-badge">
        <span>📘</span> The Frontend Handbook
      </div>

      <h1 className="hero-title">
        Your Complete{' '}
        <span className="accent">Frontend Guide</span>
      </h1>

      <p className="hero-subtitle">
        A collection of guides, examples, interview questions, and best
        practices for modern frontend engineers.
      </p>

      <div className="hero-actions">
        <Link
          className="button button--primary button--lg"
          to="/docs/roadmap/overview"
        >
          Start Learning
        </Link>
        <Link
          className="button button--secondary button--lg"
          to="/docs/angular/introduction"
        >
          Angular Guide →
        </Link>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat-value">13</span>
          <span className="hero-stat-label">Topics</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-value">100+</span>
          <span className="hero-stat-label">Chapters</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-value">500+</span>
          <span className="hero-stat-label">Interview Qs</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-value">5</span>
          <span className="hero-stat-label">Company Guides</span>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Topics
// ─────────────────────────────────────────────

function TopicsSection() {
  return (
    <section className="features-section">
      <h2 className="features-section-title">Everything you need</h2>
      <p className="features-section-subtitle">
        From HTML fundamentals to Principal-level system design, every
        topic is covered with depth, diagrams, and real examples.
      </p>
      <div className="features-grid">
        {topics.map((topic) => (
          <Link key={topic.title} className="feature-card" to={topic.href}>
            <span className="feature-card-icon">{topic.icon}</span>
            <h3 className="feature-card-title">{topic.title}</h3>
            <p className="feature-card-description">{topic.description}</p>
            <span className="feature-card-badge">{topic.badge}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Learning Paths
// ─────────────────────────────────────────────

function LearningPathsSection() {
  return (
    <section className="paths-section">
      <h2 className="features-section-title">Choose your path</h2>
      <p className="features-section-subtitle">
        Structured learning paths designed around where you are and where
        you want to go.
      </p>
      <div className="paths-grid">
        {learningPaths.map((path) => (
          <div key={path.title} className="path-card">
            <div className="path-card-header">
              <div className="path-card-icon">{path.icon}</div>
              <div>
                <p className="path-card-title">{path.title}</p>
                <p className="path-card-level">{path.level}</p>
              </div>
            </div>
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
    </section>
  );
}

// ─────────────────────────────────────────────
// Company Guides
// ─────────────────────────────────────────────

function CompanySection() {
  const companies = ['JPMorgan', 'Microsoft', 'Adobe', 'Flipkart', 'Oracle'];
  return (
    <section className="interview-section">
      <h2 className="features-section-title">Company-specific prep</h2>
      <p className="features-section-subtitle">
        Tailored guides covering interview processes, patterns, and the
        exact questions each company focuses on.
      </p>
      <div className="interview-badge-list">
        {companies.map((company) => (
          <Link
            key={company}
            className="interview-badge"
            to={`/docs/company-guides/${company.toLowerCase()}`}
          >
            {company}
          </Link>
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
      title="The Frontend Handbook"
      description="Your complete frontend guide — guides, examples, interview questions, and best practices for modern frontend engineers."
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
