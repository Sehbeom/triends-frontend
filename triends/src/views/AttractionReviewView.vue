<template>
  <article-layout>
    <page-detail-header title="여행지 리뷰" />
    <div class="write-btn">
      <b-button><router-link :to="{ name: 'reviewregist' }">글쓰기</router-link></b-button>
    </div>
    <div class="review-card-container" v-for="item in items" :key="item.id">
      <attraction-review-card :item="item"></attraction-review-card>
    </div>
  </article-layout>
</template>

<script>
import ArticleLayout from "@/components/layout/ArticleLayout.vue";
import AttractionReviewCard from "@/components/AttractionReviewCard.vue";
import PageDetailHeader from "@/components/layout/PageDetailHeader.vue";

export default {
  name: "AttractionReviewView",
  data() {
    return {
      items: [
        {
          id: 1,
          img: ["sdfsf", "dsfsf", "sdfsf"],
          title: "card number1",
          content:
            "여행지 리뷰 1번째거. 뭐 별거 없음 집 보내줘 제발.... 니ㅏ러ㅣㅏㅓㅣㅏㄴ어라ㅣㄴ어리ㅏㄴ어리ㅏ너이ㅏㄹㄴ어리ㅏ너아ㅣ러저인난가가가가가",
        },
        {
          id: 2,
          img: ["sdfsf", "dsfsf", "sdfsf"],
          title: "card number2",
          content:
            "여행지 리뷰 2번째거. 뭐 별거 없음 아니 점심을 11시에 먹으라고? 뭔가 좀 이상하다는 생각이 안드는 것인가? cns는 왜 결과를 발표해주지 않는 것인가. 뭐야 왜 안나오는거냐고오오오오오",
        },
      ],
    };
  },
  components: {
    ArticleLayout,
    AttractionReviewCard,
    PageDetailHeader,
  },
};
</script>

<style>
.review-card-container {
  display: flex;
  justify-content: center;
}
.write-btn {
  text-align: right;
}
</style>
