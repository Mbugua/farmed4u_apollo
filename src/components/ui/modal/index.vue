<template>
  <transition name="modal">
    <div class="modal" @click="close" v-show="show">
      <div class="modal-card" @click.stop="close">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Modal",
  props: ["show"],

  mounted: function() {
    document.addEventListener("keydown", e => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
  },
  methods: {
    close: function() {
      this.$emit("close");
    }
  }
});
</script>

<style scoped></style>
