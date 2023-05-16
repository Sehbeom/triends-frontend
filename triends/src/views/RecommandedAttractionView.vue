<template>
  <div class="recommand-page-container">
    <!-- 이 밑은 카드 컨테이너. 여행 리뷰 페이지의 카드들을 모아놓는 부분 -->
    <b-container class="bv-example-row mb-3">
      <b-row cols="3">
        <b-col :key="item" v-for="item in items">
          <review-card />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ReviewCard from "@/components/ReviewCard.vue";

export default {
  components: { ReviewCard },
  name: "RecommandedAttractionView",
  data: function () {
    return { items: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2] };
  },
};
</script>

<style scoped>
.card-container {
  background-color: blue;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-content: center;
  justify-content: space-around; */
  width: 80vw;
}
.recommand-page-container {
  display: flex;
  justify-content: space-between;
  margin-top: 7vw;
}
</style>
