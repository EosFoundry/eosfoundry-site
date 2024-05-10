// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer'
import sidebars from './sidebars.js'
// const navbar = require('./navbar.js')
// const footer = require('./footer.js')

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


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Home of the MakeShift',
  tagline: 'let\'s get sh*ft done',
  url: 'https://eosfoundry.dev',
  organizationName: "EosFoundry",
  projectName: "eosfoundry-site",
  deploymentBranch: "main",
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true
  },
  themes: ['@docusaurus/theme-mermaid'],
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
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      }
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
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
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/fonts.scss'),
          ]
        },
      }),
    ],
  ],

  themeConfig:
    /** type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        // title: 'Home',
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
            label: 'Docs',
            position: 'left',
            sidebarId: 'library',
          },
          {
            label: 'Overview',
            position: 'left',
            to: '/docs/overview'
          },
          // {
          //   label: 'Get a MakeShift',
          //   position: 'left',
          //   to: 'shop'
          // },
          {
            label: 'Get the Software',
            position: 'left',
            to: 'software'
          },
          {
            label: 'Blog',
            position: 'left',
            to: 'blog'
          },
          {
            label: 'Support Us',
            position: 'right',
            to: 'support'
          },
          {
            href: 'https://github.com/EosFoundry/',
            label: 'GitHub',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
  {
            title: 'Library',
            items: libraryFooterItems,
          },
          {
            title: 'Follow Us',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/hPw4j3vfCT',
              },
              {
                label: 'Twitch',
                href: 'https://www.twitch.tv/eosfoundry',
              },
              {
                label: 'Twitter',
                href: 'https://www.twitter.com/EosFoundry',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/eosfoundry/',
              },
            ],
          },
          {
            title: 'Eos Foundry',
            items: [
              {
                label: 'About Us',
                to: 'about-us'
              },
              {
                label: 'Get In Touch',
                href: 'mailto:hello@eosfoundry.dev',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy',
                to: 'privacy'
              },
              {
                label: 'Terms of Service',
                to: 'terms'
              },
              {
                label: 'Shipping, Refunds, Return',
                to: 'shipping-refunds-returns'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EosFoundry Ltd. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
