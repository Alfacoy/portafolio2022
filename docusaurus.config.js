const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Brian Durand',
  tagline: 'Frontend Developer',
  url: 'https://durandbrian.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Alfacoy',
  projectName: 'portafolio_v3',
 /*  customFields: {
    pepe: 'hola mundo',
  }, */

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Alfacoy/portafolio_v3',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Los más recientes',
          editUrl: 'https://github.com/Alfacoy/portafolio_v3',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Brian Durand',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          { type: 'doc', docId: 'intro',label: 'Docs', position: 'right' },
          { to: '/blog', label: 'Blog', position: 'right' },
          { href: 'https://github.com/Alfacoy', label: 'Github',position: 'right'}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Alfacoy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Brian Durand`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
