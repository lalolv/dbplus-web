// https://vuex.vuejs.org/en/mutations.html

export default {
  // 保存 token
  setToken(state, token) {
    // 改进方法是把token值储存在sessionStorage（会话信息）中，特点是当浏览器关闭时，会话信息会清除掉，增强token的保密性；
    sessionStorage.setItem("token", token);
    // 注释部分就是最基础的vueX的存储方法
    state.token = token;
  }
};
