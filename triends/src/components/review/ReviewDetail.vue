<template>
  <div class="review">
    <page-detail-header :title="articledata.subject"></page-detail-header>
    <div class="review-page-container">
      <b-container style="width: 90%; min-width: 1000px">
        <user-and-button :username="articledata.userName" />
        <!-- {{ articledata.userId }}
        {{ this.userInfo.userId }} -->
        <hr />
        <div class="sidebar-btn">
          <b-button v-b-toggle.sidebar>날짜별 사진보기</b-button>
          <b-sidebar id="sidebar" title="일자별 여행지" shadow class="my-sidebar">
            <div class="px-3 py-2">
              <div v-for="item in attraction.attr" :key="item.days">
                <b-btn v-model="sidebarday" @click="showslide(item.days)"
                  >{{ item.days }}일차</b-btn
                >
                <div v-for="course in item.courses" :key="course">
                  {{ course.attractionInfo.title }}
                </div>
              </div>
            </div>
          </b-sidebar>
        </div>
        <custom-carousel :items="items"></custom-carousel>
        <div class="review-content">
          {{ articledata.content }}
        </div>
        <div class="control-btn-container">
          <router-link
            :to="{ name: 'reviewmodify', query: { reviewid: articledata.reviewId } }"
            v-if="articledata.userId === this.userInfo.userId"
            ><b-btn class="control-btn">글수정</b-btn></router-link
          >
          <b-btn
            v-if="articledata.userId === this.userInfo.userId"
            class="control-btn"
            @click="deletereview"
            >글삭제</b-btn
          >
          <router-link :to="{ name: 'review' }"
            ><b-btn class="control-btn">글목록</b-btn></router-link
          >
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
import { reviewDetail, reviewDelete } from "@/apis/review";
import { findById } from "@/apis/user";
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
      articledata: {},
      attraction: {
        attr: [
          // { days: courseInfo[i].dayInfo, course: courseInfo[i].courses }
        ],
      },
      items: {
        type: "dimmedImageCarousel",
        auto: "false",
        // items: {
        //   from: "view",
        //   items: [],
        // },
        from: "view",
        items: [],
      },
      comments: [{}],
      sidebarday: 1,
    };
  },
  created() {
    console.log(this.$route.query.reviewId);
    if (!this.userInfo.userId) {
      this.articleno = this.$route.params.articleno;
      // let getreview = "review/detail/" + this.articleno;
    } else {
      reviewDetail(
        this.$route.query.reviewId,
        this.userInfo.userId,
        ({ data }) => {
          this.articledata = data.data;
          console.log(this.articledata);
          console.log(this.articledata.rateInfo);
          this.items["rateInfo"] = this.articledata.rateInfo;
          console.log(this.items.items);

          let courseInfo = this.articledata.planInfo.courseInfo;
          // console.log(courseInfo);
          for (let i = 0; i < courseInfo.length; i++) {
            let tmp = { days: courseInfo[i].dayInfo, courses: courseInfo[i].courses };
            this.attraction.attr.push(tmp);
          }
          console.log(this.attraction.attr);

          findById(
            this.articledata.userId,
            ({ data }) => {
              this.articledata.userName = data.data.name;
              console.log(this.articledata.userName);
            },
            (error) => {
              console.log(error);
              this.$router.push({ name: "error" });
            }
          );
        },
        (error) => {
          console.log(error);
          this.$router.push({ name: "error" });
        }
      );
    }
  },
  methods: {
    showslide(day) {
      let key = 0;
      // while(this.items.items.length>0){
      //   this.items.items.pop();
      // }
      console.log(this.items.items);
      let tmpc = [];
      this.attraction.attr[day - 1].courses.forEach((element) => {
        let tmp = {};
        console.log(element);
        console.log(element.attractionInfo);
        tmp["key"] = key++;
        tmp["contentId"] = element.attractionInfo.contentId;
        tmp["title"] = element.attractionInfo.title;
        tmp["firstImage"] = element.attractionInfo.firstImage;
        tmp["rate"] = element.attractionInfo.rate;
        tmpc.push(tmp);
      });
        this.items.items=tmpc;
      console.log(this.items);
    },
    deletereview() {
      console.log(this.articledata.reviewId);
      reviewDelete(
        this.articledata.reviewId,
        ({ data }) => {
          console.log(data);
          this.$router
            .push({
              name: "review",
            })
            .catch(() => {
              console.log("uncaght error");
            });
        },
        (error) => {
          console.log(error);
          this.$router.push({ name: "error" });
        }
      );
    },
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
.sidebar-btn {
  margin-bottom: 30px;
}
.control-btn-container {
  text-align: right;
}
.control-btn {
  margin-left: 10px;
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
