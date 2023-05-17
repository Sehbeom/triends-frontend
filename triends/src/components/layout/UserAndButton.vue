<template>
  <div class="user-container">
    <img src="../../assets/logo.png" />
    <span>{{ username }}</span>
    <b-btn size="sm">친구추가</b-btn>
  </div>
</template>

<script>
export default {
  name: "UserLayout",
  props: {
    username: String,
  },
};
</script>

<style>
.user-container {
  background-color: white;
  text-align: left;
}
.user-container > img {
  height: 25px;
  width: 25px;
  margin-right: 5px;
}
.user-container > span {
  font-weight: bolder;
  margin-right: 20px;
}
</style>
