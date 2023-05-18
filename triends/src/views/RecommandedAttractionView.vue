<template>
  <!-- <div class="recommand-page-container"> -->
  <article-layout>
    <recommand-carousel carouselTitle="요즘 뜨는 여행지" />
    <hr style="margin-bottom: 5vw" />
    <recommand-carousel carouselTitle="이런 곳은 어때요?" />
  </article-layout>
</template>

<script>
import ArticleLayout from "@/components/layout/ArticleLayout.vue";
import RecommandCarousel from "@/components/carousel/RecommandCarousel.vue";

export default {
  components: { ArticleLayout, RecommandCarousel },
  name: "RecommandedAttractionView",
};
</script>

<style scoped></style>
