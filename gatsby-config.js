const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    author: config.siteAuthor,
    description: config.siteDescription,
    keywords: config.siteKeywords,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          config.googleFont,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        description: config.manifestDescription,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: config.siteUrl,
        sitemap: config.siteSitemap,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-sass',
    'gatsby-plugin-brotli',
    'gatsby-plugin-minify-html',
    'gatsby-plugin-offline',
  ],
};
