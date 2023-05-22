<template>
  <div class="button-layout">
    <div class="button-container">
      <router-link :to="{ name: 'notice' }">
        <page-button-item title="공지사항" link="notice" :icon="notice" />
      </router-link>
      <router-link :to="{ name: 'recommand' }">
        <page-button-item title="여행지 추천" link="recommand" :icon="recommand" />
      </router-link>
      <router-link :to="{ name: 'plan' }">
        <page-button-item title="플랜짜기" link="plan" :icon="plan" />
      </router-link>
      <router-link :to="{ name: 'myplan' }">
        <page-button-item title="내 플랜" link="myplan" :icon="myplan" />
      </router-link>
      <router-link :to="{ name: 'review' }">
        <page-button-item title="여행지 리뷰" :icon="review" />
      </router-link>
    </div>
  </div>
</template>

<script>
import PageButtonItem from "./PageButtonItem.vue";
import icon1 from "@/assets/icons/notice.png";
import icon2 from "@/assets/icons/recommand.png";
import icon3 from "@/assets/icons/plan.png";
import icon4 from "@/assets/icons/myplan.png";
import icon5 from "@/assets/icons/review.png";

export default {
  name: "PageButtonHeader",
  components: { PageButtonItem },
  data() {
    return {
      notice: icon1,
      recommand: icon2,
      plan: icon3,
      myplan: icon4,
      review: icon5,
    };
  },
};
</script>

<style scoped>
.button-container {
  width: 80%;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
}
.button-layout {
  display: flex;
  padding-top: 15px;
  padding-bottom: 24px;
  justify-content: center;
  min-width: 1000px;
}
</style>
