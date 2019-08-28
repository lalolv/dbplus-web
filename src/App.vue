<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
    <!-- global snackbar -->
    <v-snackbar :timeout="6000" top center :color="snackbar.color" v-model="snackbar.show">
      {{ snackbar.text }}
      <v-btn dark flat @click.native="snackbar.show = false" icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      snackbar: {
        show: false,
        text: "",
        color: ""
      }
    };
  },
  mounted() {
    this.$events.on("snackbar", this.showSnackbar);
  },
  methods: {
    showSnackbar(eventData) {
      this.snackbar.color = eventData.color;
      this.snackbar.text = eventData.text;
      this.snackbar.show = true;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/index.scss";
</style>