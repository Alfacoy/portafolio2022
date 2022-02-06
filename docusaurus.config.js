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
        },
        blog: {
          showReadingTime: false,
          blogSidebarTitle: 'Recientes',
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
        items: [
          { type: 'doc', docId: 'intro',label: 'Notas', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contenido',
            items: [
              {
                label: 'Notas',
                to: '/docs/intro',
              }
            ],
          },
          {
            title: 'Social',
            items:
              [
                {
                  label: 'GitHub',
                  href: 'https://github.com/Alfacoy',
                },
                {
                  label: 'Linkedin',
                  href: 'https://www.linkedin.com/in/durand18/',
                },
              ]
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
