<template>
  <div>
    <page-button-header />
    <article-layout>
      <router-view />
    </article-layout>
  </div>
</template>

<script>
import ArticleLayout from "@/components/layout/ArticleLayout.vue";
import PageButtonHeader from "@/components/header/PageButtonHeader.vue";

export default {
  name: "AttractionReviewView",
  components: {
    ArticleLayout,
    PageButtonHeader,
  },
};
</script>

<style></style>
