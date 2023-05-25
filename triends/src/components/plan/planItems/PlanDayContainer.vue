<template>
  <div class="day-header">
    <div class="day">{{ dayItem.day }}일자</div>
    <div v-for="course in dayItem.courses" :key="course">
      <attraction-search-result-item :item="course" :isPlan="false" />
    </div>
  </div>
</template>

<script>
import AttractionSearchResultItem from "../AttracionSearchResultItem.vue";

// import PlanCard from "./PlanCard.vue";

export default {
  name: "PlanDayContainer",
  components: { AttractionSearchResultItem },
  props: {
    dayItem: {},
  },
};
</script>
AttracionSearchResultItem AttracionSearchResultItem

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
