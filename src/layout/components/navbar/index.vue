<template>
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <span class="navbar-item">
        <ion-icon name="logo-vue" size="is-mdeium"></ion-icon>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p class="subtitle">FARMED4U</p>
      </span>
      <div
        class="navbar-burger burger"
        data-target="navMenu"
        @click="isOpen = !isOpen"
        :class="{ 'is-active': isOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" id="navMenu" :class="{ 'is-active': isOpen }">
      <div class="navbar-start" style="flex-grow: 1; justify-content: center;">
        <a href="orders" class="navbar-item">
          <span class="icon has-text-primary">
            <ion-icon name="documents-outline"></ion-icon>
          </span>
          <span>Orders</span>
        </a>
        <a href="messages" class="navbar-item">
          <span class="icon has-text-primary">
            <ion-icon name="mail-unread-outline"></ion-icon>
          </span>

          <span>Messages</span>
        </a>
        <a href="queue" class="navbar-item">
          <span class="icon has-text-primary">
            <ion-icon name="file-tray-stacked-outline"></ion-icon>
          </span>
          <span>Queue</span>
        </a>
      </div>

      <div class="navbar-end is-right">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link ">
            <span class="icon is-left">
              <ion-icon name="person-circle-outline"></ion-icon>
            </span>
            <span>Account</span>
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item " href="dashboard">
              <span class="icon is-left">
                <ion-icon name="speedometer-outline"></ion-icon>
              </span>
              &nbsp;
              <span>Dashboard</span>
            </a>
            <a class="navbar-item ">
              <span class="icon is-left">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              &nbsp;
              <span>Profile</span>
            </a>
            <a class="navbar-item ">
              <span class="icon is-left">
                <ion-icon name="cog-outline"></ion-icon>
              </span>
              &nbsp;
              <span>Settings</span>
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item ">
              <span class="icon is-left">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              &nbsp;
              <span>Logout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavBar",
  data: function() {
    return {
      isOpen: false
    };
  }
});
</script>

<style lang="css">
#fg {
  width: 94px;
  height: auto;
  padding-bottom: 0%;
  padding: 0%;
}
</style>
