<template>
  <!-- <div class="recommand-page-container"> -->
  <div>
    <page-button-header />
    <article-layout>
      <infinit-slide />
      <recommand-carousel carouselTitle="요즘 뜨는 여행지" align="true" :items="likeItems" />
      <hr style="margin-bottom: 5vw" />
      <div v-if="isLogin">
        <recommand-carousel carouselTitle="이런 곳은 어때요?" align="true" :items="myItems" />
      </div>
      <div v-else>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Blowing%20a%20Kiss.png"
          alt="Face Blowing a Kiss"
          width="200"
          height="200"
        />
        <h2 class="login-reco">회원가입 하시면 개인 추천을 받을 수 있어요!</h2>
      </div>
    </article-layout>
  </div>
</template>

<script>
import ArticleLayout from "@/components/layout/ArticleLayout.vue";
import RecommandCarousel from "@/components/carousel/RecommandCarousel.vue";
import PageButtonHeader from "@/components/header/PageButtonHeader.vue";
import InfinitSlide from "@/components/carousel/InfinitSlide.vue";
import { getAttractionByLikes, getAttractionById } from "@/apis/attraction";
import { mapState } from "vuex";

const userStore = "userStore";

export default {
  components: { ArticleLayout, RecommandCarousel, PageButtonHeader, InfinitSlide },
  computed: {
    ...mapState(userStore, ["isLogin", "userInfo"]),
  },
  name: "RecommandedAttractionView",
  data() {
    return {
      likeItems: {
        type: String,
        auto: String,
        items: Object,
      },
      myItems: {
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
    if (this.isLogin) {
      console.log(this.userInfo);
      getAttractionById(
        this.userInfo.userId,
        ({ data }) => {
          this.myItems.items = data.data;
          this.myItems.type = "attractionCarousel";
          this.myItems.auto = "false";
          console.log(this.myItems.items);
        },
        (error) => {
          console.log(error);
          this.$router.push({ name: "error" });
        }
      );
    }
  },
};
</script>

<style scoped>
.login-reco {
  margin-bottom: 100px;
  margin-top: 100px;
  font-weight: bold;
}
</style>
