<template>
  <div class="day-header">
    <div class="day">{{ dayItem.dayInfo }}일자</div>
    <draggable v-model="dayCourseInfo" @start="drag = true" @end="drag = false">
      <div v-for="course in dayCourseInfo" :key="course">
        <attraction-search-result-item :item="course" :isPlan="'plan'" />
      </div>
    </draggable>
  </div>
</template>

<script>
import AttractionSearchResultItem from "../AttracionSearchResultItem.vue";
import draggable from "vuedraggable";
import { mapGetters, mapActions } from "vuex";
const planDraftStore = "planDraftStore";
export default {
  name: "PlanDayContainer",
  components: { AttractionSearchResultItem, draggable },
  props: {
    dayItem: {},
  },
  computed: {
    ...mapGetters(planDraftStore, ["getMyPlanItems"]),
    dayCourseInfo: {
      get() {
        console.log(
          "fuck",
          this.getMyPlanItems[this.dayItem.dayInfo - 1].courses
        );
        return this.getMyPlanItems[this.dayItem.dayInfo - 1].courses;
      },
      set(value) {
        console.log("changed!!", value);
        this.updateChanges({ day: this.dayItem.dayInfo, value: value });
      },
    },
  },
  methods: {
    ...mapActions(planDraftStore, ["updateChanges"]),
  },
};
</script>

<style>
.day {
  background-color: skyblue;
  width: 100%;
  font-weight: bold;
  text-align: right;
  padding-right: 15px;
}
.day-header {
  border-bottom: turquoise 2px;
  width: 100%;
}
</style>
