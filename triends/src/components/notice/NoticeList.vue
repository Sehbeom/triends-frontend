<template>
  <div>
    <page-detail-header title="공지사항" />
    <b-list-group>
      <b-list-group-item
        :key="article.noticeId"
        v-for="article in articles"
        style="text-align: left"
        @click="viewNotice(article)"
        >공지사항: {{ article.subject }}</b-list-group-item
      >
    </b-list-group>
  </div>
</template>

<script>
import PageDetailHeader from "@/components/layout/PageDetailHeader.vue";
import { getNoticeList } from "@/apis/notice";

export default {
  components: { PageDetailHeader },
  name: "NoticeList",
  data() {
    return {
      articles: [],
    };
  },
  created() {
    getNoticeList(
      ({ data }) => {
        console.log(data);
        this.articles = data.data;
        console.log(this.articles);
      },
      (error) => {
        console.log(error);
        this.$router.push({ name: "error" });
      }
    );
  },
  methods: {
    viewNotice(article) {
      //   console.log(article.articleno);
      this.$router
        .push({
          name: "noticeDetail",
          params: { articleno: article.noticeId },
        })
        .catch(() => {
          console.log("uncaught error");
        });
    },
  },
};
</script>

<style></style>
