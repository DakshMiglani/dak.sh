// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Daksh Miglani",
  siteDescription:
    "I'm an 18 year old maker and student based of Delhi, India. I started writing code at the age of 9",
  siteUrl: "https://dak.sh",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      imageQuality: 85
    }
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "blog/**/*.md"
      }
    }
  ],
  templates: {
    Post: "/posts/:title"
  },
  chainWebpack: config => {
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader");
  }
};
