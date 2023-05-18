<template>
  <div class="review-card" @click="$router.push({ name: 'reviewdetail' })">
    <img src="../assets/logo.png" alt="" style="" />

    <div class="content-section">
      <div class="title">{{ item.title }}</div>
      <div>{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
// import { useRouter, useRoute } from 'vue-router'
export default {
  props: { item: {} },
  name: "AttractionReviewCard",
  methods: {
    // route() {
    //   $router.push({ path: "/detail" });
    //   // detail id 추가할것임.
    // },
  },
};
</script>

<style scoped>
.review-card {
  width: 100%;
  height: 15vw;
  background-color: beige;
  margin-top: 1vw;
  margin-bottom: 1vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
}
.image-section {
  width: 25%;
}
.content-section {
  width: 60%;
  height: 100%;
  text-align: left;
  text-decoration: none;
}
.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 7%;
  margin-top: 3%;
  color: black;
}
</style>
