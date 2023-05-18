<template>
  <article-layout>
    <h3>attraction review view!</h3>
    <b-button><router-link :to="{ name: 'reviewregist' }">글쓰기</router-link></b-button>
    <b-button><router-link :to="{ name: 'reviewdetail' }">글보기</router-link></b-button>
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

<style></style>
