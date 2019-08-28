<template>
  <v-app id="inspire">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="red">
              <v-toolbar-title>用户登录</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  color="black"
                  prepend-icon="mdi-account"
                  name="login"
                  label="用户名"
                  type="text"
                  v-model="user"
                ></v-text-field>
                <v-text-field
                  id="password"
                  color="black"
                  prepend-icon="mdi-lock"
                  name="password"
                  label="密码"
                  type="password"
                  v-model="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="black"
                dark
                v-on:click="onLogin"
                :loading="loading"
                :disabled="loading"
              >登录</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import md5 from "blueimp-md5";

export default {
  data: () => ({
    user: "",
    password: "",
    loading: false
  }),
  components: {},
  methods: {
    onLogin() {
      this.loading = true;
      let bodyData = {
        name: this.user,
        passwd: md5(this.password)
      };
      this.$fetch(
        "/user/login",
        "post",
        bodyData,
        this.loginDone,
        this.loginErr
      );
    },
    loginDone() {
      // 跳转到主页
      this.$router.replace("home/dashboard/1", this.goHome);
    },
    goHome() {
      // 还原按钮状态
      this.loading = false;
    },
    loginErr(err) {
      this.loading = false;
      this.$events.emit("snackbar", { color: "error", text: err });
    }
  }
};
</script>
