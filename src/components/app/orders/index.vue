<template>
  <div class="tabs is-centered is-boxed">
    <ul>
      <li class="is-active">
        <a>
          <span class="icon is-small"
            ><i class="fas fa-image" aria-hidden="true"></i
          ></span>
          <span>New</span>
        </a>
      </li>
      <li>
        <a>
          <span class="icon is-small"
            ><i class="fas fa-music" aria-hidden="true"></i
          ></span>
          <span>Processed</span>
        </a>
      </li>
      <li>
        <a>
          <span class="icon is-small"
            ><i class="fas fa-film" aria-hidden="true"></i
          ></span>
          <span>In-transit</span>
        </a>
      </li>
      <li>
        <a>
          <span class="icon is-small"
            ><i class="far fa-file-alt" aria-hidden="true"></i
          ></span>
          <span>Delivered</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Orders"
});
</script>
