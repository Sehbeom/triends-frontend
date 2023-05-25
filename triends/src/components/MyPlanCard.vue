<template>
  <div @click="test" class="plan-link">
    <div class="plan-container">
      <div class="image-container">
        <img :src="item.thumbnail" alt="" class="plan-img" />
      </div>
      <div class="plan-data" :style="{ 'background-color': color }">
        <div class="plan-header">
          <span class="plan-title">{{ item.title }}</span>
          <span class="plan-date">{{
            item.startDate + "~" + item.endDate
          }}</span>
        </div>
        <div class="plan-button">
          <span>{{ item.members }}</span>
          <b-button v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { selectRandomColor } from "@/util/color-util";
import { getPlanDetail } from "@/apis/plan";
import { mapActions, mapState } from "vuex";
// import plan from "@/router/plan";

const planDraftStore = "planDraftStore";
const userStore = "userStore";

export default {
  name: "MyPlanCard",
  props: { item: {} },
  data() {
    return {
      color: selectRandomColor(),
    };
  },
  computed: {
    ...mapState(userStore, ["userInfo"]),
  },
  methods: {
    ...mapActions(planDraftStore, ["setModeUpdate", "createPlan"]),
    async test() {
      confirm("선택하신 플랜을 편집하시겠습니까?");
      await getPlanDetail(
        this.item.planId,
        ({ data }) => {
          this.createPlan(this.userInfo.userId);
          this.setModeUpdate(data.data);
        },
        () => {
          this.$router.push({ name: "error" });
        }
      );
      this.$router.push({ name: "plan" });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.plan-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 15vw;
  margin-bottom: 30px;
  border-radius: 15px;
  min-width: 500px;
  min-height: 300px;
}
.plan-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.image-container {
  width: 45%;
  height: 100%;
}
.plan-header {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.plan-data {
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  padding: 10px 10px 10px 10px;
  width: 55%;
  height: 100%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border: solid 3px black;
}
.plan-title {
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
}
.plan-date {
  width: 100%;
  font-size: 1.5rem;
}
.plan-button {
  margin-top: 2vw;
  text-align: right;
}
.plan-link {
  cursor: pointer;
}
</style>
