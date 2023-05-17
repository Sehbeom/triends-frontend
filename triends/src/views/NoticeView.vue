<template>
  <div>
    <article-layout>
      <page-detail-header title="공지사항" />
      <b-list-group>
        <b-list-group-item
          :key="title"
          href="#some-link"
          v-for="title in titles"
          style="text-align: left"
          >공지사항: {{ title }}</b-list-group-item
        >
      </b-list-group>
    </article-layout>
  </div>
</template>

<script>
import ArticleLayout from "@/components/layout/ArticleLayout.vue";
import PageDetailHeader from "@/components/layout/PageDetailHeader.vue";

export default {
  components: { ArticleLayout, PageDetailHeader },
  name: "NoticeView",
  data() {
    return {
      titles: [
        "배고파",
        "집가자",
        "정신나가",
        "배고파",
        "집가자",
        "정신나가",
        "배고파",
        "집가자",
        "정신나가",
        "배고파",
        "집가자",
        "정신나가",
      ],
    };
  },
};
</script>

<style></style>
