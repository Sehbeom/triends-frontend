<template>
  <div class="article-container">
    <div class="article">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleLayout",
};
</script>

<style>
.article-container {
  background-color: purple;
  display: flex;
  justify-content: center;
  min-width: 1000px;
}
.article {
  width: 75%;
  background-color: black;
  margin-top: 5vw;
}
</style>
