<template>
  <div>
    <article-layout>
      <router-view />
    </article-layout>
  </div>
</template>

<script>
import ArticleLayout from "@/components/layout/ArticleLayout.vue";

export default {
  components: { ArticleLayout },
  name: "NoticeView",
};
</script>

<style></style>
