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
  components: {
    ArticleLayout,
    PageButtonHeader,
  },
  name: "NoticeView",
};
</script>

<style></style>
