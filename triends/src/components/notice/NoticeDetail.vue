<template>
  <div>
    <page-detail-header :title="article.articleTitle" />
    <user-and-button :username="article.articleWriter" />
    <hr />
    <div class="article-content">
      {{ article.articleContent }}
    </div>
  </div>
</template>

<script>
import PageDetailHeader from "../layout/PageDetailHeader.vue";
import UserAndButton from "../layout/UserAndButton.vue";

export default {
  components: { PageDetailHeader, UserAndButton },
  name: "NoticeDetail",
  data() {
    return {
      article: {
        articleno: 0,
        articleTitle: "",
        articleContent: "",
        articleWriter: "admin",
      },
    };
  },
  created() {
    this.article.articleno = this.$route.params.articleno;
    this.article.articleTitle = "test";
    this.article.articleContent =
      "test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text ";
  },
};
</script>

<style>
.article-content {
  margin-top: 2vw;
  text-align: left;
}
</style>
