<template>
  <v-container fluid grid-list-md text-xs-center>
    <v-layout justify-center align-center>
      <v-flex grow>
        <router-view/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Vuetify Material Dashboard by CreativeTim"
    };
  }
};
</script>

<style>
#core-view {
  padding-bottom: 100px;
}
</style>
