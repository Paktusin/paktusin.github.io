module.exports = {
  siteMetadata: {
    title: `Mikhail Davlichin`,
    description: `Web Developer`,
    author: `paktusin@gmial.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mikahil Davlichin - Web developer`,
        short_name: "Paktusin",
        theme_color: "#80d010",
        background_color: "#80d010",
        display: "browser",
        Scope: "/",
        start_url: `/`,
        icon: `src/images/icon-512x512.png`
      },
    },
  ],
}
