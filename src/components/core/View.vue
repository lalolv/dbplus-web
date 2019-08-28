<template>
  <v-container fluid grid-list-md text-xs-center>
    <v-layout fill-height justify-center>
      <router-view />
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
