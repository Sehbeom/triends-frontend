<template>
  <div>
    <plan-kakao-map />
  </div>
</template>

<script>
import PlanKakaoMap from "@/components/plan/PlanKakaoMap.vue";

export default {
  name: "MakePlanView",
  components: {
    PlanKakaoMap,
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
