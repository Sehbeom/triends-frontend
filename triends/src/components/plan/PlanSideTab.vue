<template>
  <b-tabs fill>
    <b-tab title="검색결과" @click="setKeyword()" active
      ><attraction-search-result :items="selectedAttraction"
    /></b-tab>
    <b-tab title="내플랜" @click="setMyPlan()"><attraction-plan /></b-tab>
    <b-tab title="추천여행지" @click="setRecommand()"
      ><attraction-search-result type="recommanded" :items="selectedAttraction"
    /></b-tab>
    <!-- <b-tab title="추천경로">Tab contents 4</b-tab> -->
  </b-tabs>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AttractionPlan from "./AttractionPlan.vue";
import AttractionSearchResult from "./AttractionSearchResult.vue";

const attractionStore = "attractionStore";
const planDraftStore = "planDraftStore";

export default {
  name: "PlanSideTab",

  components: {
    AttractionSearchResult,
    AttractionPlan,
  },
  computed: {
    ...mapState(attractionStore, ["selectedAttraction"]),
  },
  methods: {
    ...mapActions(attractionStore, [
      "setSearchTypeKeyword",
      "setSearchTypeRecommand",
      "setSearchable",
    ]),
    ...mapActions(planDraftStore, ["setMyPlanSelected", "setMyPlanSelectedFalse"]),
    setKeyword() {
      this.setSearchTypeKeyword();
      this.setMyPlanSelectedFalse();
    },
    setRecommand() {
      this.setSearchTypeRecommand();
      this.setMyPlanSelectedFalse();
    },
    setMyPlan() {
      this.setMyPlanSelected();
      this.setSearchable();
    },
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
