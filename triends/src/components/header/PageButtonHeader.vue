<template>
  <div class="button-layout">
    <div class="button-container">
      <page-button-item
        title="공지사항"
        link="notice"
        icon="./icons/notice.png"
      />
      <page-button-item
        title="여행지 추천"
        link="recommand"
        icon="./icons/recommand.png"
      />
      <page-button-item title="플랜짜기" link="plan" icon="./icons/plan.png" />
      <page-button-item
        title="내 플랜"
        link="myplan"
        icon="./icons/myplan.png"
      />
      <page-button-item
        title="여행지 리뷰"
        link="review"
        icon="./icons/review.png"
      />
    </div>
  </div>
</template>

<script>
import PageButtonItem from "./PageButtonItem.vue";

export default {
  name: "PageButtonHeader",
  components: { PageButtonItem },
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
