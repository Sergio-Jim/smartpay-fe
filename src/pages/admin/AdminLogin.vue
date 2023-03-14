<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      overflow-y: scroll;
      padding: 20px 30px;
    "
  >
    <div
      class="border-b-2"
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <img
        src="@/assets/smartpayLogo.png"
        style="height: 80px; margin-bottom: 10px"
      />
      <span
        style="cursor: pointer; margin-bottom: 10px"
        v-on:click="this.$router.push('/')"
        >Don't belong here?</span
      >
    </div>
    <div
      style="display: flex; flex-direction: row; height: 100%; margin-top: 20px"
    >
      <div style="width: 100%">
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 5%;
          "
        >
          <div style="margin-top: 15px; display: flex; justify-content: center">
            <div>
              <form class="rounded px-8 pt-6 pb-8 mb-4" style="min-width: 30vw">
                <br />
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                    >username</label
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
                    type="username"
                    placeholder="username"
                    required
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
                      leading-tight
                      focus:outline-none focus:shadow-outline
                    "
                    id="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="flex items-center justify-between">
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
                    style="height: 40px"
                    type="button"
                  >
                    <vue-loaders
                      v-if="this.loading"
                      name="line-scale"
                      color="black"
                      scale="0.5"
                    ></vue-loaders>
                    <div v-else>Login</div>
                  </button>
                </div>
              </form>
              <!-- <router-link to="/recoveryEmail">
                <div style="display: flex; justify-content: center">
                  Forgot Password?
                </div>
              </router-link> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>