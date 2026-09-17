// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  markdown: {
    mermaid: true,
  },

  title: 'CompanyName ProductName',
  tagline: 'fdkgfdlgdlfghfldgd',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jimken123.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusaurus/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'docusaurus', // Usually your GitHub org/user name.
  projectName: 'jimken123.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          includeCurrentVersion: false,
          exclude: ['**/operations/**'], // Exclude this folder
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Release Notes',
          blogSidebarTitle: 'Release Notes',
          blogSidebarCount: 4,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/phoenix.svg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Foo Documentation',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Release Notes', position: 'left'},
          {to: '/upgrade-guide', label: 'Upgrade Guide', position: 'left'},
          //{
          //  type: 'localeDropdown',
          //  position: 'left',
          //},
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/jimken123/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
        alt: 'foo',
        src: 'img/white-logo.png',
        href: 'https://example.com',
      },      
        copyright: `©${new Date().getFullYear()} Foo`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'upgrade-guide',
        path: 'upgrade-guide',
        routeBasePath: 'upgrade-guide',
        blogTitle: 'Upgrade Guide',
        blogSidebarTitle: 'Upgrade Guide',
        blogSidebarCount: 4,
        authorsMapPath: '../blog/authors.yml',
        tags: '../blog/tags.yml',
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
};

export default config;
