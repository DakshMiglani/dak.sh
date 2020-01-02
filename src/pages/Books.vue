<template lang="pug">
Layout
    v-container
      v-row(no-gutters align="center" justify="center")
        v-col(md="6" sm="12" xs="12")
          div
            h2.text-center.display-2.mt-4.mb-10.font-weight-regular
              | Book Recommendations
            div#posts
                article.mt-4(v-for="edge in $page.allBooks.edges" :key="edge.node.id")
                  p.subtitle.mb-0
                    | {{ edge.node.year }}
                  g-link.g-link(:to="edge.node.link")
                    h2.headline.font-weight-medium {{ edge.node.title  }}
                  v-row(justify="center")
                    v-rating(:value="edge.node.rating", size="25", dark, dense, readonly, background-color="#fd9217", color="#fd9217")
                  div.mb-5
                  v-divider.mx-4.mb-5
</template>

<script>
export default {
  metaInfo: {}
};
</script>

<page-query>
query {
  allBooks(sortBy: "year") {
    edges {
      node {
        id
        title
        rating
        year
        link
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
  color: #272727;
  transition: 0.3s;
}

#posts .g-link:hover {
  color: rgba(255, 150, 18, 1) !important;
}

.font-regular {
  font-style: normal;
}
</style>
