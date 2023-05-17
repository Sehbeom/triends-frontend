<template>
  <!-- <div class="recommand-page-container"> -->
  <article-layout>
    <page-detail-header title="내 플랜" />
    <div class="button-container">
      <b-dropdown id="dropdown-1" text="정렬 기준" class="m-md-2" variant="primary">
        <b-dropdown-item>최신글</b-dropdown-item>
        <b-dropdown-item>좋아요</b-dropdown-item>
        <b-dropdown-item>조회수</b-dropdown-item>
      </b-dropdown>
    </div>
    <!-- 이 밑은 카드 컨테이너. 여행 리뷰 페이지의 카드들을 모아놓는 부분 -->
    <b-container class="bv-example-row mb-3">
      <b-row cols="3">
        <b-col :key="item" v-for="item in items">
          <review-card />
        </b-col>
      </b-row>
    </b-container>
  </article-layout>
</template>

<script>
import ReviewCard from "@/components/ReviewCard.vue";
import PageDetailHeader from "@/components/layout/PageDetailHeader.vue";
import ArticleLayout from "@/components/layout/ArticleLayout.vue";

export default {
  components: { ReviewCard, PageDetailHeader, ArticleLayout },
  name: "RecommandedAttractionView",
  data: function () {
    return { items: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2] };
  },
};
</script>

<style scoped>
.recommand-page-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 7vw;
}
.m-md-2 {
  position: relative;
  top: 0;
  right: 40vw;
  background: none;
}
</style>
