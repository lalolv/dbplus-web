<template>
  <v-toolbar color="red" dense fixed clipped-left app dark>
    <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
    <v-icon class="mx-3">mdi-table-column-plus-after</v-icon>
    <v-toolbar-title class="mr-5 align-center">
      <span class="title">DB Plus</span>
    </v-toolbar-title>
    <v-layout row align-center style="max-width: 650px">
      <a href="#" class="v-btn v-btn--flat navi-menu">概览</a>
      <a href="#" class="v-btn v-btn--flat navi-menu">帮助</a>
      <a href="#" class="v-btn v-btn--flat navi-menu">关于</a>
      <a href="#" class="v-btn v-btn--flat navi-menu">设置</a>
    </v-layout>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    responsive: false,
    responsiveInput: false
  }),

  watch: {},

  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },

  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
    onClickBtn() {
      this.setDrawer(!this.$store.state.app.drawer);
    },
    onClick() {
      //
    },
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true;
        this.responsiveInput = false;
      } else {
        this.responsive = false;
        this.responsiveInput = true;
      }
    }
  }
};
</script>

<style>
.navi-menu {
  color: #fff;
  text-decoration: none;
}
</style>
