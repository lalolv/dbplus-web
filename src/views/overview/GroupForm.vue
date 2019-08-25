<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" dark flat>修改</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">修改组</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout column>
            <v-text-field label="组名*" color="primary" required v-model="gName"></v-text-field>
            <v-text-field label="描述信息*" color="primary" v-model="gDesc"></v-text-field>
          </v-layout>
        </v-container>
        <small>*必填字段</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="dialog = false">关闭</v-btn>
        <v-btn color="blue darken-1" flat @click="addGroup">保存</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      gName: this.info.name,
      gDesc: this.info.desc
    };
  },
  props: ["info"],
  methods: {
    // 添加组
    addGroup() {
      let bodyData = {
        name: this.gName,
        desc: this.gDesc
      };
      this.$fetch(
        "/group/update?key=" + this.info.key,
        "put",
        bodyData,
        this.addGroupDone
      );
    },
    addGroupDone() {
      this.dialog = false;
      this.$emit("done");
    }
  }
};
</script>

<style>
</style>
