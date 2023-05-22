<template>
  <div class="plan-container">
    <div class="image-container">
      <img :src="item.thumbnail" alt="" class="plan-img" />
    </div>
    <div class="plan-data">
      <div class="plan-header">
        <span class="plan-title">{{ item.title }}</span>
        <span class="plan-date">2022.01~2022.03</span>
      </div>
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
  width: 90%;
  height: 20vw;
  margin-bottom: 30px;
  border-radius: 15px;
  min-width: 500px;
}
.plan-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.image-container {
  width: 45%;
  height: 100%;
}
.plan-data {
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  padding: 10px 10px 10px 10px;
  width: 55%;
  height: 100%;
  background-color: tomato;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border: solid 3px;
}
.plan-title {
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
}
.plan-date {
  width: 100%;
  font-size: 1.5rem;
}
.plan-button {
  margin-top: 2vw;
  text-align: right;
}
</style>
