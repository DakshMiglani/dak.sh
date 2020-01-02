<template lang="pug">
Layout
    v-container
      v-row(no-gutters align="center" justify="center")
        v-col(md="6" sm="12" xs="12")
          div
            h2.text-center.display-3.mt-4.mb-2.font-weight-thin
              span.font-italic ln
              | (
              span.font-weight-medium.font-regular Daksh
              | )
            p.text-center.title.mb-4 natural log of my thoughts
            div#posts
                article.mt-4(v-for="edge in $page.allPost.edges" :key="edge.node.id")
                  g-link.g-link(:to="edge.node.path")
                    h2.display-1.font-weight-medium {{ edge.node.title }}
                  p.subtitle
                    | {{ new Date(edge.node.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric"}) }}
                    |
                    span.font-weight-bold &middot;
                    |
                    | {{ edge.node.timeToRead }} min read
                  p.mt-2.title.font-weight-regular {{ edge.node.summary }}
                  v-btn(outlined :to="edge.node.path" color="orange darken-2" style="text-align: left;") Read more
                  div.mb-5
                  v-divider.mx-4.mb-5
    Pagination(:pageInfo="$page.allPost.pageInfo" :moveTo="moveTo" v-if="$page.allPost.pageInfo.totalPages > 1")
</template>

<script>
import Pagination from "../components/pagination";

export default {
  components: {
    Pagination
  },
  methods: {
    moveTo(id) {
      this.$router.push("/posts/" + id);
    }
  }
};
</script>

<page-query>
query ($page: Int) {
  allPost(perPage: 5, page: $page, sortBy: "created_at") @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        created_at
        summary
        featuredImage
        path
        timeToRead
      }
    }
  }
}
</page-query>

<style>
#posts .g-link {
  text-decoration: none;
}

#posts .g-link {
  color: #202020;
  transition: 0.3s;
}

#posts .g-link:hover {
  color: rgba(255, 150, 18, 1) !important;
}

.font-regular {
  font-style: normal;
}
</style>
