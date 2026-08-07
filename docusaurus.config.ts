import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Learning Guide',
  tagline: "The world's best Angular & Frontend Engineering handbook",
  favicon: 'img/favicon.ico',

  url: 'https://sabarieswaran.github.io',
  baseUrl: '/Learning-Guide/',

  organizationName: 'sabarieswaran',
  projectName: 'Learning-Guide',
  trailingSlash: false,

  onBrokenLinks: 'warn',

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
      title: 'Learning Guide',
      logo: {
        alt: 'Learning Guide Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
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
        {
          type: 'custom-sepia-toggle',
          position: 'right',
        },
        {
          href: 'https://github.com/sabarieswaran/Learning-Guide',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
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
          title: 'Interview',
          items: [
            { label: 'Company Guides', to: '/docs/company-guides/overview' },
            { label: 'JPMorgan', to: '/docs/company-guides/jpmorgan' },
            { label: 'Microsoft', to: '/docs/company-guides/microsoft' },
            { label: 'GitHub', href: 'https://github.com/sabarieswaran/Learning-Guide' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Learning Guide. Built with Docusaurus.`,
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
