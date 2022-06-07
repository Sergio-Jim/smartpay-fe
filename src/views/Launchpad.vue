<template>
  <div style="display: flex; height: 100%">
    <div
      style="
        min-width: 300px;
        background-color: gold;
        display: flex;
        flex-direction: column;
        padding: 40px;
        box-sizing: border-box;
      "
    >
      <div>
        <div style="text-align: center">
          <img src="../assets/svg/smartpay.svg" style="height: 30px" />
        </div>
      </div>

      <div style="flex-grow: 1">
        <ul>
          <li>
            <router-link
              to="/home"
              v-bind:style="{
                fontWeight: this.$route.path === '/Home' ? 'bolder' : '',
              }"
              ><div style="display: flex; flex-direction: row">
                <img src="../assets/svg/home.svg" alt="" />Home
              </div>
            </router-link>
          </li>
          <li>
            <router-link
              to="/launchpad/createclient"
              v-bind:style="{
                fontWeight:
                  this.$route.path === '/launchpad/createclient'
                    ? 'bolder'
                    : '',
              }"
              ><div style="display: flex; flex-direction: row">
                <img src="../assets/svg/home.svg" alt="" />Create Client
              </div></router-link
            >
          </li>
          <li>
            <router-link
              to="/launchpad/manageclients"
              v-bind:style="{
                fontWeight:
                  this.$route.path === '/launchpad/manageclients'
                    ? 'bolder'
                    : '',
              }"
              ><div style="display: flex; flex-direction: row">
                <img src="../assets/svg/home.svg" alt="" />Manage Clients
              </div></router-link
            >
          </li>
          <li>
            <router-link
              to="/launchpad/reports"
              v-bind:style="{
                fontWeight:
                  this.$route.path === '/launchpad/reports' ? 'bolder' : '',
              }"
              ><div style="display: flex; flex-direction: row">
                <img src="../assets/svg/home.svg" alt="" />Reports
              </div></router-link
            >
          </li>
          <li>
            <router-link
              to="/launchpad/dashboard"
              v-bind:style="{
                fontWeight:
                  this.$route.path === '/launchpad/dashboard' ? 'bolder' : '',
              }"
              ><div style="display: flex; flex-direction: row">
                <img src="../assets/svg/home.svg" alt="" />Dashboard
              </div></router-link
            >
          </li>
        </ul>
      </div>
      <div></div>

      <div style="display: flex; margin-top: 30px; margin-bottom: 60px">
        <div
          style="
            height: 60px;
            width: 60px;
            border-radius: 100%;
            background-color: black;
          "
        ></div>
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 10px;
          "
        >
          <h4>James</h4>
          <h4 style="cursor: pointer" v-on:click="this.$router.push('/login')">
            Log out
          </h4>
        </div>
      </div>
    </div>

    <div style="padding: 20px 30px; box-sizing: border-box; flex-grow: 1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Launchpad",
};
</script>

<style scoped>
</style>
