<template>
  <div class="user-container">
    <img :src="defaultprofile" />
    <span>{{ username }}</span>
  </div>
</template>

<script>
import defaultprofile from "@/assets/icons/defaultprofile.png";

export default {
  name: "UserLayout",
  props: {
    username: String,
  },
  data() {
    return {
      defaultprofile: defaultprofile
    }
  }
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
