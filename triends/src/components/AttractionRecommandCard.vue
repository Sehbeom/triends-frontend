<template>
  <div>
    <b-card
      :title="item.title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ item.content }}
      </b-card-text>
      <b-button href="#" variant="primary"
        ><router-link to="/reviewdetail">go somewhere</router-link></b-button
      >
    </b-card>
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
.mb-2 {
  margin-top: 1vw;
}
</style>
