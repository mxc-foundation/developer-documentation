const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'zh-CN', 'zh-TW'],
  },
  plugins: [
    [
      'docusaurus2-dotenv',
      {
        systemvars: true,
      },
    ],
  ],
  title: 'MXC Dev Docs',
  tagline: 'Your Guide to the MXC Ecosystem',
  url: 'https://dev.mxc.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'mxc-foundation', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Developer Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'tutorials/intro',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'api/intro',
          position: 'left',
          label: 'API',
        },
        {
          type: 'doc',
          docId: 'whitepapers/intro',
          position: 'left',
          label: 'Whitepapers',
        },
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          //label: 'Telegram',
          href: 'https://mxc.news/telegram',
          position: 'right',
          className: "header-telegram-link",
          "aria-label": "Telegram",
        },
        {
          //label: 'Discord',
          href: 'https://discord.gg/mxcfoundation',
          position: 'right',
          className: "header-discord-link",
          "aria-label": "Discord",

        },
        {
          //label: 'Twitter',
          href: 'https://twitter.com/mxcfoundation',
          position: 'right',
          className: "header-twitter-link",
          "aria-label": "twitter",
        },
        {
          //label: 'YouTube',
          href: 'https://www.youtube.com/c/MXCFoundation',
          position: 'right',
          className: "header-youtube-link",
          "aria-label": "Youtube",
        },
        {
          //label: 'Facebook',
          href: 'https://www.facebook.com/MXCfoundation/',
          position: 'right',
          className: "header-facebook-link",
          "aria-label": " facebook link",
        },
        {
          //label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/mxc-foundation/',
          position: 'right',
          className: "header-linkedin-link",
          "aria-label": "linkedin",
        },
        {
          href: 'https://github.com/mxc-foundation/developer-documentation',
          //label: 'GitHub',
          position: 'right',
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorials',
              to: '/docs/tutorials/intro',
            },
            {
              label: 'API',
              to: '/docs/api/intro',
            },
            {
              label: 'Whitepapers',
              to: '/docs/whitepapers/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: ' ',
              to: 'https://mxc.news/telegram',
              //position: 'right',
              className: "header-telegram-link",
              "aria-label": "Telegram",
            },
            {
              label: ' ',
              to: 'https://discord.gg/mxcfoundation',
              //position: 'right',
              className: "header-discord-link",
              "aria-label": "Discord",

            },
            {
              label: ' ',
              to: 'https://twitter.com/mxcfoundation',
              //position: 'right',
              className: "header-twitter-link",
              "aria-label": "twitter",
            },
            {
              label: ' ',
              to: 'https://www.youtube.com/c/MXCFoundation',
              //position: 'right',
              className: "header-youtube-link",
              "aria-label": "Youtube",
            },
            {
              label: ' ',
              to: 'https://www.facebook.com/MXCfoundation/',
              //position: 'right',
              className: "header-facebook-link",
              "aria-label": "facebook link",
            },
            {
              label: ' ',
              to: 'https://www.linkedin.com/company/mxc-foundation/',
              //position: 'right',
              className: "header-linkedin-link",
              "aria-label": "linkedin",
            },
            {
              to: 'https://github.com/mxc-foundation/developer-documentation',
              label: ' ',
              //position: 'right',
              className: "header-github-link",
              "aria-label": "GitHub repository",
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'MXC Website',
              to: 'https://www.mxc.org',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mxc-foundation/',
            },
            {
              label: 'User Documentation',
              to: 'https://www.mxc.org/knowledge-hub',
            },
            {
              label: 'Imprint',
              to: 'https://www.mxc.org/imprint',
            },
            {
              label: 'Privacy Policy',
              to: 'https://www.mxc.org/privacy-policy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MXC Foundation gGmbH.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/mxc-foundation/developer-documentation/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/mxc-foundation/developer-documentation/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
