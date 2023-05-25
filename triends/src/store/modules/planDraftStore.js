import { postPlan, updatePlan } from "@/apis/plan";
import { Plan } from "@/util/plan-util";
import router from "@/router";

const planDraftStore = {
  namespaced: true,
  state: {
    myPlan: null,
    day: 0,
    isSelected: false,
    isUpdate: false,
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
    getTitle: function (state) {
      return state.myPlan.planInfo.title;
    },
  },
  mutations: {
    SET_NEW_DAY: (state) => {
      state.day++;
      console.log("date ", state.day);
      state.myPlan.courseInfo.push({ dayInfo: state.day, courses: [] });
    },
    SET_NEW_COURSE: (state, { course, day }) => {
      course.startTime = 1;
      course.endTime = 2;
      state.myPlan.courseInfo[day - 1].courses.push(course);
    },
    SET_NEW_PLAN: (state, newPlan) => {
      state.myPlan = newPlan;
      state.day = 1;
      state.isUpdate = false;
    },
    SET_SELECTED_TRUE: (state) => {
      state.isSelected = true;
    },
    SET_SELECTED_FALSE: (state) => {
      state.isSelected = false;
    },
    SET_CHANGED_INFO: (state, { day, value }) => {
      console.log("dsfjkdddddddddd", value, day);
      state.myPlan.courseInfo[day - 1].courses = value;
    },
    SET_MODE_UPDATE: (state, data) => {
      state.isUpdate = true;
      state.myPlan.planInfo.title = data.title;
      state.myPlan.planInfo.planId = data.planId;
      state.myPlan.stateDate = data.startDate;
      state.myPlan.endDate = data.endDate;
      state.myPlan.memberInfo = data.memberInfo;
      state.myPlan.courseInfo.length = data.courseInfo.length;
      state.day = data.courseInfo.length;
      for (let infoIndex = 0; infoIndex < data.courseInfo.length; infoIndex++) {
        console.log("info ", state.myPlan.courseInfo[infoIndex]);
        state.myPlan.courseInfo[infoIndex] = {
          courses: [],
          dayInfo: data.courseInfo[infoIndex].dayInfo,
        };
        for (
          let index = 0;
          index < data.courseInfo[infoIndex].courses.length;
          index++
        ) {
          console.log("please!!!", data.courseInfo[infoIndex].courses[index]);
          state.myPlan.courseInfo[infoIndex].courses[index] =
            data.courseInfo[infoIndex].courses[index].attractionInfo;
        }
      }

      console.log("updating...", state.myPlan.courseInfo);
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
    updateChanges({ commit }, { day, value }) {
      console.log(day, value);
      commit("SET_CHANGED_INFO", { day, value });
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
    setModeUpdate({ commit }, data) {
      commit("SET_MODE_UPDATE", data);
    },
    exitPlan({ state }) {
      console.log("exit success");
      state.myPlan = null;
      state.day = 0;
      state.isUpdate = false;
      state.isSelected = false;
    },
    updatePlan({ state }, title) {
      state.myPlan.planInfo.title = title;
      updatePlan(state.myPlan, ({ data }) => {
        if (data.message === "플랜이 수정되었습니다.") {
          router.push({ name: "home" });
        } else {
          router.push({ name: "error" });
        }
      }),
        () => {
          router.push({ name: "error" });
        };
    },
  },
};

export default planDraftStore;
