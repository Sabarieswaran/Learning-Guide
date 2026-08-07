import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  roadmapSidebar: [
    {
      type: 'category',
      label: 'Learning Roadmap',
      collapsed: false,
      items: [
        'roadmap/overview',
        'roadmap/beginner-path',
        'roadmap/angular-professional-path',
        'roadmap/senior-interview-path',
      ],
    },
  ],

  htmlSidebar: [
    {
      type: 'category',
      label: 'HTML',
      collapsed: false,
      items: [
        'html/introduction',
        {
          type: 'category',
          label: 'Fundamentals',
          items: [
            'html/document-structure',
            'html/semantic-elements',
            'html/text-content',
            'html/links-and-navigation',
            'html/images-and-media',
          ],
        },
        {
          type: 'category',
          label: 'Intermediate',
          items: [
            'html/forms',
            'html/tables',
            'html/accessibility',
            'html/seo',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'html/svg',
            'html/canvas',
            'html/web-components',
            'html/apis',
          ],
        },
        'html/best-practices',
        'html/interview-questions',
        'html/cheat-sheet',
      ],
    },
  ],

  cssSidebar: [
    {
      type: 'category',
      label: 'CSS',
      collapsed: false,
      items: [
        'css/introduction',
        {
          type: 'category',
          label: 'Fundamentals',
          items: [
            'css/box-model',
            'css/selectors',
            'css/specificity',
            'css/cascade',
            'css/typography',
            'css/colors',
          ],
        },
        {
          type: 'category',
          label: 'Layout',
          items: [
            'css/flexbox',
            'css/grid',
            'css/positioning',
            'css/responsive-design',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'css/custom-properties',
            'css/animations',
            'css/transforms',
            'css/performance',
          ],
        },
        'css/best-practices',
        'css/interview-questions',
        'css/cheat-sheet',
      ],
    },
  ],

  javascriptSidebar: [
    {
      type: 'category',
      label: 'JavaScript',
      collapsed: false,
      items: [
        'javascript/introduction',
        {
          type: 'category',
          label: 'Core Language',
          items: [
            'javascript/data-types',
            'javascript/variables',
            'javascript/functions',
            'javascript/objects',
            'javascript/arrays',
            'javascript/classes',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Concepts',
          items: [
            'javascript/closures',
            'javascript/prototypes',
            'javascript/event-loop',
            'javascript/promises',
            'javascript/async-await',
            'javascript/modules',
            'javascript/generators',
          ],
        },
        {
          type: 'category',
          label: 'Browser APIs',
          items: [
            'javascript/dom-manipulation',
            'javascript/fetch-api',
            'javascript/web-workers',
            'javascript/storage',
          ],
        },
        'javascript/best-practices',
        'javascript/interview-questions',
        'javascript/cheat-sheet',
      ],
    },
  ],

  typescriptSidebar: [
    {
      type: 'category',
      label: 'TypeScript',
      collapsed: false,
      items: [
        'typescript/introduction',
        {
          type: 'category',
          label: 'Type System',
          items: [
            'typescript/basic-types',
            'typescript/interfaces',
            'typescript/type-aliases',
            'typescript/generics',
            'typescript/utility-types',
            'typescript/mapped-types',
            'typescript/conditional-types',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'typescript/decorators',
            'typescript/strict-mode',
            'typescript/module-system',
            'typescript/compiler-options',
          ],
        },
        'typescript/angular-integration',
        'typescript/best-practices',
        'typescript/interview-questions',
        'typescript/cheat-sheet',
      ],
    },
  ],

  angularSidebar: [
    {
      type: 'category',
      label: 'Angular',
      collapsed: false,
      items: [
        'angular/introduction',
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            'angular/components',
            'angular/templates',
            'angular/directives',
            'angular/pipes',
            'angular/services',
            'angular/dependency-injection',
            'angular/modules',
          ],
        },
        {
          type: 'category',
          label: 'Modern Angular',
          items: [
            'angular/standalone-components',
            'angular/signals',
            'angular/control-flow',
            'angular/deferred-loading',
          ],
        },
        {
          type: 'category',
          label: 'Routing',
          items: [
            'angular/routing-basics',
            'angular/lazy-loading',
            'angular/guards',
            'angular/resolvers',
          ],
        },
        {
          type: 'category',
          label: 'Forms',
          items: [
            'angular/template-driven-forms',
            'angular/reactive-forms',
            'angular/form-validation',
            'angular/custom-validators',
          ],
        },
        {
          type: 'category',
          label: 'Performance',
          items: [
            'angular/change-detection',
            'angular/onpush-strategy',
            'angular/track-by',
            'angular/bundle-optimization',
          ],
        },
        'angular/best-practices',
        'angular/interview-questions',
        'angular/cheat-sheet',
      ],
    },
  ],

  rxjsSidebar: [
    {
      type: 'category',
      label: 'RxJS',
      collapsed: false,
      items: [
        'rxjs/introduction',
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            'rxjs/observables',
            'rxjs/subjects',
            'rxjs/operators',
            'rxjs/schedulers',
          ],
        },
        {
          type: 'category',
          label: 'Operators',
          items: [
            'rxjs/creation-operators',
            'rxjs/transformation-operators',
            'rxjs/filtering-operators',
            'rxjs/combination-operators',
            'rxjs/error-handling',
          ],
        },
        'rxjs/angular-patterns',
        'rxjs/best-practices',
        'rxjs/interview-questions',
        'rxjs/cheat-sheet',
      ],
    },
  ],

  browserSidebar: [
    {
      type: 'category',
      label: 'Browser Internals',
      collapsed: false,
      items: [
        'browser/introduction',
        'browser/rendering-pipeline',
        'browser/event-loop',
        'browser/memory-management',
        'browser/storage',
        'browser/security',
        'browser/interview-questions',
        'browser/cheat-sheet',
      ],
    },
  ],

  performanceSidebar: [
    {
      type: 'category',
      label: 'Performance',
      collapsed: false,
      items: [
        'performance/introduction',
        'performance/core-web-vitals',
        'performance/network-optimization',
        'performance/rendering-performance',
        'performance/angular-performance',
        'performance/image-optimization',
        'performance/caching',
        'performance/interview-questions',
        'performance/cheat-sheet',
      ],
    },
  ],

  systemDesignSidebar: [
    {
      type: 'category',
      label: 'Frontend System Design',
      collapsed: false,
      items: [
        'frontend-system-design/introduction',
        'frontend-system-design/design-framework',
        'frontend-system-design/dashboard',
        'frontend-system-design/chat-application',
        'frontend-system-design/file-upload',
        'frontend-system-design/component-library',
        'frontend-system-design/interview-questions',
        'frontend-system-design/cheat-sheet',
      ],
    },
  ],

  machineCodingSidebar: [
    {
      type: 'category',
      label: 'Machine Coding',
      collapsed: false,
      items: [
        'machine-coding/introduction',
        'machine-coding/approach-framework',
        'machine-coding/kanban-board',
        'machine-coding/tree-view',
        'machine-coding/data-grid',
        'machine-coding/interview-questions',
        'machine-coding/cheat-sheet',
      ],
    },
  ],

  companyGuidesSidebar: [
    {
      type: 'category',
      label: 'Company Interview Guides',
      collapsed: false,
      items: [
        'company-guides/overview',
        'company-guides/jpmorgan',
        'company-guides/microsoft',
        'company-guides/adobe',
        'company-guides/flipkart',
        'company-guides/oracle',
      ],
    },
  ],
};

export default sidebars;
