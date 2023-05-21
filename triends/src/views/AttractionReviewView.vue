<template>
  <article-layout>
    <router-view/>
  </article-layout>
</template>

<script>
import ArticleLayout from "@/components/layout/ArticleLayout.vue";

export default {
  name: "AttractionReviewView",
  components: {
    ArticleLayout,
  },
};
</script>

<style>
</style>
