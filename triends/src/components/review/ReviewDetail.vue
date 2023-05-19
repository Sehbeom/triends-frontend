<template>
  <div class="review">
    <article-layout>
      <page-detail-header title="리뷰 제목이 들어갈 자리입니다."></page-detail-header>
      <div class="review-page-container">
        <b-container style="width: 90%; min-width: 1000px">
          <user-and-button username="사용자이름" />
          <hr />
          <div>
            <b-button v-b-toggle.sidebar>날짜별 사진보기</b-button>
            <b-sidebar id="sidebar" title="일자별 여행지" shadow class="my-sidebar">
              <div class="px-3 py-2">
                <b-btn>1일차</b-btn>
              </div>
            </b-sidebar>
          </div>
          <!-- <div class="row align-items-center">
            <div class="col-1">
              <button class="button-container-left" @click="scrollLeft">←</button>
            </div>
            <div class="col-10">
              <div class="scroll-container" ref="scrollContent">
                <div class="scroll-content" v-for="image in images" :key="image.index">
                  <dimmed-image-card :image="image" />
                </div>
              </div>
            </div>
            <div class="col-1">
              <button class="button-container-right" @click="scrollRight">→</button>
            </div>
          </div> -->
          <carousel-container :items="items" />
          <div class="review-content">
            여행후기 내용이 들어갈 자리입니다~ 여행후기 내용이 들어갈 자리입니다~ 여행후기 내용이
            들어갈 자리입니다~ 여행후기 내용이 들어갈 자리입니다~ 여행후기 내용이 들어갈 자리입니다~
            여행후기 내용이 들어갈 자리입니다~ 여행후기 내용이 들어갈 자리입니다~ 여행후기 내용이
            들어갈 자리입니다~ 여행후기 내용이 들어갈 자리입니다~ 여행후기 내용이 들어갈
            자리입니다~여행후기 내용이 들어갈 자리입니다~ 여행후기 내용이 들어갈 자리입니다~
            여행후기 내용이 들어갈 자리입니다~ 여행후기 내용이 들어갈 자리입니다~ 여행후기 내용이
            들어갈 자리입니다~
          </div>
          <hr />
          댓글
          <div class="write-comment" @keyup="13">
            <user-and-button username="로그인유저" />
            <b-row class="comment-form">
              <b-col sm="11">
                <textarea
                  class="form-control"
                  id="write-comment-content"
                  placeholder="댓글을 입력해주세요."
                ></textarea>
              </b-col>
              <b-col sm="1">
                <b-button class="form-btn">댓글 등록</b-button>
              </b-col>
            </b-row>
          </div>
          <div class="view-comment">
            <ul>
              <li><user-and-button username="댓글유저" />댓글내용</li>
              <li><user-and-button username="댓글유저" />댓글내용</li>
              <li><user-and-button username="댓글유저" />댓글내용</li>
            </ul>
          </div>
        </b-container>
      </div>
    </article-layout>
  </div>
</template>

<script>
import PageDetailHeader from "@/components/layout/PageDetailHeader.vue";
import ArticleLayout from "@/components/layout/ArticleLayout.vue";
import UserAndButton from "../layout/UserAndButton.vue";
// import DimmedImageCard from "../DimmedImageCard.vue";
import CarouselContainer from "../carousel/Carousel.vue";

export default {
  components: {
    PageDetailHeader,
    ArticleLayout,
    UserAndButton,
    // DimmedImageCard,
    CarouselContainer,
  },
  data() {
    return {
      scrollAmount: 0,
      items: {
        type: "dimmedImageCarousel",
        items: [
          { index: 1, src: "/img/ssafy_logo.9aceab8b.png" },
          { index: 2, src: "/img/ssafy_logo.9aceab8b.png" },
          { index: 3, src: "/img/ssafy_logo.9aceab8b.png" },
          { index: 4, src: "/img/ssafy_logo.9aceab8b.png" },
          { index: 5, src: "/img/ssafy_logo.9aceab8b.png" },
          { index: 6, src: "/img/ssafy_logo.9aceab8b.png" },
          { index: 7, src: "/img/ssafy_logo.9aceab8b.png" },
        ],
      },
      comments: [{}],
      // isModalViewed: false,
    };
  },
  methods: {
    scrollLeft() {
      const scrollContent = this.$refs.scrollContent;
      scrollContent.scrollLeft -= 200; // 좌측으로 스크롤할 픽셀 수 조정
      console.log(scrollContent);
    },
    scrollRight() {
      const scrollContent = this.$refs.scrollContent;
      console.log(scrollContent);
      scrollContent.scrollLeft += 200; // 우측으로 스크롤할 픽셀 수 조정
      console.log(scrollContent);
    },
    bringLeftToTop() {
      const scrollContainer = this.$el.querySelector(".scroll-container");
      const leftButton = this.$el.querySelector(".scroll-button.left");
      scrollContainer.prepend(leftButton);
    },
  },
  mounted() {
    this.bringLeftToTop();
  },
};
</script>

<style scoped lang="scss">
.review-page-container {
  margin-top: 5vw;
  text-align: left;
}
.title {
  text-align: left;
}
::v-deep {
  .b-sidebar {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
}
.img-wrap {
  height: 250px;
  margin: 20px;
  overflow: scroll;
  white-space: nowrap;
}
.test {
  text-align: left;
  display: inline-block;
}
.scroll-container {
  position: relative;
  overflow-x: scroll;
  white-space: nowrap;
}
.scroll-content {
  display: inline-block;
}
.button-container-left {
  left: 10px;
}
.button-container-right {
  right: 10px;
}
.button {
  background-color: #ddd;
  color: #333;
  border: none;
  padding: 10px;
  cursor: pointer;
}
.left {
  position: fixed;
  left: 10px;
  z-index: 3;
  scroll-behavior: smooth;
}
.right {
  position: fixed;
  right: 10px;
  z-index: 3;
  scroll-behavior: smooth;
}
.test::-webkit-scrollbar {
  display: none;
}
.write-comment {
  margin-bottom: 20px;
}
.view-comment > ul > li {
  margin-bottom: 20px;
}
.form-control {
  height: 5rem;
  resize: none;
  width: 102%;
}
.form-btn {
  width: 100%;
  height: 100%;
}
</style>
