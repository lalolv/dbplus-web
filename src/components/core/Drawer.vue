<template>
  <v-navigation-drawer fixed clipped v-model="drawer" app>
    <v-list dense>
      <!-- 附加功能列表 -->
      <v-list-tile class="mt-3">
        <v-list-tile-action>
          <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="grey--text text--darken-1">创建集合</v-list-tile-title>
      </v-list-tile>
      <ImportData></ImportData>
      <ExportData></ExportData>
      <!-- 当前服务器 -->
      <v-subheader class="mt-3 grey--text text--darken-1">开发服务器: 10.19.238.2:27017</v-subheader>
      <!-- 集合列表 -->
      <v-list-group
        v-for="item in items"
        :key="item.server"
        v-model="item.active"
        prepend-icon="mdi-database"
        no-action
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.db }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <!-- 集合 -->
        <v-list-tile v-for="subItem in item.colls" :key="subItem" @click="goColl(item.db,subItem)">
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
// import { mapMutations, mapState } from "vuex";
import ImportData from "../tools/ImportData";
import ExportData from "../tools/ExportData";

export default {
  data: () => ({
    logo: "../../img/logo.png",
    drawer: true,
    responsive: false
  }),
  props: ["items"],
  components: {
    ImportData,
    ExportData
  },
  computed: {
    inputValue: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  methods: {
    // ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
    goColl(db, c) {
      this.$router.push({ name: "datacoll", params: { coll: c, db: db } });
    }
  }
};
</script>

<style lang="scss">
#app-drawer {
  .v-list__tile {
    border-radius: 4px;

    &--buy {
      margin-top: auto;
      margin-bottom: 17px;
    }
  }

  .v-image__image--contain {
    top: 9px;
    height: 60%;
  }

  .search-input {
    margin-bottom: 30px !important;
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
