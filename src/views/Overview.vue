<template>
  <v-app id="inspire">
    <!-- 顶部工具栏 -->
    <core-toolbar></core-toolbar>
    <!-- 分组信息 -->
    <v-content>
      <v-container fluid grid-list-sm v-for="g in groups" :key="g.key">
        <v-toolbar class="mb-2" color="black darken-5" dark>
          <v-toolbar-title>{{ g.name }}</v-toolbar-title>
          <span class="subtitle">{{ g.desc }}</span>
          <v-spacer></v-spacer>
          <!-- 编辑服务器 -->
          <GroupForm v-bind:info="g" v-on:done="upServerDone"></GroupForm>
        </v-toolbar>
        <!-- 服务器列表 -->
        <v-layout row wrap align-end>
          <ServerItem
            v-for="s in g.servers"
            v-bind:key="s.key"
            v-bind:info="s"
            v-on:done="upServerDone"
          ></ServerItem>
          <ServerAdd v-bind:group="g.key" v-on:done="upServerDone"></ServerAdd>
        </v-layout>
      </v-container>
    </v-content>
    <!-- 浮动安妞，弹出窗口 -->
    <GroupAdd v-on:done="upGroupDone"></GroupAdd>
  </v-app>
</template>

<script>
import GroupForm from "./overview/GroupForm.vue";
import GroupAdd from "./overview/GroupAdd.vue";
import ServerItem from "./overview/ServerItem.vue";
import ServerAdd from "./overview/ServerAdd.vue";

export default {
  components: {
    GroupForm,
    GroupAdd,
    ServerItem,
    ServerAdd
  },
  created: function() {
    this.getGroups();
  },
  data: () => ({
    groups: []
  }),
  computed: {},
  methods: {
    // 添加服务器
    addServer(k) {
      console.log("k", k);
    },
    // 获取组列表
    getGroups() {
      // 获取服务器列表
      this.$fetch("/group/list", "get", null, this.listDone);
    },
    listDone(result) {
      // console.log(result);
      this.groups = result;
    },
    // 更新组
    upGroupDone() {
      this.getGroups();
    },
    // 更新服务器
    upServerDone() {
      this.getGroups();
    }
  }
};
</script>

<style lang="scss">
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
.subtitle {
  color: #a9a9a9;
  margin-left: 40px;
}
</style>
