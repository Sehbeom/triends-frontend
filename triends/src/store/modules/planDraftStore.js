import { Plan } from "@/util/plan-util";

const planDraftStore = {
  namespaced: true,
  state: {
    myPlan: null,
    day: 0,
    isSelected: false,
  },
  getters: {
    getMyPlanItems: function (state) {
      return state.myPlan.planInfo.courseInfo;
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
      state.myPlan.planInfo.courseInfo.push({ day: state.day, courses: [] });
    },
    SET_NEW_COURSE: (state, { course, day }) => {
      console.log("fuck!!!!!", state.myPlan.planInfo.courseInfo);
      state.myPlan.planInfo.courseInfo[day - 1].courses.push(course);
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
    savePlan: () => {},
    createPlan({ commit }, userId) {
      var newPlan = new Plan(userId);
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
  },
};

export default planDraftStore;
