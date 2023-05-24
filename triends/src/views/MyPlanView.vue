<template>
  <div class="myplan-page">
    <page-button-header />
    <article-layout>
      <page-detail-header title="내 플랜" />
      <div class="myplan-page-container">
        <!-- 이 밑은 카드 컨테이너. 여행 리뷰 페이지의 카드들을 모아놓는 부분 -->
        <b-container class="bv-example-row mb-3" style="min-width: 1000px">
          <b-row cols="2">
            <b-col :key="item" v-for="item in items.items">
              <my-plan-card :item="item" />
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
import PageButtonHeader from "@/components/header/PageButtonHeader.vue";

export default {
  components: { MyPlanCard, PageDetailHeader, ArticleLayout, PageButtonHeader },
  name: "MyPlanView",
  data() {
    // 이곳은 api 연동 후 사라질 데이터입니다
    return {
      items: {
        type: "attractionCarousel",
        auto: "true",
        items: [
          {
            id: 1,
            thumbnail: "./images/dummy1.jpg",
            startDate: "2023-09-01",
            endDate: "2023-09-05",
            title: "뜨거운 사막여행!",
            content: "미국 사막의 뜨거운 열기를 느껴보세요",
            members: ["1", "2"],
            count: 4,
          },
          {
            id: 2,
            thumbnail: "./images/dummy2.jpg",
            startDate: "2023-09-01",
            endDate: "2023-09-05",

            title: "두오모에서의 로맨틱한 저녁",
            content: "'냉정과 열정사이' 그 배경인 두오모",
            count: 2,
          },
          {
            id: 3,
            thumbnail: "./images/dummy3.jpg",
            startDate: "2023-09-01",
            endDate: "2023-09-05",
            title: "이국적인 곳",
            content: "다영한 조명과 문화 그 빛깔을 느껴보세요",
            count: 3,
          },
          {
            id: 4,
            thumbnail: "./images/dummy4.jpg",
            title: "에스컬레이터",
            content: "더미데이터 만들기 개빡친다",
            count: 4,
          },
          {
            id: 1,
            thumbnail: "./images/dummy5.jpg",
            title: "벽화벽화",
            content: "그 시절 내가 그린 기린그림",
            count: 4,
          },
          {
            id: 2,
            thumbnail: "./images/dummy6.jpg",
            title: "attraction2",
            content: "test card content. wanna go home",
            count: 2,
          },
          {
            id: 3,
            thumbnail: "./images/dummy6.jpg",
            title: "노을노을",
            content: "노을에 쏘주 한잔",
            count: 3,
          },
          {
            id: 4,
            thumbnail: "./images/dummy1.jpg",
            title: "attraction4",
            content:
              "test card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go homesdfsdfsdfsdfds",
            count: 4,
          },
        ],
      },
    };
  },
};
</script>

<style>
.myplan-page-container {
  margin-top: 50px;
  min-width: 1000px;
}
</style>
