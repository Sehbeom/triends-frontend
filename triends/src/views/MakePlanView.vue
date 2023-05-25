<template>
  <div>
    <plan-kakao-map />
  </div>
</template>

<script>
import PlanKakaoMap from "@/components/plan/PlanKakaoMap.vue";
import { mapState, mapActions } from "vuex";

const planDraftStore = "planDraftStore";
const userStore = "userStore";

export default {
  name: "MakePlanView",
  components: {
    PlanKakaoMap,
  },
  computed: {
    ...mapState(planDraftStore, ["myPlan"]),
    ...mapState(userStore, ["userInfo"]),
  },
  created() {
    if (this.myPlan === null) {
      this.createPlan(this.userInfo.userId);
    }
  },
  methods: {
    ...mapActions(planDraftStore, ["createPlan"]),
  },
  beforeRouteLeave(to, from, next) {
    confirm("작성하신 내용이 지워질 수 있습니다!");

    this.createPlan(this.userInfo.userId);
    next();
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  .side-tab-container {
    border: 2px red;
    // background-color: red;
  }
}
</style>
