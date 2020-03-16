module.exports = {
  siteMetadata: {
    title: "Never Mind the Blockchain",
    author: "Adam Hall & Will Abramson",
    description: "A research driven consultancy for developing human focused tools for forming and extending trust in digital relationships, without infringing on citizens rights to privacy and freedom."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
