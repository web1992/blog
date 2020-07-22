module.exports = {
  title: '西西 Blog',
  tagline: '西西 Blog',
  url: 'https://blog.web1992.cn',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'web1992', // Usually your GitHub org/user name.
  projectName: 'read', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '西西·Blog',
      logo: {
        alt: 'My Site Logo',
        src: 'https://avatars3.githubusercontent.com/u/6828647?s=60&v=4',
      },
      links: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: '/blog/tags', label: '归档', position: 'left'},
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/web1992/read',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '链接',
          items: [
            {
              label: 'Docs',
              to: 'docs/',
            },
            {
              label: '归档',
              to: 'blog/tags/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 西西`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/web1992/blog/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/web1992/blog/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
