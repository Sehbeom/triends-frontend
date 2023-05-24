<template>
  <div class="review">
    <page-detail-header :title="articledata.subject"></page-detail-header>
    <div class="review-page-container">
      <b-container style="width: 90%; min-width: 1000px">
        <user-and-button :username="articledata.userName" />
        <hr />
        <div>
          <b-button v-b-toggle.sidebar>날짜별 사진보기</b-button>
          <b-sidebar id="sidebar" title="일자별 여행지" shadow class="my-sidebar">
            <div class="px-3 py-2">
              <b-btn>1일차</b-btn>
            </div>
          </b-sidebar>
        </div>
        <custom-carousel :items="images" />
        <div class="review-content">
          {{ articledata.content }}
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
              <b-button class="form-btn">등록</b-button>
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
import CustomCarousel from "../carousel/CustomCarousel.vue";
import { reviewDetail } from "@/apis/review";
import { mapState } from "vuex";

const userStore = "userStore";

export default {
  name: "ReviewDetail",
  components: {
    PageDetailHeader,
    UserAndButton,
    CustomCarousel,
  },
  data() {
    return {
      articledata:{},
      items: {
        type: "dimmedImageCarousel",
        auto: "false",
        items: [
          {
            days:0,
            images:[],
          }

          // { index: 1, src: "./mainpage.png" },
          // { index: 2, src: "/img/ssafy_logo.9aceab8b.png" },
          // { index: 3, src: "/img/ssafy_logo.9aceab8b.png" },
          // { index: 4, src: "/img/ssafy_logo.9aceab8b.png" },
          // { index: 5, src: "/img/ssafy_logo.9aceab8b.png" },
          // { index: 6, src: "/img/ssafy_logo.9aceab8b.png" },
          // { index: 7, src: "/img/ssafy_logo.9aceab8b.png" },
        ],
      },
      comments: [{}],
    };
  },
  created() {
    console.log(this.$route.query.reviewId);
    if (!this.userInfo.userId) {
      this.articleno = this.$route.params.articleno;
      let getreview = "review/detail/" + this.articleno;
      console.log(getreview);
      console("no lpogin");
    } else {
      let tmpdays=[];
      reviewDetail(
        this.$route.query.reviewId,
        this.userInfo.userId,
        ({ data }) => {
          this.articledata=data.data;
          console.log(this.articledata.planInfo.courseInfo);
          let ttt=this.articledata.planInfo.courseInfo;
          for(let i=0;i<ttt.length;i++){
            tmpdays.days[i]=ttt[i].attractionInfo.daysId
          }
          // this.items.images.days=
          // this.items.items=this.articledata.planInfo.courseInfo.courses.attractionInfo.firstImage
        },
        (error) => {
          console.log(error);
          this.$router.push({ name: "error" });
        }
      );
    }
  },
  computed: {
    ...mapState(userStore, ["userInfo"]),
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
