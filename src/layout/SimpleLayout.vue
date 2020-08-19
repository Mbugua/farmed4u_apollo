<template>
  <div class="container">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
