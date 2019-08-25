// https://vuex.vuejs.org/en/getters.html

export default {
  getToken(state) {
    // 改进方法就是判断存储的token是否有值，没有的话就从浏览器会话信息中存储的token中获取。
    if (!state.token) {
      state.token = sessionStorage.getItem("token");
    }
    // 下面是基础的获取存储的token值
    return state.token;
  }
};
