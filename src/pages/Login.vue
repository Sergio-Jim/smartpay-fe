<template>
  <div
    :style="{
      display: 'flex',
      height: '100vh',
      'overflow-y': 'auto',
      'background-image': `url(${require('@/assets/back.png')})`,
    }"
  >
    <!-- left side of page -->
    <div
      style="flex-grow: 1; display: flex; flex-direction: column; margin: 40px"
    >
      <div style="margin-top: 100px; display: flex; justify-content: center">
        <div style="display: flex; justify-content: center">
          <img
            src="../assets/smartpayLogo.png"
            alt="smartpay-logo"
            style="max-width: 80%"
          />
        </div>
      </div>
    </div>

    <!-- right side of page -->
    <div
      style="display: flex; flex-direction: column; width: 50%; margin: 40px"
    >
      <div style="margin-top: 100px; display: flex; justify-content: center">
        <div>
          <form class="rounded px-8 pt-6 pb-8 mb-4" style="width: 450px">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
                >Username</label
              >
              <input
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="username"
                type="text"
                placeholder="Username"
                v-model="username"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
                >Password</label
              >
              <input
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  mb-3
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="password"
                type="password"
                placeholder="******************"
                v-model="password"
              />
            </div>

            <!-- reCapthca -->
            <div class="flex flex-row justify-center mb-4">
              <form action="?" method="POST">
                <div class="g-recaptcha" data-sitekey="your_site_key"></div>
              </form>
            </div>

            <div class="flex w-24 m-auto">
              <button
                class="
                  bg-yellow-400
                  hover:bg-white
                  text-black
                  py-2
                  px-4
                  border border-yellow-400
                  rounded-lg
                  w-full
                  focus:outline-none focus:shadow-outline
                "
                v-on:click="goToHome()"
                type="button"
              >
                <div class="py-1">Log in</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    goToHome() {
      this.$router.push("/loginVerification");
    },
  },
};
</script>

<style scoped>
</style>
