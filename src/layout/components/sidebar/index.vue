<template>
  <aside
    class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile"
  >
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><a href="dashboard">Dashboard</a></li>
      <li><a href="customers">Customers</a></li>
    </ul>
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li><a>Team Settings</a></li>
      <li>
        <a>Manage Your Team</a>
        <ul>
          <li><a>Members</a></li>
        </ul>
      </li>
    </ul>
    <p class="menu-label">
      Catalog / Inventory
    </p>
    <ul class="menu-list">
      <li><a href="products">Products</a></li>
    </ul>
    <p class="menu-label">
      Transactions
    </p>
    <ul class="menu-list">
      <li><a href="payments">Payments</a></li>
      <li><a href="orders">Orders</a></li>
      <li><a href="messages">Messages</a></li>
      <li><a href="queue">Queues</a></li>
    </ul>
  </aside>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SideBar"
});
</script>
<style scoped>
.aside {
  display: block;
  background-color: #f9f9f9;
  border-right: 1px solid #dedede;
}
.aside .compose {
  height: 95px;
  margin: 0 -10px;
  padding: 25px 30px;
}
.aside .compose .button {
  color: #f6f7f7;
}

.aside .main {
  padding: 40px;
  color: #6f7b7e;
}
.aside .title {
  color: #6f7b7e;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}
.aside .main .item {
  display: block;
  padding: 10px 0;
  color: #6f7b7e;
}
.aside .main .item.active {
  background-color: #f1f1f1;
  margin: 0 -50px;
  padding-left: 50px;
}
.aside .main .item:active,
.aside .main .item:hover {
  background-color: #f2f2f2;
  margin: 0 -50px;
  padding-left: 50px;
}
.aside .main .icon {
  font-size: 19px;
  padding-right: 30px;
  color: #a0a0a0;
}
.aside .main .name {
  font-size: 15px;
  color: #5d5d5d;
  font-weight: 500;
}
</style>
