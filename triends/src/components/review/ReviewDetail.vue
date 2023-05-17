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
          <div class="img-wrap" ref="target">
            <button class="left-paddle paddle" @click="scrollLeft">왼쪽</button>
            <button class="right-paddle paddle" @click="scrollRight">오른쪽</button>
            <ul class="menu" ref="menu">
              <li><img src="../../assets/ssafy_logo.png" /></li>
              <li><img src="../../assets/ssafy_logo.png" /></li>
              <li><img src="../../assets/ssafy_logo.png" /></li>
              <li><img src="../../assets/ssafy_logo.png" /></li>
            </ul>
          </div>
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

<style scoped lang="scss">
.review-page-container {
  margin-top: 5vw;
  width: 1000px;
  text-align: left;
  padding-left: 50px;
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
  text-align: left;
  height: 250px;
  margin: 20px;
  overflow-x: auto;
  white-space: nowrap;
}
ul {
  list-style: none;
  padding-left: 0;
}
.img-wrap > ul > li {
  display: inline-block;
}
li > img {
  width: 300px;
}
.review-content {
  // background-color: red;
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

<script>
import PageDetailHeader from "@/components/layout/PageDetailHeader.vue";
import ArticleLayout from "@/components/layout/ArticleLayout.vue";
import UserAndButton from "../layout/UserAndButton.vue";

export default {
  components: {
    PageDetailHeader,
    ArticleLayout,
    UserAndButton,
  },
  data() {
    return { scrollAmount: 0 };
  },
  methods: {
    scrollLeft: function () {
      this.scrollLeft;
      const menu = this.$refs.menu;
      console.log(menu);
      console.log(window);
      window.scrollBy({
        top: 200,
        behavior: "smooth",
      });
      menu.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    },
    scrollRight: function () {
      const menu = this.$refs.menu;
      menu.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    },
  },
};
</script>
