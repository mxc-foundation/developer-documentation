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
  tagline: 'You Guide to the MXC Ecosystem',
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
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/mxc-foundation/developer-documentation',
          label: 'GitHub',
          position: 'right',
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
              label: 'Telegram',
              href: 'https://mxc.news/telegram',
            },
            {
              label: 'Discord',
              href: 'https://mxc.news/discord',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/mxcfoundation',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Developer Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mxc-foundation/',
            },
            {
              label: 'MXC Website',
              to: 'https://www.mxc.org',
            },
            {
              label: 'User Documentation',
              to: 'https://www.mxc.wiki',
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
