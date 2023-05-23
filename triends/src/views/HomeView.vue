<template>
  <div>
    <page-button-header />
    <article-layout>
      <div class="img-section">
        <img src="../assets/mainpage.png" alt="" width="100%" class="main-image" />
        <span class="img-text">여행을 떠나볼까요?</span>
        <a href="recommand" class="img-button">여행지 둘러보기</a>
      </div>
      <div class="infinite-slide-container">
        <infinit-slide height="120px" />
      </div>
      <recommand-carousel
        carouselTitle="핫한 여행지"
        icon="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png"
        align="false"
      />
    </article-layout>
  </div>
</template>

<script>
import PageButtonHeader from "@/components/header/PageButtonHeader.vue";
import ArticleLayout from "@/components/layout/ArticleLayout.vue";
import RecommandCarousel from "@/components/carousel/RecommandCarousel.vue";
import InfinitSlide from "@/components/carousel/InfinitSlide.vue";

export default {
  name: "HomeView",
  components: {
    PageButtonHeader,
    ArticleLayout,
    RecommandCarousel,
    InfinitSlide,
  },
};
</script>
<style scoped>
.img-section {
  position: relative;
}
.infinite-slide-container {
  margin-top: 60px;
  margin-bottom: 100px;
}
.img-text {
  position: absolute;
  font-family: spoqa;
  top: 20%;
  left: 5%;
  font-size: 4rem;
  font-weight: 800;
  color: black;
  text-shadow: 1px 0px 7px white;
}
.img-button {
  position: absolute;
  top: 80%;
  right: 10%;
  font-size: 2rem;
  font-weight: 900;
  text-shadow: 1px 0px 7px white;
  text-decoration: none;
  color: yellow;
  font-family: spoqa;
}
.main-image {
  border-radius: 12px;
  border-style: solid;
}
</style>
