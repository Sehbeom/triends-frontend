<template>
  <div class="review">
    <div class="title">
      <h1>여행 후기 제목</h1>
    </div>
    <div class="user">
      <img src="../../assets/logo.png" />
      <span>작성자</span>
      <b-btn size="sm">친구추가</b-btn>
    </div>
    <hr />
    <side-bar />
    <div class="review-img">
      <img src="../../assets/ssafy_logo.png" />
      <img src="../../assets/ssafy_logo.png" />
      <img src="../../assets/ssafy_logo.png" />
    </div>
    <div class="review-content">여행후기 내용이 들어갈 자리입니다~</div>
    <br />
    <div class="comment"></div>
  </div>
</template>

<style scoped>
.review {
  width: 950px;
  margin-left: 220px;
  text-align: left;
}
.title {
  text-align: left;
  margin-top: 100px;
}
.title > h1 {
  font-weight: bolder;
}
.user {
  text-align: left;
  margin-top: 40px;
}
.user > img {
  height: 25px;
  width: 25px;
  margin-right: 5px;
}
.user > span {
  font-weight: bolder;
  margin-right: 20px;
}
</style>

<script>
import SideBar from "./SideBar.vue";
export default {
  components: {
    SideBar,
  },
};
</script>
