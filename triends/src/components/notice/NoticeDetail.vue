<template>
  <div>
    <page-detail-header :title="article.subject" />
    <user-and-button :username="article.userId" />
    <hr />
    <div class="article-content">
      {{ article.content }}
    </div>
    <hr/>
  </div>
</template>

<script>
import PageDetailHeader from "../layout/PageDetailHeader.vue";
import UserAndButton from "../layout/UserAndButton.vue";
import http from "@/util/http-common";

export default {
  components: { PageDetailHeader, UserAndButton },
  name: "NoticeDetail",
  data() {
    return {
      article: {
        // articleno: 0,
        // articleTitle: "",
        // articleContent: "",
        // articleWriter: "admin",
        article:Object,
      },
    };
  },
  created() {
    // this.article.articleno = this.$route.params.articleno;
    // this.article.articleTitle = "test";
    // this.article.articleContent =
    //   "test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text test article text ";
    this.articleno=this.$route.params.articleno;
    let getnotice='notice/'+this.articleno;
    http.get(getnotice).then(({data})=>{
      this.article=data.data;
    })
  },
};
</script>

<style>
.article-content {
  margin-top: 2vw;
  text-align: left;
  min-height: 40vw;
}
</style>
