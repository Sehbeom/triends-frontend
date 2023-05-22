import NoticeView from "../views/NoticeView";
import NoticeList from "../components/notice/NoticeList";
import NoticeDetail from "../components/notice/NoticeDetail";

export default {
  path: "/notice",
  name: "notice",
  component: NoticeView,
  redirect: "/notice/list",
  children: [
    {
      path: "list",
      name: "noticeList",
      component: NoticeList,
    },
    {
      path: "detail/:articleno",
      name: "noticeDetail",
      component: NoticeDetail,
    },
  ],
};
