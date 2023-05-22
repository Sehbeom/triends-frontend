<template>
  <div class="attraction-card">
    <img :src="item.img" alt="" class="card-img" />
    <div class="card-content">
      <span class="card-title">{{ item.title }}</span>
      <span class="card-text">{{ item.content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {},
  },
  name: "AttractionRecommandCard",
};
</script>

<style scoped>
.attraction-card {
  max-width: 400px;
  width: 90%;
  min-width: 270px;
}

.card-img {
  width: 100%;
  height: 400px;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  object-fit: cover;
}
.card-content {
  text-align: left;
  margin-top: 10px;
  padding-left: 15px;
  background-color: rgb(250, 88, 60);
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
  display: flex;
  flex-direction: column;
  border: 3px solid;
}
.card-title {
  margin-top: 10px;
  font-family: spoqa;
  font-size: 1.5rem;
  font-weight: 800;
}
.card-text {
  font-family: spoqa;
  font-size: 1rem;
  height: 100px;
  font-weight: 800;
  overflow: hidden;
}
</style>
