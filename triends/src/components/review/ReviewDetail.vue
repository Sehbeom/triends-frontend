<template>
  <div class="review">
    <page-detail-header :title="article.subject"></page-detail-header>
    <div class="review-page-container">
      <b-container style="width: 90%; min-width: 1000px">
        <user-and-button :username="article.userName" />
        <hr />
        <div>
          <b-button v-b-toggle.sidebar>날짜별 사진보기</b-button>
          <b-sidebar id="sidebar" title="일자별 여행지" shadow class="my-sidebar">
            <div class="px-3 py-2">
              <b-btn>1일차</b-btn>
            </div>
          </b-sidebar>
        </div>
        <carousel-container :items="items" />
        <div class="review-content">
          {{ article.content }}
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
  </div>
</template>

<script>
import PageDetailHeader from "@/components/layout/PageDetailHeader.vue";
import UserAndButton from "../layout/UserAndButton.vue";
import CarouselContainer from "../carousel/Carousel.vue";
import http from "@/util/http-common";

export default {
  name: "ReviewDetail",
  components: {
    PageDetailHeader,
    UserAndButton,
    CarouselContainer,
  },
  data() {
    return {
      article: {},
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
    };
  },
  created() {
    console.log(this.$route.params);
    this.articleno = this.$route.params.articleno;
    let getreview = "review/detail/" + this.articleno;
    console.log(getreview);
    http.get(getreview).then(({ data }) => {
      this.article = data.data;
      console.log(this.article);
    });
  },
};
</script>

<style scoped lang="scss">
.review-page-container {
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
