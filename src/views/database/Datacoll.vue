<template>
  <v-flex xs12 shrink>
    <material-card color="#3636363" :title="collName" text="New employees on 15th September, 2016">
      <v-data-table
        :headers="headers"
        :items="desserts"
        item-key="_id"
        hide-actions
        style="min-width:820px"
      >
        <template v-slot:items="props">
          <td v-for="header in headers" :key="header.value" class="text-xs-left">
            <v-edit-dialog
              :return-value.sync="props.item[header.value]"
              lazy
              @save="save(props.item._id, header.value, props.item[header.value])"
              @cancel="cancel"
              @open="open"
              @close="close(props.item[header.value])"
            >
              {{ props.item[header.value] }}
              <template v-slot:input>
                <v-text-field
                  v-model="props.item[header.value]"
                  :rules="[maxChars]"
                  label="编辑"
                  single-line
                  counter
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </td>
        </template>
      </v-data-table>
    </material-card>
  </v-flex>
</template>

<script>
export default {
  components: {},
  created: function() {
    this.fetchData();
  },
  data: () => ({
    maxChars: v => v.length <= 50 || "字数受限!",
    pagination: {},
    dbName: "",
    collName: "",
    headers: [],
    desserts: []
  }),
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData"
  },
  methods: {
    // 保存数据
    save(rid, c, v) {
      let url =
        "/data/update?db_name=" +
        this.dbName +
        "&coll_name=" +
        this.collName +
        "&id=" +
        rid;
      let bodyData = {
        column_name: c,
        update_val: v
      };
      this.$fetch(url, "put", bodyData, this.updateDone, null);
    },
    updateDone() {
      console.log("更新完成！");
    },
    cancel() {},
    open() {},
    close() {
      console.log("Dialog closed");
    },
    fetchData() {
      this.dbName = this.$route.params.db;
      this.collName = this.$route.params.coll;
      // 获取数据
      let url =
        "/data/list?db_name=" + this.dbName + "&coll_name=" + this.collName;
      this.$fetch(url, "get", null, this.listDone, null);
    },
    listDone(result) {
      this.headers = result.header;
      this.desserts = result.list;
    }
  }
};
</script>

