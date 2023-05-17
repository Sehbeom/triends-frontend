<template>
  <div class="plan-container">
    <img src="../assets/happyhouse.png" alt="" class="plan-img" />
    <div class="plan-data">
      <span class="plan-title">title</span>
      <span class="plan-date">2022.01~2022.03</span>
      <div class="plan-button">
        <span>누구누구 외 3명</span>
        <b-button v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-button>
      </div>
    </div>
    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar with backdrop"
      :backdrop-variant="variant"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <b-form-group label="Backdrop variant" label-for="backdrop-variant">
          <b-form-select
            id="backdrop-variant"
            v-model="variant"
            :options="variants"
          ></b-form-select>
        </b-form-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "MyPlanCard",
  data() {
    return {
      variant: "dark",
      variants: [
        "transparent",
        "white",
        "light",
        "dark",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
      ],
    };
  },
};
</script>

<style scoped>
.plan-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: beige;
  width: 100%;
  height: 12vw;
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
