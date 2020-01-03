<template lang="pug">
Layout
    v-container
      v-row(no-gutters align="center" justify="center")
        v-col(md="6" sm="12" xs="12")
          div
            h2.text-center.display-1.mt-4.mb-10.font-weight-regular
              | Books I Read
            div#posts
                article.mt-4(v-for="edge in $page.allBooks.edges" :key="edge.node.id")
                  a.g-link(:href="edge.node.link", target="_blank")
                    h2.headline.font-weight-medium {{ edge.node.title }}
                    p.subtitle
                      | by {{ edge.node.author }}
                      |
                      | &middot;
                      |
                      | Read in {{ edge.node.year }}
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
        author
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
  transition: 0.2s;
}

#posts .g-link:hover {
  color: rgba(255, 150, 18, 1) !important;
}

.font-regular {
  font-style: normal;
}
</style>
