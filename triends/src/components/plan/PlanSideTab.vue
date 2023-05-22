<template>
  <div class="side-tab-container">
    <b-tabs pills card vertical cols="1">
      <b-tab title="검색결과" active><attraction-search-result :items="items" /></b-tab>
      <b-tab title="내플랜">Tab contents 2</b-tab>
      <b-tab title="추천여행지"><attraction-search-result /></b-tab>
      <b-tab title="추천경로">Tab contents 4</b-tab>
    </b-tabs>
  </div>
</template>

<script>
import AttractionSearchResult from "./AttractionSearchResult.vue";
export default {
  name: "PlanSideTab",
  props: {
    items: [],
  },
  data() {
    return {};
  },
  components: {
    AttractionSearchResult,
  },
};
</script>

<style scoped lang="scss">
.side-tab-container {
  border: 2px red;
  height: 870px;
  z-index: 15;
}
::v-deep {
  .col-auto {
    width: 50px;
  }
}
</style>
