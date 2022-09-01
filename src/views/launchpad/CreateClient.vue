<template>
  <div style="padding: 20px 30px">
    <div style="display: flex; flex-direction: row; justify-content: center">
      <div style="display: flex; flex-direction: row">
        <img src="../../assets/svg/customer.svg" alt="" />
        <span style="padding: 10px; font-size: xx-large">Create Client</span>
      </div>
    </div>

    <form action="">
      <div style="display: flex; flex-direction: row">
        <div
          style="
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            margin: 40px;
            border: 2px;
          "
        >
          <h4 style="margin-bottom: 5px">Client Details</h4>
          <div style="margin-bottom: 8px">
            <input
              class="
                shadow
                appearance-none
                border
                rounded-3xl
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              id="contractID"
              type="text"
              placeholder="Contract ID"
            />
          </div>

          <div style="margin-bottom: 8px">
            <input
              class="
                shadow
                appearance-none
                border
                rounded-3xl
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              id="clientID"
              type="text"
              placeholder="Client ID"
            />
          </div>

          <div style="margin-bottom: 8px">
            <input
              class="
                shadow
                appearance-none
                border
                rounded-3xl
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              id="firstname"
              type="text"
              placeholder="First Name"
            />
          </div>

          <div style="margin-bottom: 8px">
            <input
              class="
                shadow
                appearance-none
                border
                rounded-3xl
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              id="surname"
              type="text"
              placeholder="Surname"
            />
          </div>

          <div style="margin-bottom: 8px">
            <input
              class="
                shadow
                appearance-none
                border
                rounded-3xl
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              id="cellphone"
              type="text"
              placeholder="Cellphone No."
            />
          </div>

          <div style="margin-bottom: 8px">
            <input
              class="
                shadow
                appearance-none
                border
                rounded-3xl
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            width: 43%;
            margin: 40px;
          "
        >
          <h4 style="margin-bottom: 5px">Payment Information</h4>
          <div style="margin-bottom: 8px">
            <input
              class="
                shadow
                appearance-none
                border
                rounded-3xl
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              id="accountType"
              type="text"
              placeholder="Account Type"
            />
          </div>

          <div style="margin-bottom: 8px">
            <input
              class="
                shadow
                appearance-none
                border
                rounded-3xl
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              id="bank"
              type="text"
              placeholder="Bank"
            />
          </div>

          <div style="margin-bottom: 8px">
            <input
              class="
                shadow
                appearance-none
                border
                rounded-3xl
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              id="bankAccName"
              type="text"
              placeholder="Bank Account Name"
            />
          </div>

          <div style="margin-bottom: 8px">
            <input
              class="
                shadow
                appearance-none
                border
                rounded-3xl
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              id="bankAccNumber"
              type="text"
              placeholder="Bank Account Number"
            />
          </div>

          <div style="margin-bottom: 8px">
            <input
              class="
                shadow
                appearance-none
                border
                rounded-3xl
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              id="bic"
              type="text"
              placeholder="BIC Code"
            />
          </div>
        </div>
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
          v-on:click="nothing"
          type="button"
        >
          <!-- <vue-loaders
                  v-if="this.isLoading"
                  name="line-scale"
                  color="white"
                  scale="0.5"
                ></vue-loaders> -->
          <div class="py-1">Create</div>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateClient",
};
</script>

<style scoped>
</style>
