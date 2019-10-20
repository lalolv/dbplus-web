module.exports = {
  // 这一层都是VueCLI3项目的配置，会被预先使用，并有必要会赋给webpack，
  // 但在这之前，Vue CLI 在一些其他地方也需要用到这个值，而这个值也能做到区分生产环境和开发环境。
  publicPath: process.env.NODE_ENV === "production" ? "/web/" : "/",
  outputDir: "dist"
};
