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
  display: flex;
  justify-content: center;
  min-width: 1000px;
}
.article {
  width: 80%;
  margin-top: 40px;
}
</style>
