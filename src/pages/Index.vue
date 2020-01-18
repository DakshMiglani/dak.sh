<template lang="pug">

  layout
    v-container
      v-row(no-gutters align="center" justify="center")
        v-col(md="5" sm="12" xs="12")
          div.text-center
            g-image.home-logo(alt="logo" src="~/logo-wo-bg.png" width="260" quality="100")
            h1.display-2.font-weight-bold Daksh Miglani
            p.headline.bio
              | I'm an 18 year old maker and student based off of Delhi, India.
              | I started writing code at the age of 9.
              | I am Building
              |
              a(href="https://adler.ai" target="_blank") Adler
              |, an AI APIs platform for modern Businesses.
            v-row.mb-5(justify="center")
              v-btn.ml-2.mr-2(icon, v-for="item in socialIcons" :key="item.icon", :color="item.color", :href="item.link", target="_blank")
                v-icon(size="30") {{ item.icon }}
            v-btn(to="/posts/about-me", outlined, color="orange darken-2")
              v-icon(left, size="15") fas fa-chevron-right
              |
              |About Me
</template>

<script>
export default {
  metaInfo: {
    title: "Home Page"
  },
  data() {
    return {
      socialIcons: [
        {
          icon: "fab fa-twitter",
          link: "https://twitter.com/dakmig",
          color: "#1da1f2"
        },
        {
          icon: "fab fa-github",
          link: "https://github.com/DakshMiglani",
          color: "#24292e"
        },
        {
          icon: "fab fa-stack-overflow",
          link: "https://stackoverflow.com/users/6792646",
          color: "#f48024"
        },
        {
          icon: "fab fa-linkedin",
          link: "https://linkedin.com/in/dakshmiglani",
          color: "#0077b5"
        },
        {
          icon: "fab fa-telegram",
          link: "https://t.me/DakshMiglani",
          color: "#289fd9"
        },
        {
          icon: "fas fa-at",
          link: "mailto:hello@dak.sh",
          color: "#a83427"
        }
      ]
    };
  }
};
</script>

<style scoped>
.bio {
  margin-top: 20px;
}

.bio a {
  text-decoration: none;
  color: rgba(255, 150, 18, 1) !important;
}
</style>
