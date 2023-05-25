<template>
  <div>
    <page-detail-header title="공지사항" />
    <div>
      <b-table
        striped
        hover
        :items="articles"
        :fields="fields"
        selectable
        :select-mode="selectMode"
        ref="selectableTable"
        @row-selected="viewNotice"
      ></b-table>
    </div>
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
      fields: [
        // A column that needs custom formatting
        { key: "noticeId", label: "번호" },
        // A regular column
        { key: "subject", label: "제목" },
        // A regular column
        { key: "createdAt", label: "작성일" },
      ],
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
    viewNotice(item) {
      console.log(item);
      this.$router
        .push({
          name: "noticeDetail",
          params: { articleno: item[0].noticeId },
        })
        .catch(() => {
          console.log("uncaught error");
        });
    },
  },
};
</script>

<style scoped>
.content {
  font-size: 2rem;
  font-weight: bold;
}
</style>
