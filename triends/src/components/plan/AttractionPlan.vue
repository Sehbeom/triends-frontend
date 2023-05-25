<template>
  <div class="day-container">
    <div v-for="dayItems in getMyPlanItems" :key="dayItems" class="day-header">
      <plan-day-container :dayItem="dayItems" />
    </div>
    <div class="day-add" @click="addDateToPlan">날짜 추가하기</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PlanDayContainer from "./planItems/PlanDayContainer.vue";

const planDraftStore = "planDraftStore";

export default {
  name: "AttractionPlan",
  components: { PlanDayContainer },
  computed: {
    ...mapGetters(planDraftStore, ["getMyPlanItems"]),
  },
  methods: {
    ...mapActions(planDraftStore, ["addDay"]),
    addDateToPlan() {
      this.addDay();
    },
  },
};
</script>

<style scoped>
.day-container {
  max-height: 780px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.day-add {
  margin-top: 10px;
  width: 90%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: dashed skyblue 2px;
  color: skyblue;
  border-radius: 20px;
  cursor: pointer;
}
.day-header {
  width: 100%;
}
</style>
