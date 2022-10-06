<template>
  <div
    :style="{
      display: 'flex',
      height: '100vh',
      'overflow-y': 'auto',
      'background-image': `url(${require('@/assets/backdark.png')})`,
    }"
  >
    <div style="flex-grow: 1" class="flex flex-col justify-between">
      <div class="flex flex-row p-2">
        <img
          src="../assets/smartpay_Logo.png"
          alt="smartpay-logo"
          style="max-width: 20%"
        />
      </div>
      <div class="flex flex-row justify-center item-center" style="height: 50%">
        <div
          class="
            shadow-xl
            border-2
            rounded
            flex flex-col
            justify-center
            max-w-lg
          "
          style="width: 512px; background-color: white"
        >
          <div class="flex flex-col">
            <div class="flex flex-col justify-center items-center">
              <div>
                <span style="color: black; font-size: 25px">
                  Please Enter the OTP to verify your login
                </span>
              </div>
              <div><span> An OTP has been sent to 264*******77 </span></div>
            </div>

            <!-- form -->
            <div class="form-box">
              <form v-on:submit.prevent="loginHandler(username, pin)">
                <div class="pin-input">
                  <div id="divOuter">
                    <div id="divInner">
                      <input
                        id="partitioned"
                        v-model="pin"
                        type="text"
                        maxlength="5"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
                        onKeyPress="if(this.value.length==5) return false;"
                      />
                    </div>
                  </div>
                </div>
                <button
                  class="
                    bg-yellow-400
                    hover:bg-yellow-500
                    text-black
                    mt-7
                    py-2
                    px-4
                    rounded-lg
                    w-full
                    focus:outline-none focus:shadow-outline
                  "
                  v-on:click="goToHome()"
                  type="button"
                >
                  <div class="py-1">Verify</div>
                </button>

                <br />
                <div style="margin-top: 8px">
                  <router-link style="color: #2e004b; font-size: 16px" to=""
                    >Resend One-Time PIN</router-link
                  >
                </div>
                <div>
                  <router-link style="font-size: 16px" to=""
                    >Can't get PIN?</router-link
                  >
                </div>
              </form>
              <div v-bind:class="[{ 'show-loader': logging }, 'loader-box']">
                <MoonLoader :loading="true"></MoonLoader>
              </div>
            </div>
            <!-- form ends -->
          </div>
        </div>
      </div>
      <div class="flex flex-row p-2 justify-end">
        <a
          href="https://www.digitalocean.com/?refcode=fa663ef3b642&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
          ><img
            src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg"
            alt="DigitalOcean Referral Badge"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    goToHome() {
      this.$router.push("/launchpad");
    },
  },
};
</script>

<style scoped>
form {
  text-align: center;
  width: 175px;
  margin: 0 auto;
}
#partitioned {
  padding-left: 9px;
  padding-right: 15px;
  padding-top: 30px;
  padding-bottom: 10px;
  letter-spacing: 38px;
  border: 0;
  background-image: linear-gradient(
    to left,
    #2e004b 70%,
    rgba(255, 255, 255, 0) 0%
  );
  background-color: white;
  color: #2e004b;
  background-position: bottom;
  background-size: 50px 3px;
  background-repeat: repeat-x;
  background-position-x: 25px;
  width: 260px;
  min-width: 260px;
  outline: none;
  font-size: 100%;
}
#divInner {
  left: 0;
  position: sticky;
}
#divOuter {
  width: 235px;
  overflow: hidden;
}
.pin-input {
  margin-left: -30px;
}
.input {
  max-width: 245px;
  border-radius: 0px;
  color: white;
  margin-top: 45px;
  margin-bottom: 0px;
  margin-left: 0px;
}
</style>