<template>
  <div>
    <page-detail-header :title="carouselTitle" />
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
        <b-col :key="item.id" v-for="item in items">
          <attraction-recommand-card :item="item" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PageDetailHeader from "@/components/layout/PageDetailHeader.vue";
import AttractionRecommandCard from "@/components/AttractionRecommandCard.vue";

export default {
  props: {
    carouselTitle: String,
  },
  data() {
    // 이곳은 api 연동 후 사라질 데이터입니다
    return {
      items: [
        {
          id: 1,
          title: "attraction1",
          content: "test card content. wanna go home",
          count: 4,
        },
        {
          id: 2,
          title: "attraction2",
          content: "test card content. wanna go home",
          count: 2,
        },
        {
          id: 3,
          title: "attraction3",
          content: "test card content. wanna go home",
          count: 3,
        },
        {
          id: 4,
          title: "attraction4",
          content: "test card content. wanna go home",
          count: 4,
        },
      ],
    };
  },
  components: { AttractionRecommandCard, PageDetailHeader },
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
