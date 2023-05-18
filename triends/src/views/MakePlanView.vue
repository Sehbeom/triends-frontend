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
