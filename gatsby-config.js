module.exports = {
  siteMetadata: {
    title: 'Tennille Consulting',
    siteUrl: `https://www.tennilleconsulting.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.tennilleconsulting.com',
        sitemap: 'https://www.tennilleconsulting.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', disallow: '/thank-you'  }]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Tennille Consulting",
        short_name: "TCBConsulting",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#8CCC68",
        display: "minimal-ui",
        icon: "src/images/favicon.png",
      },
    },
],
}
