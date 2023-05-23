<template>
  <!-- <div class="recommand-page-container"> -->
  <div>
    <page-button-header />
    <article-layout>
      <infinit-slide />
      <recommand-carousel carouselTitle="요즘 뜨는 여행지" align="true" :items="likeItems" />
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
import { getAttractionByLikes } from "@/apis/attraction";

export default {
  components: { ArticleLayout, RecommandCarousel, PageButtonHeader, InfinitSlide },
  name: "RecommandedAttractionView",
  data() {
    return {
      likeItems: {
        type: String,
        auto: String,
        items: Object,
      },
    };
  },
  created() {
    getAttractionByLikes(
      ({ data }) => {
        this.likeItems.items = data.data;
        this.likeItems.type = "attractionCarousel";
        this.likeItems.auto = "false";
        console.log(this.likeItems.items);
      },
      (error) => {
        console.log(error);
        this.$router.push({ name: "error" });
      }
    );
  },
};
</script>

<style scoped></style>
