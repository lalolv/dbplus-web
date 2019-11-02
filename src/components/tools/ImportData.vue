<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-list-tile v-on="on" class="mt-3">
        <v-list-tile-action>
          <v-icon color="grey darken-1">mdi-database-import</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="grey--text text--darken-1">导入数据</v-list-tile-title>
      </v-list-tile>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>导入数据</v-card-title>

      <v-card-text>
        <v-form>
          <v-text-field
            color="black"
            prepend-icon="mdi-data_usage"
            name="dbName"
            label="数据集名称"
            type="text"
            v-model="dbName"
          ></v-text-field>
          <v-text-field
            color="black"
            prepend-icon="mdi-collections"
            name="collName"
            label="集合名称"
            v-model="collName"
          ></v-text-field>
        </v-form>
        <vue-dropzone
          ref="myVueDropzone"
          id="dropzone"
          :options="dropzoneOptions"
          v-on:vdropzone-sending="sendingEvent"
        ></vue-dropzone>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" flat @click="dialog = false">关闭</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  data() {
    return {
      dialog: false,
      dropzoneOptions: {
        url: process.env.VUE_APP_API_URL + "/data/import",
        thumbnailWidth: 150,
        maxFilesize: 10
      },
      dbName: "",
      collName: ""
    };
  },
  components: {
    vueDropzone: vue2Dropzone
  },
  methods: {
    sendingEvent(file, xhr, formData) {
      formData.append("db_name", this.dbName);
      formData.append("coll_name", this.collName);
    }
  }
};
</script>