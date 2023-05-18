<template>
  <div><page-detail-header :title="article.articleTitle" /></div>
</template>

<script>
import PageDetailHeader from "../layout/PageDetailHeader.vue";

export default {
  components: { PageDetailHeader },
  name: "NoticeDetail",
  data() {
    return {
      article: {
        articleno: 0,
        articleTitle: "",
        articleContent: "",
      },
    };
  },
  created() {
    this.article.articleno = this.$route.params.articleno;
    this.article.articleTitle = "test";
    this.article.articleContent = "test article text";
  },
};
</script>

<style></style>
