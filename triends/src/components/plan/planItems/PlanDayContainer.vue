<template>
  <div class="day-header">
    <div class="day">{{ dayItem.day }}일자</div>
    <div v-for="course in dayItem.courses" :key="course">
      <plan-card :course="course" />
    </div>
  </div>
</template>

<script>
import PlanCard from "./PlanCard.vue";

export default {
  name: "PlanDayContainer",
  components: { PlanCard },
  props: {
    dayItem: {},
  },
};
</script>

<style>
.day {
  background-color: aqua;
  width: 100%;
  font-weight: bold;
  text-align: right;
  padding-right: 15px;
}
.day-header {
  width: 100%;
}
</style>
