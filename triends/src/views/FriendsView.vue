<template>
  <div>
    <page-button-header />
    <article-layout>
      <router-view />
    </article-layout>
  </div>
</template>

<script>
import PageButtonHeader from "../components/header/PageButtonHeader.vue";
import ArticleLayout from "../components/layout/ArticleLayout.vue";

export default {
  name: "FriendsView",
  components: {
    PageButtonHeader,
    ArticleLayout
  }
};
</script>

<style></style>
