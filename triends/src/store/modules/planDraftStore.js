import { postPlan } from "@/apis/plan";
import { Plan } from "@/util/plan-util";
import router from "@/router";

const planDraftStore = {
  namespaced: true,
  state: {
    myPlan: null,
    day: 0,
    isSelected: false,
  },
  getters: {
    getMyPlanItems: function (state) {
      return state.myPlan.courseInfo;
    },
    getDateArray: function (state) {
      var options = [{ text: "날짜를 선택해주세요!", value: null }];
      for (let index = 1; index <= state.day; index++) {
        options.push({ text: index, value: index });
      }
      return options;
    },
  },
  mutations: {
    SET_NEW_DAY: (state) => {
      state.day++;
      console.log("date ", state.day);
      state.myPlan.courseInfo.push({ dayInfo: state.day, courses: [] });
    },
    SET_NEW_COURSE: (state, { course, day }) => {
      console.log("fuck!!!!!", state.myPlan.courseInfo);
      course.startTime = 1;
      course.endTime = 2;
      state.myPlan.courseInfo[day - 1].courses.push(course);
    },
    SET_NEW_PLAN: (state, newPlan) => {
      state.myPlan = newPlan;
      state.day = 1;
    },
    SET_SELECTED_TRUE: (state) => {
      state.isSelected = true;
    },
    SET_SELECTED_FALSE: (state) => {
      state.isSelected = false;
    },
  },
  actions: {
    savePlan: ({ state, dispatch }, title) => {
      console.log(title, state);
      state.myPlan.planInfo.title = title;
      postPlan(
        state.myPlan,
        ({ data }) => {
          if (data.message === "플랜이 생성되었습니다.") {
            alert("플랜 생성이 완료되었습니다");
            dispatch("exitPlan");
            router.push({ name: "home" });
          }
        },
        ({ error }) => {
          console.log(error);
          router.push({ name: "error" });
        }
      );
    },
    createPlan({ commit }, userId) {
      var newPlan = new Plan(userId);
      newPlan.memberInfo.push(userId);
      console.log("plan created!!", newPlan);
      commit("SET_NEW_PLAN", newPlan);
    },
    addCourse({ commit }, { course, day }) {
      commit("SET_NEW_COURSE", { course, day });
    },
    addDay({ commit }) {
      commit("SET_NEW_DAY");
    },
    setMyPlanSelected({ commit }) {
      commit("SET_SELECTED_TRUE");
    },
    setMyPlanSelectedFalse({ commit }) {
      commit("SET_SELECTED_FALSE");
    },
    exitPlan({ state }) {
      console.log("exit success");
      state.myPlan = null;
      state.day = 0;
      this.isSelected = false;
    },
  },
};

export default planDraftStore;
