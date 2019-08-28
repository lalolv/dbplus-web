<template>
  <v-app id="inspire">
    <!-- 导航 -->
    <core-drawer :items="dbs"></core-drawer>
    <!-- 顶部工具栏 -->
    <core-toolbar></core-toolbar>
    <!-- 主体内容 -->
    <core-view></core-view>
    <!-- 底部 -->
    <core-footer></core-footer>
  </v-app>
</template>

<script>
export default {
  components: {},
  created: function() {
    this.$fetch("/server/get", "get", null, this.serverDone);
  },
  data: () => ({
    info: {},
    dbs: []
  }),
  methods: {
    serverDone(result) {
      this.dbs = result;
    }
  }
};
</script>

<style lang="scss">
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
