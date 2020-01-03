<template lang="pug">
  Layout
    v-layout(wrap)
      div.container#post
        div
          h1.display-2.font-weight-medium {{ $page.post.title }}
          p.title.font-weight-regular
            span.font-weight-bold(style="color: #F46B3F;") Posted on
            |
            |{{ new Date($page.post.created_at).toLocaleDateString("en-US", this.dateOptions)  }}
            br
            span.font-weight-bold(style="color: #A36FE6;" v-if="$page.post.updated_at") Updated on
            |
            | {{ new Date($page.post.updated_at).toLocaleDateString("en-US", this.dateOptions) }}
          g-image(v-if="$page.post.featuredImage" :src="$page.post.featuredImage" alt="$page.post.title's featured image")
        div.markdown-body(v-html="$page.post.content")
        vue-disqus(shortname="dak-sh" :identifier="$page.post.title")
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    featuredImage
    created_at
    updated_at
    path
  },
  meta: metadata {
    siteUrl
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  data() {
    return {
      dateOptions: {
        year: "numeric",
        month: "short",
        day: "numeric"
      }
    };
  }
};
</script>

<style src="../css/github-md.css" />
<style>
#post {
  margin-top: 2rem;
}
#post .g-image {
  max-width: calc(100vw - 50px);
}
.markdown-body {
  margin-top: 1rem;
}

.markdown-body a {
  color: #ff9612 !important;
  text-decoration: none;
}
</style>
<style scoped>
@media (min-width: 1904px) {
  .container {
    max-width: 1100px;
  }
}

@media (min-width: 1264px) {
  .container {
    max-width: 1100px;
  }
}
</style>
