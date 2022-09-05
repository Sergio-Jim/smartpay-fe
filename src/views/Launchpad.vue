<template>
  <div style="display: flex; height: 100vh">
    <div
      style="
        min-width: 250px;
        background-color: #cccef9;
        display: flex;
        flex-direction: column;
        padding: 40px;
        box-sizing: border-box;
      "
    >
      <div>
        <div style="text-align: center">
          <img
            src="../assets/svg/smartpay.svg"
            style="height: 100%; width: 175px"
          />
        </div>
      </div>

      <div
        style="
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        "
      >
        <ul>
          <li style="">
            <router-link
              to="/home"
              v-bind:style="{
                fontWeight: this.$route.path === '/Home' ? 'bolder' : '',
              }"
              ><div style="display: flex; flex-direction: row">
                <img src="../assets/svg/home.svg" alt="" />
                <span style="padding: 10px">Home</span>
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
                <img src="../assets/svg/customer.svg" alt="" /><span
                  style="padding: 10px"
                  >Create Client</span
                >
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
                <img src="../assets/svg/management.svg" alt="" /><span
                  style="padding: 10px"
                  >Manage Clients</span
                >
              </div></router-link
            >
          </li>
          <li>
            <router-link
              to="/launchpad/debitorders"
              v-bind:style="{
                fontWeight:
                  this.$route.path === '/launchpad/debitorders' ? 'bolder' : '',
              }"
              ><div style="display: flex; flex-direction: row">
                <img src="../assets/svg/reports.svg" alt="" /><span
                  style="padding: 10px"
                  >Debit Orders</span
                >
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
                <img src="../assets/svg/dashboard.svg" alt="" /><span
                  style="padding: 10px"
                  >Dashboard</span
                >
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

    <div
      style="background-color: #eeeeee; box-sizing: border-box; flex-grow: 1"
    >
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
