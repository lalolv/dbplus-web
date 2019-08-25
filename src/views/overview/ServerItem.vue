<template>
  <material-card class="server-card" color="success" :title="info.name" :text="fullIP()" xs4>
    <div>总运行时长：120小时</div>
    <div>总运行时长：120小时</div>
    <div>总运行时长：120小时</div>
    <div>总运行时长：120小时</div>
    <div>总运行时长：120小时</div>
    <template v-slot:actions>
      <v-btn flat color="black" @click="goto">管理</v-btn>
      <v-spacer></v-spacer>
      <ServerForm v-bind:info="info" v-on:done="upServerDone"></ServerForm>
      <v-btn flat color="red">删除</v-btn>
    </template>
  </material-card>
</template>

<script>
import ServerForm from "./ServerForm.vue";

export default {
  components: {
    ServerForm
  },
  data() {
    return {};
  },
  props: ["info"],
  methods: {
    fullIP() {
      return this.info.addr + ":" + this.info.port;
    },
    goto() {
      this.$router.push({ name: "dashboard", params: { id: this.info.key } });
    },
    upServerDone() {
      this.$emit("done");
    }
  }
};
</script>

<style>
.server-card {
  width: 300px;
  min-height: 220px;
  margin: 24px;
}
</style>
