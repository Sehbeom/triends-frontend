import jwtDecode from "jwt-decode";
import router from "@/router/index";
import {
  login,
  findById,
  tokenRegeneration,
  logout,
  updateUserInfo,
  join,
} from "@/apis/user";

const userStore = {
  namespaced: true,
  state: {
    isLogin: false,
    isLoginError: false,
    userInfo: null,
    isValidToken: false,
  },
  getters: {
    checkUserInfo: function (state) {
      return state.userInfo;
    },
    checkToken: function (state) {
      return state.isValidToken;
    },
  },
  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    SET_IS_LOGIN_ERROR: (state, isLoginError) => {
      state.isLoginError = isLoginError;
    },
    SET_IS_VALID_TOKEN: (state, isValidToken) => {
      state.isValidToken = isValidToken;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.isLogin = true;
      state.userInfo = userInfo;
    },
    SET_LOGOUT: (state) => {
      state.isLogin = false;
      console.log(state.isLogin);
    },
  },
  actions: {
    async userConfirm({ commit }, userId) {
      await login(
        userId,
        ({ data }) => {
          if (data.message === "로그인 성공했습니다.") {
            let accessToken = data.data["access-token"];
            let refreshToken = data.data["refresh-token"];
            console.log(
              "login success token created!!!! >> ",
              accessToken,
              refreshToken
            );
            commit("SET_IS_LOGIN", true);
            commit("SET_IS_LOGIN_ERROR", false);
            commit("SET_IS_VALID_TOKEN", true);
            sessionStorage.setItem("access-token", accessToken);
            sessionStorage.setItem("refresh-token", refreshToken);
          } else {
            console.log(data);
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", true);
            commit("SET_IS_VALID_TOKEN", false);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    async getUserInfo({ commit, dispatch }, token) {
      let decodeToken = jwtDecode(token);
      console.log("2. getUserInfo() decodeToken :: ", decodeToken);
      await findById(
        decodeToken.userId,
        ({ data }) => {
          if (data.message === "유저 정보 조회가 완료되었습니다.") {
            commit("SET_USER_INFO", data.data);
            console.log("3. getUserInfo data >> ", data);
          } else {
            console.log("유저 정보 없음!!!!");
          }
        },
        async (error) => {
          console.log(
            "getUserInfo() error code [토큰 만료되어 사용 불가능.] ::: ",
            error.response.status
          );
          commit("SET_IS_VALID_TOKEN", false);
          await dispatch("tokenRegeneration"); // vuex action 호출하는 것!
        }
      );
    },
    async tokenRegeneration({ commit, state }) {
      console.log(
        "토큰 재발급 >> 기존 토큰 정보 : {}",
        sessionStorage.getItem("access-token")
      );
      await tokenRegeneration(
        state.userInfo,
        ({ data }) => {
          console.log(data);
          if (data.message === "토큰 재발급이 완료되었습니다.") {
            let accessToken = data.data["access-token"];
            console.log("재발급 완료 >> 새로운 토큰 : {}", accessToken);
            sessionStorage.setItem("access-token", accessToken);
            commit("SET_IS_VALID_TOKEN", true);
          }
        },
        async (error) => {
          // HttpStatus.UNAUTHORIZE(401) : RefreshToken 기간 만료 >> 다시 로그인!!!!
          if (error.response.status === 401) {
            console.log("갱신 실패");
            // 다시 로그인 전 DB에 저장된 RefreshToken 제거.
            await logout(
              state.userInfo.userid,
              ({ data }) => {
                if (data.message === "로그아웃 되었습니다.") {
                  console.log("리프레시 토큰 제거 성공");
                } else {
                  console.log("리프레시 토큰 제거 실패");
                }
                alert("RefreshToken 기간 만료!!! 다시 로그인해 주세요.");
                commit("SET_IS_LOGIN", false);
                commit("SET_USER_INFO", null);
                commit("SET_IS_VALID_TOKEN", false);
                router.push({ name: "login" });
              },
              (error) => {
                console.log(error);
                commit("SET_IS_LOGIN", false);
                commit("SET_USER_INFO", null);
              }
            );
          }
        }
      );
    },
    async userLogout({ commit }, param) {
      await logout(
        param.userId,
        ({ data }) => {
          console.log("sdslkdfskflls :::::: ", data);
          if (data.message === "로그아웃 되었습니다.") {
            console.log("logouted!!!!!!!!!");

            commit("SET_IS_LOGIN", false);
            commit("SET_USER_INFO", null);
            commit("SET_IS_VALID_TOKEN", false);
            commit("SET_LOGOUT");
          } else {
            console.log("유저 정보 없음!!!!");
          }
          param.router.replace({ name: "home" }).catch(() => {});
        },
        (error) => {
          console.log(error);
        }
      );
    },
    async updateUserInfo({ commit }, userInfo) {
      await updateUserInfo(
        userInfo,
        ({ data }) => {
          if (data.message === "유저 정보 수정가 수정되었습니다.") {
            commit("SET_USER_INFO", data.data);
            console.log("3. getUserInfo data >> ", data);
          } else {
            console.log("유저 정보 없음!!!!");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    async joinWithUserConfirm({ commit }, payload) {
      console.log(payload);
      await join(
        payload.user,
        ({ data }) => {
          if (data.message === "회원가입이 완료되었습니다.") {
            let accessToken = data.data["access-token"];
            let refreshToken = data.data["refresh-token"];
            console.log(
              "join success token created!!!! >> ",
              accessToken,
              refreshToken
            );
            commit("SET_IS_LOGIN", true);
            commit("SET_IS_LOGIN_ERROR", false);
            commit("SET_IS_VALID_TOKEN", true);
            commit("SET_USER_INFO", data.data.userInfo);
            sessionStorage.setItem("access-token", accessToken);
            sessionStorage.setItem("refresh-token", refreshToken);
            payload.router.push({ name: "preference" });
          } else {
            console.log(data);
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", true);
            commit("SET_IS_VALID_TOKEN", false);
            payload.router.push({ name: "error" });
          }
        },
        (error) => {
          console.log(error);
          payload.router.push({ name: "error" });
        }
      );
    },
  },
};

export default userStore;
