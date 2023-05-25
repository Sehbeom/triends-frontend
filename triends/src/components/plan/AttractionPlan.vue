<template>
  <div class="day-container">
    <div class="title-header">
      <b-form-input
        v-model="title"
        placeholder="일정의 제목을 입력하세요"
        class="input-title"
      ></b-form-input>
      <b-button v-if="!isUpdate" variant="primary" @click="savePlanToServer()"
        >일정 저장</b-button
      ><b-button v-else variant="danger" @click="updatePlanToServer()"
        >일정 수정</b-button
      >
    </div>
    <div
      v-for="dayItems in getMyPlanItems"
      :key="dayItems.dayInfo"
      class="day-header"
    >
      <plan-day-container :dayItem="dayItems" />
    </div>

    <div class="day-add" @click="addDateToPlan">날짜 추가하기 +</div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import PlanDayContainer from "./planItems/PlanDayContainer.vue";

const planDraftStore = "planDraftStore";

export default {
  name: "AttractionPlan",
  components: { PlanDayContainer },
  computed: {
    ...mapGetters(planDraftStore, ["getMyPlanItems", "getTitle"]),
    ...mapState(planDraftStore, ["isUpdate"]),
    hasTitle() {
      return this.getTitle;
    },
  },
  watch: {
    hasTitle() {
      this.title = "d";
    },
  },
  methods: {
    ...mapActions(planDraftStore, ["addDay", "savePlan", "updatePlan"]),
    addDateToPlan() {
      this.addDay();
    },
    savePlanToServer() {
      if (!this.title) {
        alert("일정의 제목을 입력해주세요!");
      } else {
        confirm("일정을 추가하시겠습니까?");
        this.savePlan(this.title);
      }
    },
    updatePlanToServer() {
      if (!this.title) {
        alert("일정의 제목을 입력해주세요!");
      } else {
        confirm("일정을 수정하시겠습니까?");
        this.updatePlan(this.title);
      }
    },
  },
  data() {
    return {
      title: "",
    };
  },
  created() {
    this.title = this.getTitle;
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
.title-header {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.input-title {
  width: 70%;
}
</style>
