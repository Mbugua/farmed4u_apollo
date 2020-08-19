<template>
  <div>
    <nav-bar />
    <section class="columns is-fullheight">
      <side-bar />

      <div class="section column is-10">
        <component :is="this.$route.meta.layout || 'div'">
          <router-view />
        </component>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import NavBar from "./components/navbar/index.vue";
import SideBar from "./components/sidebar/index.vue";
export default Vue.extend({
  components: {
    NavBar,
    SideBar
  }
});
</script>
