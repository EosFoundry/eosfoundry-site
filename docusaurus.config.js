// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const sidebars = require('./sidebars.js')
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const libraryFooterItems = []
// @ts-ignore
sidebars.library.forEach((item) => {
  if (typeof item !== 'string' && item.type === 'category') {
    libraryFooterItems.push({
      label: item.label,
      to: '/docs/' + item.items[0].dirName + '/'
    })
  }
})
console.log(libraryFooterItems)

// const libraryDropdownItems = []
// for (const itemName in sidebar) {
//   console.log(sidebar[itemName])
//   let dirName = sidebar[itemName][0].dirName
//   let label = ''

//   if (itemName === 'api') {
//     label = 'API'
//   } else {
//     let words = dirName.split('-')
//     words.forEach((word) => {
//       label += word.charAt(0).toUpperCase() + word.slice(1)
//       label += ' '
//     })
//     label = label.trim()
//   }
//   libraryDropdownItems.push({
//     type: 'docSidebar',
//     sidebarId: itemName,
//     label: label
//   })
// }
// console.log(libraryDropdownItems)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EosFoundry',
  tagline: 'let\'s get sh*ft done',
  url: 'https://eosfoundry.dev',
  customFields: {
    hostname: process.env.NODE_ENV === 'production'? 'https://eosfoundry.dev': 'http://localhost:8000'
  },
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EosFoundry', // Usually your GitHub org/user name.
  projectName: 'makeshift-site', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/EosFoundry/eosfoundry-site/blob/main/',
        },
        blog: {
          // showReadingTime: true,
          // // Please change this to your repo.
          // // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https:github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss'),
            require.resolve('./src/css/fonts.scss'),
          ]
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
        title: 'eosfoundry.dev',
        hideOnScroll: true,
        logo: {
          alt: 'EosFoundry Logo',
          src: 'img/logo.svg',
          width: 64,
          height: 64,
        },
        items: [
          {
            type: 'docSidebar',
            label: 'Library',
            position: 'left',
            sidebarId: 'library',
          },
          {
            label: 'FAQ',
            position: 'left',
            to: 'docs/makeshift-faq',
          },
          {
            label: 'Blag',
            position: 'left',
            to: 'blog'
          },
          {
            label: 'Shop',
            position: 'left',
            to: 'shop'
          },
          // {
          //   type: 'dropdown',
          //   position: 'left',
          //   label: 'Library',
          //   items: libraryDropdownItems
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/EosFoundry/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Library',
            items: libraryFooterItems,
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/hPw4j3vfCT',
              },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EosFoundry Ltd. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
