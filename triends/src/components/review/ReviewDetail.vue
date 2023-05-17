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
    <div>
      <b-button v-b-toggle.sidebar>Toggle Sidebar</b-button>
      <b-sidebar id="sidebar" title="일자별 여행지" shadow class="my-sidebar">
        <div class="px-3 py-2">
          <b-btn>1일차</b-btn>
        </div>
      </b-sidebar>
    </div>
    <div class="img-wrap" ref="target">
      <button @click="moveScrollLeft">Left +100</button>
      <ul>
        <li><img src="../../assets/ssafy_logo.png" /></li>
        <li><img src="../../assets/ssafy_logo.png" /></li>
        <li><img src="../../assets/ssafy_logo.png" /></li>
        <li><img src="../../assets/ssafy_logo.png" /></li>
      </ul>
    </div>
    <br />
    <div class="review-content">여행후기 내용이 들어갈 자리입니다~</div>
    <div class="comment"></div>
  </div>
</template>

<style scoped lang="scss">
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
.img-wrap > ul {
  list-style: none;
}
.img-wrap > ul > li {
  display: inline-block;
}
li > img {
  width: 300px;
}
.img-wrap::-webkit-scrollbar {
  width: 10px;
}
.img-wrap::-webkit-scrollbar-thumb {
  background-color: #2f3542;
  border-radius: 10px;
  background-clip: padding-box;
  border: 2px solid transparent;
}
.img-wrap::-webkit-scrollbar-track {
  background-color: grey;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
}
</style>

<script>
export default {
  components: {},
  methods: {
    moveScrollLeft() {
      var _scrollX = this.$refs.target.scrollHeight;
      this.$refs.target.scrollHeight = _scrollX + 100;
      console.log(_scrollX);
    },
  },
};
</script>
