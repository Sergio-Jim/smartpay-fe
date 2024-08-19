<template>
  <div style="display: flex; height: 100%; overflow-y: auto">
    <div
      style="flex-grow: 1; display: flex; flex-direction: column; margin: 5%"
    >
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <!-- <img src="../assets/voxbot_logo.svg" style="height: 50px" /> -->
        <span
          style="cursor: pointer"
          v-on:click="this.$router.push('/register')"
          >Not a member yet? Join</span
        >
      </div>
      <div style="margin-top: 100px; display: flex; justify-content: center">
        <div>
          <form class="rounded px-8 pt-6 pb-8 mb-4" style="width: 500px">
            <h4>Log in</h4>
            <br />
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
                >Email</label
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
                v-model="email"
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

            <div class="flex items-center justify-between">
              <button
                class="
                  bg-gold
                  transition-color
                  duration-700
                  transform
                  hover:bg-yellow-400
                  border border-yellow-400
                  text-black
                  px-4
                  rounded-lg
                  w-full
                  focus:outline-none focus:shadow-outline
                "
                style="height: 40px"
                v-on:click="login"
                type="button"
              >
                <vue-loaders
                  v-if="this.isLoading"
                  name="line-scale"
                  color="black"
                  scale="0.5"
                ></vue-loaders>
                <div class="py-2" v-else>Log in</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div style="background-color: gold; width: 30%">
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50%;
        "
      >
        <!-- <img src="../assets/bot_logo.svg" style="height: 100px" /> -->
        <span style="font-size: 35px; font-weight: 1000">Register A Business</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterBusiness",
};
</script>

<style scoped>
</style>
