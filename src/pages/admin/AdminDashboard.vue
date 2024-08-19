<template>
  <div
    :style="{
      height: '100%',
      display: 'flex',
      'flex-direction': `column`,
      'background-image': `url(${require('@/assets/back.png')})`,
      'background-repeat': `no-repeat`,
      'background-position': `left bottom`,
    }"
  >
    <!-- version 1 -->
    <div class="relative flex min-h-screen">
      <div
        class="
          navbar
          text-black
          space-y-6
          px-2
          py-4
          absolute
          h-screen
          md:relative md:-translate-x-0
          top-0
          flex flex-col
          justify-between
        "
        :class="showSidebar ? 'navbar-open' : 'navbar-close'"
      >
        <div class="flex pr-2 justify-end">
          <div class="p-2 text-white text-xl font-bold cursor-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <ul style="padding: 30% 0; border-right: 2px solid; border-color: red">
          <li v-on:click="showSidebar = false">
            <router-link
              to="register"
              v-bind:style="{
                fontWeight: this.$route.path === '/register' ? 'bolder' : '',
              }"
            >
              <div
                class="
                  group
                  flex
                  items-center
                  space-x-2
                  py-3
                  px-4
                  hover:bg-tracergrey
                  rounded
                  hover:text-red-700
                  transition
                  duration-200
                "
              >
                <span class="text-black group-hover:text-red-700"
                  >Register Business</span
                >
              </div>
            </router-link>
          </li>
          <li v-on:click="showSidebar = false">
            <router-link
              to="businesses"
              v-bind:style="{
                fontWeight:
                  this.$route.path === '/businesses'
                    ? 'bolder'
                    : '',
              }"
            >
              <div
                class="
                  group
                  flex
                  items-center
                  space-x-2
                  py-3
                  px-4
                  hover:bg-tracergrey
                  rounded
                  hover:text-red-700
                  transition
                  duration-200
                "
              >
                <span class="text-black group-hover:text-red-700"
                  >View Businesses</span
                >
              </div>
            </router-link>
          </li>
          <li v-on:click="showSidebar = false">
            <router-link
              to="settings"
              v-bind:style="{
                fontWeight:
                  this.$route.path === '/settings' ? 'bolder' : '',
              }"
            >
              <div
                class="
                  group
                  flex
                  items-center
                  space-x-2
                  py-3
                  px-4
                  hover:bg-tracergrey
                  rounded
                  hover:text-red-700
                  transition
                  duration-200
                "
              >
                <span class="text-black group-hover:text-red-700"
                  >Account Settings</span
                >
              </div>
            </router-link>
          </li>
        </ul>

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
            <h4
              style="cursor: pointer"
              v-on:click="this.$router.push('/login')"
            >
              Log out
            </h4>
          </div>
        </div>
      </div>
      <div class="flex-1 w-full">
        <!-- // header -->
        <div class="bg-white shadow px-2 py-4">
          <button v-on:click="showSidebar = !showSidebar" class="text-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>

        <!-- //Content -->
        <div style="height: 90vh">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AdminDashboard",
  data() {
    return {
      open: false,
      // username: localStorage.getItem("username"),
    };
  },
  setup() {
    const showSidebar = ref(false);

    return { showSidebar };
  },
  methods: {
    tog() {
      this.open = !this.open;
    },
    logout() {
      localStorage.clear();
      location.reload();
    },
  },
};
</script>

<style>
.navbar {
  transition: all 330ms ease-out;
}

.navbar-open {
  transform: translateX(0%);
  position: relative;
  width: 256px;
  transition: all 330ms ease-in;
}
.navbar-close {
  transform: translateX(-100%);
  width: 0px;
  display: none;
  transition: all 330ms ease-out;
}
</style>

