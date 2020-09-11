module.exports = {
  title:  "NewsTime Flutter App",
  tagline: "The news time flutter app documentation",
  url: "https://documentation.newstime.qreate.website",
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName:  "qreate",
  projectName: "newstime-app",
  themeConfig: {
    navbar: {
      title: "NewsTime Flutter App",
      logo: {
        alt: "NewsTime Flutter App",
        src:  "img/favicon.ico",
      },
      items: [
        {
          to: '/docs/project-structure',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to:  "mailto:joran@qreate.io", label: 'Help', position: 'left'},
        {
          href: 'https://github.com/qreate/qreate-newstime-mobile',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
    
      copyright: `Copyright © ${new Date().getFullYear()} qreate apps.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
