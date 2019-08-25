<template>
  <v-app id="inspire">
    <!-- 导航 -->
    <core-drawer :items="dbs"></core-drawer>
    <!-- 顶部工具栏 -->
    <core-toolbar></core-toolbar>
    <!-- 主体内容 -->
    <core-view></core-view>
  </v-app>
</template>

<script>
export default {
  components: {},
  created: function() {
    this.$fetch(
      "/server/get?key=" + this.$route.params.id,
      "get",
      null,
      this.serverDone
    );
  },
  data: () => ({
    info: {},
    dbs: []
  }),
  methods: {
    serverDone(result) {
      this.info = result.server;
      this.dbs = result.dbs;
    }
  }
};
</script>

<style lang="scss">
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
