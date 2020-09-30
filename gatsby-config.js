module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-179293150-1"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: "/",
        display: "standalone",
        theme_color: "#FF4C00",
        background_color: "#FFFFFF",
        icon: "src/static/icon.png",
        short_name: "types.style",
        name: "types.style — Dedicated, mobile-first editor for micro-blogging"
      }
    }
  ]
};
