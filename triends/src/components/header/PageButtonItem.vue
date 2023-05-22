<template>
  <div class="nav-button">
    <a :href="link" class="link">{{ title }}</a>
    <img :src="icon" alt="" width="24px" height="24xpx" class="icon" />
  </div>
</template>

<script>
export default {
  name: "PageButtonItem",
  props: {
    title: String,
    icon: String,
    link: String,
  },
};
</script>

<style scoped>
.nav-button {
  margin-left: 5px;
  margin-right: 5px;
  width: 18%;
  min-width: 160px;
  border: 2px black;
  height: 50px;
  border-style: solid;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  transition: all 0.3s;
  cursor: pointer;
}
.link {
  color: black;
  font-weight: bold;
}
.nav-button:hover {
  background-color: white;
  filter: invert(100%);
  -webkit-filter: invert(100%);
}
</style>
