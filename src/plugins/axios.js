import Vue from "vue";

// Lib imports
import axios from "axios";

// Vue.prototype.$http = axios;

// 默认请求
axios.defaults.baseURL = "http://127.0.0.1:6868";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 获取用户ID

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // console.log(response.code);
    return response.data;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

// 请求接口，调用回调函数
Vue.prototype.$fetch = function(url, method, data, callFun, errFun) {
  // 获取 token
  // let token = this.$store.getters.getToken;
  // console.log("token", token);
  // api
  axios({
    method: method,
    url: url,
    data: data,
    params: {}
  })
    .then(function(response) {
      if (response.code == 0) {
        callFun(response.data);
      } else {
        console.log(response.msg);
        if (errFun) {
          errFun(response.msg);
        }
      }
    })
    .catch(function(error) {
      console.log(error, "error");
      if (errFun) {
        errFun(error);
      }
    });
};
