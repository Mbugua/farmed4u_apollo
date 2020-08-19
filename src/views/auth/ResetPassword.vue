<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-6 is-offset-4">
          <div class="box">
            <form>
              <div class="card">
                <div class="card-content">
                  <div class="field has-text-centered">
                    <p class="text">Reset Password</p>
                  </div>
                  <div class="field">
                    <div class="control has-icons-left">
                      <span class="icon is-small is-left">
                        <ion-icon name="mail-outline"></ion-icon>
                      </span>
                      <input
                        class="input is-success is-rounded"
                        type="email"
                        placeholder="jdoe@farmed4u.com"
                        required
                      />
                    </div>
                  </div>
                  <button class="button is-warning is-rounded is-fullwidth">
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
          <p class="has-text-grey">
            <a href="login" style="color:green">Login ?</a>
            &nbsp;&nbsp;
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "reset-password"
});
</script>
<style lang="css" scoped>
html,
body {
  font-family: "Questrial", sans-serif;
  font-size: 14px;
  font-weight: 300;
}
.hero.is-success {
  background: #fff;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
  background: whitesmoke;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}

.login-hr {
  border-bottom: 1px solid black;
}

.has-text-black {
  color: black;
}

.field {
  padding-bottom: 10px;
}

.fa {
  margin-left: 5px;
}
</style>
