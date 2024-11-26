import { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: true,
      collapsed: false,
      items: ['home'], // 'home.md' represents the Home page
    },
    {
      type: 'category',
      label: 'Project Overview',
      collapsible: true,
      collapsed: true,
      items: [
        'project-overview', // 'project-overview.md'
      ],
    },
    {
      type: 'category',
      label: 'User Stories',
      collapsible: true,
      collapsed: true,
      items: [
        'user-stories/general-users', // All stories are for general users
      ],
    },
    {
      type: 'category',
      label: 'Technical Design',
      collapsible: true,
      collapsed: true,
      items: [
        'technical-design/system-architecture',
        'technical-design/api-documentation',
        'technical-design/database-design',
        'technical-design/browser-extension-structure', // Specific to Chrome extension architecture
      ],
    },
    {
      type: 'category',
      label: 'Product Features',
      collapsible: true,
      collapsed: true,
      items: [
        'product-features/core-features',
        'product-features/advanced-features',
        'product-features/tagging-and-organizing', // Tagging-specific documentation
      ],
    },
    {
      type: 'category',
      label: 'Design Documentation',
      collapsible: true,
      collapsed: true,
      items: [
        'design-documentation/ui-wireframes',
        'design-documentation/style-guide',
        'design-documentation/ux-research', // UX-focused research documentation
      ],
    },
    {
      type: 'category',
      label: 'Financial Model',
      collapsible: true,
      collapsed: true,
      items: [
        'financial-model/initial-expenses',
        'financial-model/revenue-streams',
        'financial-model/pricing-strategies', // Pricing options for potential monetization
      ],
    },
    {
      type: 'category',
      label: 'Development',
      collapsible: true,
      collapsed: true,
      items: [
        'development/setup-guide',
        'development/testing',
        'development/ci-cd',
        'development/deployment', // Deployment guide specific to browser extensions
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      collapsible: true,
      collapsed: true,
      items: [
        'faq/general-faqs', // FAQs tailored for general users
        'faq/sync-faqs', // FAQs related to synchronization or cloud features
      ],
    },
  ],
};

export default sidebars;
