<template>
  <div class="plan-container">
    <img src="../assets/happyhouse.png" alt="" class="plan-img" />
    <div class="plan-data">
      <span class="plan-title">title</span>
      <span class="plan-date">2022.01~2022.03</span>
      <div class="plan-button">
        <b-button variant="success">Button</b-button>
        <b-button variant="outline-primary">Button</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPlanCard",
};
</script>

<style scoped>
.plan-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: beige;
  width: 100%;
  height: 95%;
  margin: 0.5vw;

  border-radius: 15px;
  min-width: 500px;
}
.plan-img {
  width: 120px;
  height: 70px;
}
.plan-data {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
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
