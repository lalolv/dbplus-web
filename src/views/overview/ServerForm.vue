<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn flat color="black" v-on="on">修改</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">修改服务器</span>
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
  created() {},
  data() {
    return {
      dialog: false,
      sName: this.info.name,
      sDesc: this.info.desc,
      sAddr: this.info.addr,
      sPort: this.info.port
    };
  },
  props: ["group", "info"],
  methods: {
    save() {
      let bodyData = {
        name: this.sName,
        desc: this.sDesc,
        addr: this.sAddr,
        port: this.sPort
      };
      this.$fetch(
        "/server/update?key=" + this.info.key,
        "put",
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
</style>
