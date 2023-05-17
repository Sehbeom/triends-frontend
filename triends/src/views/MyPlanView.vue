<template>
  <div class="recommand-page">
    <article-layout>
      <page-detail-header title="내 플랜" />
      <div class="recommand-page-container">
        <!-- 이 밑은 카드 컨테이너. 여행 리뷰 페이지의 카드들을 모아놓는 부분 -->
        <b-container class="bv-example-row mb-3" style="width: 75%; min-width: 1000px">
          <b-row cols="2">
            <b-col :key="item" v-for="item in items">
              <my-plan-card />
            </b-col>
          </b-row>
        </b-container>
      </div>
    </article-layout>
  </div>
</template>

<script>
import MyPlanCard from "@/components/MyPlanCard.vue";
import PageDetailHeader from "@/components/layout/PageDetailHeader.vue";
import ArticleLayout from "@/components/layout/ArticleLayout.vue";

export default {
  components: { MyPlanCard, PageDetailHeader, ArticleLayout },
  name: "MyPlanView",
  data: function () {
    return { items: [1, 2, 3] };
  },
};
</script>

<style>
.recommand-page-container {
  margin-top: 5vw;
  min-width: 1000px;
}
</style>
