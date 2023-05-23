<template>
<<<<<<< Updated upstream
  <b-tabs fill>
    <b-tab title="검색결과" active
      ><attraction-search-result :items="selectedAttraction"
    /></b-tab>
    <b-tab title="내플랜">Tab contents 2</b-tab>
    <b-tab title="추천여행지"><attraction-search-result /></b-tab>
    <b-tab title="추천경로">Tab contents 4</b-tab>
  </b-tabs>
</template>

<script>
import { mapState } from "vuex";
import AttractionSearchResult from "./AttractionSearchResult.vue";

const attractionStore = "attractionStore";

export default {
  name: "PlanSideTab",
=======
  <div class="side-tab-container">
    <b-tabs pills card vertical cols="1">
      <b-tab title="검색결과" active
        ><attraction-search-result :items="items" @drawMarker="drawMarker"
      /></b-tab>
      <b-tab title="내플랜"><attraction-plan-list /></b-tab>
      <b-tab title="추천여행지"><attraction-search-result /></b-tab>
      <b-tab title="추천경로">Tab contents 4</b-tab>
    </b-tabs>
  </div>
</template>

<script>
import AttractionPlanList from "./AttractionPlanList.vue";
import AttractionSearchResult from "./AttractionSearchResult.vue";

export default {
  name: "PlanSideTab",
  props: {
    items: [],
  },
  data() {
    return {
      marker: {},
    };
  },
>>>>>>> Stashed changes
  components: {
    AttractionSearchResult,
    AttractionPlanList,
  },
  methods: {
    drawMarker(latlng) {
      this.marker = latlng;
      this.$emit("draw", this.marker);
    },
  },
  computed: {
    ...mapState(attractionStore, ["selectedAttraction"]),
  },
};
</script>

<style scoped lang="scss">
.side-tab-container {
  // background-color: pink;
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
