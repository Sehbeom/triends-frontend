<template>
  <div>
    <page-detail-header :title="carouselTitle" :icon="icon" />
    <div class="button-container">
      <b-dropdown
        id="dropdown-1"
        text="정렬 기준"
        class="m-md-2"
        variant="primary"
        v-show="align === 'true'"
      >
        <b-dropdown-item>최신글</b-dropdown-item>
        <b-dropdown-item>좋아요</b-dropdown-item>
        <b-dropdown-item>조회수</b-dropdown-item>
      </b-dropdown>
    </div>
    <custom-carousel :items="items" />
  </div>
</template>

<script>
import PageDetailHeader from "@/components/layout/PageDetailHeader.vue";
import CustomCarousel from "./CustomCarousel.vue";

export default {
  props: {
    carouselTitle: String,
    icon: String,
    align: Boolean,
  },
  data() {
    // 이곳은 api 연동 후 사라질 데이터입니다
    return {
      items: {
        type: "attractionCarousel",
        auto: "false",
        items: [
          {
            id: 1,
            img: "./images/dummy1.jpg",
            title: "뜨거운 사막여행!",
            content: "미국 사막의 뜨거운 열기를 느껴보세요",
            count: 4,
          },
          {
            id: 2,
            img: "./images/dummy2.jpg",
            title: "두오모에서의 로맨틱한 저녁",
            content: "'냉정과 열정사이' 그 배경인 두오모",
            count: 2,
          },
          {
            id: 3,
            img: "./images/dummy3.jpg",
            title: "이국적인 곳",
            content: "다영한 조명과 문화 그 빛깔을 느껴보세요",
            count: 3,
          },
          {
            id: 4,
            img: "./images/dummy4.jpg",
            title: "에스컬레이터",
            content: "더미데이터 만들기 개빡친다",
            count: 4,
          },
          {
            id: 1,
            img: "./images/dummy5.jpg",
            title: "벽화벽화",
            content: "그 시절 내가 그린 기린그림",
            count: 4,
          },
          {
            id: 2,
            img: "./images/dummy6.jpg",
            title: "attraction2",
            content: "test card content. wanna go home",
            count: 2,
          },
          {
            id: 3,
            img: "./images/dummy6.jpg",
            title: "노을노을",
            content: "노을에 쏘주 한잔",
            count: 3,
          },
          {
            id: 4,
            img: "./images/dummy1.jpg",
            title: "attraction4",
            content:
              "test card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go hometest card content. wanna go homesdfsdfsdfsdfds",
            count: 4,
          },
        ],
      },
    };
  },
  components: { PageDetailHeader, CustomCarousel },
  name: "RecommandCarousel",
};
</script>

<style scoped>
.mb-3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button-container {
  text-align: right;
}
</style>
