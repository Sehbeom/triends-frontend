<template>
  <div class="search-result-container">
    <div v-for="item in items" :key="item.id" @click="viewInfo(item)">
      <attracion-search-result-item :item="item" />
      <hr />
    </div>
  </div>
</template>

<script>
import AttracionSearchResultItem from "./AttracionSearchResultItem.vue";
export default {
  name: "AttractionSerchResult",
  components: {
    AttracionSearchResultItem,
  },
  props: {
    items: [],
  },
  data() {
    return {};
  },
  methods: {
    viewInfo(item) {
      let info = item;
      this.$emit("drawMarker", info);
    },
  },
};
</script>

<style scoped>
.search-result-container {
  max-height: 780px;
  overflow-y: scroll;
}
</style>
