<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-card class="add-card" color="#ff5f5f5" width="300px" height="253px" hover ripple v-on="on">
        <v-layout row align-center justify-center fill-height>
          <v-icon class="content">mdi-plus-circle</v-icon>
          <span class="content">新的服务器</span>
        </v-layout>
      </v-card>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">添加服务器</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout column>
            <v-text-field label="名称*" color="primary" required v-model="sName"></v-text-field>
            <v-text-field label="描述信息" color="primary" v-model="sDesc"></v-text-field>
            <v-text-field label="地址*" color="primary" v-model="sAddr"></v-text-field>
            <v-text-field label="端口*" color="primary" v-model="sPort"></v-text-field>
          </v-layout>
        </v-container>
        <small>*必填字段</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="dialog = false">关闭</v-btn>
        <v-btn color="blue darken-1" flat @click="save">保存</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      sName: "",
      sDesc: "",
      sAddr: "",
      sPort: ""
    };
  },
  props: ["group"],
  methods: {
    save() {
      let bodyData = {
        name: this.sName,
        desc: this.sDesc,
        addr: this.sAddr,
        port: this.sPort
      };
      this.$fetch(
        "/server/add?group=" + this.group,
        "post",
        bodyData,
        this.done
      );
    },
    done() {
      this.$emit("done");
      this.dialog = false;
    }
  }
};
</script>

<style>
.add-card {
  margin: 24px;
}
.content {
  font-size: 18pt;
  margin: 4px;
}
</style>
