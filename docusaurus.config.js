module.exports = {
  title: 'web1992 Blog',
  tagline: 'web1992 Blog',
  url: 'https://blog.web1992.cn',
  baseUrl: '/',
  favicon: 'img/avatars3.jpeg',
  organizationName: 'web1992', // Usually your GitHub org/user name.
  projectName: 'read', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'web1992·Blog',
      logo: {
        alt: 'My Site Logo',
        src: 'img/avatars3.jpeg',
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
          position: 'left',
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
      copyright: `Copyright © ${new Date().getFullYear()} web1992 | Build by  <a href="https://v2.docusaurus.io/">Docusaurus<a/> `,
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
