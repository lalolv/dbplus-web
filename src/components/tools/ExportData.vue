<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-list-tile v-on="on">
        <v-list-tile-action>
          <v-icon color="grey darken-1">mdi-database-import</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="grey--text text--darken-1">导出数据</v-list-tile-title>
      </v-list-tile>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="dialog = false">I accept</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    importData() {
      //   let bodyData = {
      //     db_name: "test",
      //     coll_name: "import_demo"
      //   };
      //   this.$fetch("/data/import", "post", bodyData, this.importDone, null);
      console.log("import data");
    },
    importDone() {
      console.log("import done!");
    }
  }
};
</script>