<template lang="pug">
  v-pagination(:value="pageInfo.currentPage"
  :length="pageInfo.totalPages" prev-icon="mdi-menu-left"
  next-icon="mdi-menu-right" @input="paginate" color="orange darken-2")
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageInfo", "moveTo"],
  methods: {
    paginate(id) {
      if (Number(id) == this.pageInfo.currentPage) {
        return;
      }

      if (1 == Number(id)) {
        id = "";
      }

      this.moveTo(id);
    }
  }
};
</script>
