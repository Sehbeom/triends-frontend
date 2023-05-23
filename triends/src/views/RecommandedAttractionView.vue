<template>
  <!-- <div class="recommand-page-container"> -->
  <div>
    <page-button-header />
    <article-layout>
      <infinit-slide />
      <recommand-carousel carouselTitle="요즘 뜨는 여행지" align="true" />
      <hr style="margin-bottom: 5vw" />
      <recommand-carousel carouselTitle="이런 곳은 어때요?" align="true" />
    </article-layout>
  </div>
</template>

<script>
import ArticleLayout from "@/components/layout/ArticleLayout.vue";
import RecommandCarousel from "@/components/carousel/RecommandCarousel.vue";
import PageButtonHeader from "@/components/header/PageButtonHeader.vue";
import InfinitSlide from "@/components/carousel/InfinitSlide.vue";

export default {
  components: { ArticleLayout, RecommandCarousel, PageButtonHeader, InfinitSlide },
  name: "RecommandedAttractionView",
};
</script>

<style scoped></style>
