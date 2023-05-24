<template>
  <div class="search-result-item">
    <div class="result-name">{{ item.title }}</div>
    <div>
      <div col="3" class="result-img">
        <img :src="item.firstImage" alt="no image" />
      </div>
      <div col="9" class="result-add">{{ item.addr1 }}{{ item.addr2 }}</div>
      <div class="result-tel">{{ item.tel }}</div>
    </div>
    <div>
      <b-button @click="addCourseToStore()">계획 추가</b-button>
      <b-form-select v-model="selected" :options="getDateArray"></b-form-select>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
const planDraftStore = "planDraftStore";

export default {
  name: "AttractionSearchResultItem",
  props: {
    item: {},
  },
  methods: {
    ...mapActions(planDraftStore, ["addCourse"]),
    addCourseToStore() {
      let itemParse = { course: this.item, day: this.selected };
      this.addCourse(itemParse);
    },
  },
  computed: {
    ...mapGetters(planDraftStore, ["getDateArray"]),
  },
  data() {
    return {
      selected: null,
    };
  },
};
</script>

<style scoped>
.search-result-item {
  margin-bottom: 5px;
  border: solid 2px;
}
.result-img > img {
  width: 100px;
}
</style>
