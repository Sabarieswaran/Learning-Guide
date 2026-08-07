import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // Task 5 — rename to The Frontend Handbook
  title: 'The Frontend Handbook',
  tagline: 'From Junior Engineer to Principal — the complete Angular & Frontend guide',
  favicon: 'img/favicon.svg',

  url: 'https://sabarieswaran.github.io',
  baseUrl: '/Learning-Guide/',

  organizationName: 'sabarieswaran',
  projectName: 'Learning-Guide',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  headTags: [
    // Preconnect for faster font loading
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    // Atkinson Hyperlegible (body) + JetBrains Mono (code)
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=JetBrains+Mono:wght@400;500;600&display=swap',
      },
    },
  ],

  markdown: {
    mermaid: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/sabarieswaran/Learning-Guide/tree/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og-image.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      // Task 5 — updated title + TFH logo
      title: 'The Frontend Handbook',
      logo: {
        alt: 'TFH — The Frontend Handbook',
        src: 'img/tfh-logo.svg',
        srcDark: 'img/tfh-logo-dark.svg',
        width: 32,
        height: 32,
      },
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'roadmapSidebar',
          position: 'left',
          label: 'Roadmap',
        },
        {
          type: 'docSidebar',
          sidebarId: 'htmlSidebar',
          position: 'left',
          label: 'HTML',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cssSidebar',
          position: 'left',
          label: 'CSS',
        },
        {
          type: 'docSidebar',
          sidebarId: 'javascriptSidebar',
          position: 'left',
          label: 'JavaScript',
        },
        {
          type: 'docSidebar',
          sidebarId: 'typescriptSidebar',
          position: 'left',
          label: 'TypeScript',
        },
        {
          type: 'docSidebar',
          sidebarId: 'angularSidebar',
          position: 'left',
          label: 'Angular',
        },
        {
          type: 'dropdown',
          label: 'More',
          position: 'left',
          items: [
            { type: 'docSidebar', sidebarId: 'rxjsSidebar', label: 'RxJS' },
            { type: 'docSidebar', sidebarId: 'browserSidebar', label: 'Browser Internals' },
            { type: 'docSidebar', sidebarId: 'performanceSidebar', label: 'Performance' },
            { type: 'docSidebar', sidebarId: 'systemDesignSidebar', label: 'System Design' },
            { type: 'docSidebar', sidebarId: 'machineCodingSidebar', label: 'Machine Coding' },
            { type: 'docSidebar', sidebarId: 'companyGuidesSidebar', label: 'Company Guides' },
          ],
        },
        // Sepia toggle — stays
        {
          type: 'custom-sepia-toggle',
          position: 'right',
        },
        // Task 4 — GitHub link REMOVED from navbar
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Foundations',
          items: [
            { label: 'Roadmap', to: '/docs/roadmap/overview' },
            { label: 'HTML', to: '/docs/html/introduction' },
            { label: 'CSS', to: '/docs/css/introduction' },
            { label: 'JavaScript', to: '/docs/javascript/introduction' },
            { label: 'TypeScript', to: '/docs/typescript/introduction' },
          ],
        },
        {
          title: 'Angular',
          items: [
            { label: 'Angular Core', to: '/docs/angular/introduction' },
            { label: 'Signals', to: '/docs/angular/signals' },
            { label: 'RxJS', to: '/docs/rxjs/introduction' },
            { label: 'Performance', to: '/docs/performance/introduction' },
          ],
        },
        {
          title: 'Advanced',
          items: [
            { label: 'Browser Internals', to: '/docs/browser/introduction' },
            { label: 'System Design', to: '/docs/frontend-system-design/introduction' },
            { label: 'Machine Coding', to: '/docs/machine-coding/introduction' },
          ],
        },
        {
          title: 'Interview Prep',
          items: [
            { label: 'Company Guides', to: '/docs/company-guides/overview' },
            { label: 'JPMorgan', to: '/docs/company-guides/jpmorgan' },
            { label: 'Microsoft', to: '/docs/company-guides/microsoft' },
            // Task 4 — GitHub link REMOVED from footer
          ],
        },
      ],
      // Task 1 — copyright removed (field omitted entirely)
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: [
        'typescript', 'javascript', 'bash', 'json',
        'css', 'scss', 'diff', 'yaml',
      ],
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
