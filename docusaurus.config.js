// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Superellipsoids',
  tagline: 'More cool shapes with Blender\'s default primitives',
  favicon: 'img/favicon.ico',


  // Set the production url of your site her
  url: 'https://superellipsoids.web.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: 'superellipsoidblender', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/somtoChukwun/superellipsoids/tree/main/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     '',
        // },
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Superellipsoids',
        logo: {
          alt: 'Superellipsoids Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Get Started',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/somtoChukwun/superellipsoids/tree/main/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro', 
              },
            ],
          },
          {
            title: 'Share Concerns and Ideas',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/somtoChukwun/superellipsoids',
              },
            ],
          },
          {
            title: 'Learn More',
            items: [
              {
                label: 'Superellipsoids on Wikipedia',
                href: 'https://en.wikipedia.org/wiki/Superellipsoid',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Superellispoids for Geometry Nodes. Built by Nmesoma`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.shadesOfPurple,
      }, 
    }),
};

export default config;
