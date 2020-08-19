<template>
  <div>
    <section class="section">
      <button class="button is-primary is-rounded">
        <span class="icon">
          <ion-icon name="add-circle-outline"></ion-icon>
        </span>
        <span>Create Product</span>
      </button>

      <div class="container">
        {{ categories }}
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { readCategories } from "@/store/products/getters";
import { dipatchGetProductCategories } from "@/store/products/actions";
@Component
export default class Product extends Vue {
  get categories() {
    return readCategories(this.$store);
  }
  public async mounted() {
    await dipatchGetProductCategories(this.$store);
  }
}
</script>
