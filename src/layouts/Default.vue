<template lang="pug">

v-app
  div
    v-app-bar(
      color="bg-gradient"
      dark
    )
      v-menu(bottom, origin="center content", transition="scale-transition")
        template(v-slot:activator="{ on }")
          v-app-bar-nav-icon(v-on="on",class="hidden-md-and-up")
        v-list
          v-list-item(v-for="link in links", :key="link.name", :to="link.to")
            v-list-item-icon
              v-icon(:size="iconSize") {{ link.icon }}
            v-list-item-title {{ link.name }}
      v-spacer(class="hidden-md-and-up")
      v-toolbar-title
        g-image.site-logo(alt="logo" src="~/logo-wo-bg.png" width="40" quality="100")
        | {{ $static.metadata.siteName }}
      v-spacer
      div(class="hidden-sm-and-down")
        v-btn(text, color="white", rounded, v-for="link in links", :key="link.name", :to="link.to")
          | {{ link.name }}
          v-icon(right, dark, :size="iconSize") {{link.icon}}
    v-content(style="margin-bottom: 150px; padding-bottom: 45px;")
      transition(name="fade" appear)
        section
          slot
    v-footer(color="bg-gradient", padless, absolute)
      v-row(justify="center", no-gutters)
        v-btn(v-for="link in links", :key="link.name", :to="link.to", color="white", text, rounded, class="my-2") {{ link.name }}
          v-icon(right, dark, :size="iconSize") {{link.icon}}
        v-col(class="bg-gradient py-4 text-center white--text", cols="12")
          | © {{ new Date().getFullYear() }}
          | -
          |
          strong Daksh Miglani
          |.
          | Built with <3 using Gridsome!
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      iconSize: "20",
      links: [
        { name: "Home", to: "/", icon: "fas fa-home" },
        { name: "Posts", to: "/posts", icon: "fas fa-scroll" },
        { name: "Projects", to: "/projects", icon: "fas fa-project-diagram" },
        { name: "Contact", to: "/contact", icon: "fas fa-address-book" }
      ]
    };
  }
};
</script>

<style>
.site-logo {
  vertical-align: middle;
  margin-bottom: 2.75px;
  margin-right: 2px;
}
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

.bg-gradient {
  background: linear-gradient(
    177deg,
    rgba(255, 150, 18, 1),
    rgba(237, 83, 74, 0.89)
  ) !important;
}
</style>
