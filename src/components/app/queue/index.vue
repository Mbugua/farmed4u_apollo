<template>
  <div class="tabs is-centered is-boxed">
    <ul>
      <li class="is-active">
        <a>
          <span class="icon is-small"
            ><i class="fas fa-image" aria-hidden="true"></i
          ></span>
          <span>Pictures</span>
        </a>
      </li>
      <li>
        <a>
          <span class="icon is-small"
            ><i class="fas fa-music" aria-hidden="true"></i
          ></span>
          <span>Music</span>
        </a>
      </li>
      <li>
        <a>
          <span class="icon is-small"
            ><i class="fas fa-film" aria-hidden="true"></i
          ></span>
          <span>Videos</span>
        </a>
      </li>
      <li>
        <a>
          <span class="icon is-small"
            ><i class="far fa-file-alt" aria-hidden="true"></i
          ></span>
          <span>Documents</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Queue"
});
</script>
