<template>
  <div class="plan-container">
    <div class="image-container">
      <img :src="item.img" alt="" class="plan-img" />
    </div>
    <div class="plan-data">
      <span class="plan-title">{{ item.title }}</span>
      <span class="plan-date">2022.01~2022.03</span>
      <div class="plan-button">
        <span>누구누구 외 3명</span>
        <b-button v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPlanCard",
  props: { item: {} },
  data() {
    return {};
  },
};
</script>

<style scoped>
.plan-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20vw;
  margin: 0.5vw;
  border-radius: 15px;
  min-width: 500px;
}
.plan-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.image-container {
  width: 40%;
  height: 100%;
}
.plan-data {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
  width: 70%;
  height: 100%;
  background-color: tomato;
}
.plan-title {
  text-align: left;
}
.plan-date {
  text-align: left;
}
.plan-button {
  margin-top: 2vw;
  text-align: right;
}
</style>
