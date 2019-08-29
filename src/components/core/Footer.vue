<template>
  <v-footer id="core-footer" absolute height="82">
    <div class="footer-items">
      <span v-for="link in links" :key="link.name">
        <router-link :to="link.Link" class="tertiary--text footer-links">{{ link.name }}</router-link>
      </span>
    </div>
    <v-spacer />
    <span class="font-weight-light copyright">
      &copy;
      {{ (new Date()).getFullYear() }}
      <a href="https://lalo.im/" target="_blank">Lalo</a>, made with
      <v-icon color="tertiary" size="17">mdi-heart</v-icon>for a better mongodb admin
    </span>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: "Home", Link: "/home/dashboard" },
      { name: "Homepage", Link: "http://lalo.im" },
      { name: "About Me", Link: "http://lalo.im" },
      { name: "Github", Link: "https://github.com/lalolv/" }
    ]
  })
};
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
