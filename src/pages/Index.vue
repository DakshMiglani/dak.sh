<template lang="pug">

  layout
    v-container
      v-row(no-gutters align="center" justify="center")
        v-col(md="5" sm="12" xs="12")
          div.text-center
            g-image.home-logo(alt="logo" src="~/logo-wo-bg.png" width="300" quality="100")
            h1.display-3.font-weight-bold Daksh Miglani
            p.headline.bio
              | I'm an 18 year old maker and student based off of Delhi, India.
              | I started writing code at the age of 9.
              | I am Building
              |
              a(href="https://adler.ai" target="_blank") Adler
              |, an AI APIs platform for modern Businesses.
            v-btn(to="/posts/about-me", outlined, color="orange darken-2")
              v-icon(left, size="15") fas fa-chevron-right
              |
              |About Me
</template>

<script>
export default {
  metaInfo: {
    title: "Home Page"
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

