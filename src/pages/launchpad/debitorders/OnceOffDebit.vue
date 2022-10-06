<template>
  <div style="padding: 20px 30px">
    <div style="display: flex; flex-direction: row; justify-content: center">
      <div
        style="
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          margin: 10px;
          border: 2px;
        "
      >
        <img
          style="width: 68px; height: 48px; cursor: pointer"
          src="@/assets/svg/back-button.svg"
          alt=""
          onclick="history.back()"
        />
      </div>
      <div style="display: flex; flex-direction: column; width: 95%">
        <div
          style="
            display: flex;
            justify-content: center;
            flex-direction: row;
            padding: 10px;
          "
        >
          <img
            style="width: 68px; height: 48px"
            src="@/assets/svg/create-report.svg"
            alt=""
          />
          <span style="font-size: xx-large">Once-Off Debit</span>
        </div>
      </div>
    </div>

    <!-- body -->
    <div
      style="
        display: flex;
        flex-direction: row;
        height: 80vh;
        width: 100%;
        overflow-y: scroll;
      "
    >
      <form action="">
        <div style="display: flex; flex-direction: column; margin-top: 50px; width: 100%">
          <span style="display: flex; font-size: x-large"
            >1. Who would you like to debit?</span
          >
          <div style="display: flex; flex-direction: column; align-items: flex-end;">
            <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
              <label class="py-2 px-3"> First Name </label>
              <input
                style="width: 400px"
                class="
                  shadow
                  appearance-none
                  border
                  rounded-3xl
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>

            <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
              <label class="py-2 px-3"> Surname </label>
              <input
                style="width: 400px"
                class="
                  shadow
                  appearance-none
                  border
                  rounded-3xl
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="Surname"
                type="text"
                placeholder="Surname"
              />
            </div>

            <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
              <label class="py-2 px-3"> Country </label>
              <input
                style="width: 400px"
                class="
                  shadow
                  appearance-none
                  border
                  rounded-3xl
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="country"
                type="text"
                placeholder="Country"
              />
            </div>

            <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
              <label class="py-2 px-3"> Identification Number </label>
              <input
                style="width: 400px"
                class="
                  shadow
                  appearance-none
                  border
                  rounded-3xl
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="identificationNumber"
                type="text"
                placeholder="Identification Number"
              />
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; margin-top: 50px; width: 100%">
          <span style="display: flex; font-size: x-large">2. Bank Details</span>
            <div style="display: flex; flex-direction: column; align-items: flex-end;">
              <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
                <label class="py-2 px-3"> Account Type </label>
                <input
                  style="width: 400px"
                  class="
                    shadow
                    appearance-none
                    border
                    rounded-3xl
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

              <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
                <label class="py-2 px-3"> Bank </label>
                <input
                style="width: 175px"
                  class="
                    shadow
                    appearance-none
                    border
                    rounded-3xl
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
                <label class="py-2 px-3"> OR </label>
                <input
                style="width: 175px"
                  class="
                    shadow
                    appearance-none
                    border
                    rounded-3xl
                    py-2
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none focus:shadow-outline
                  "
                  id="bicCode"
                  type="text"
                  placeholder="BIC Code"
                />
              </div>

              <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
                <label class="py-2 px-3"> Account Name </label>
                <input
                  style="width: 400px"
                  class="
                    shadow
                    appearance-none
                    border
                    rounded-3xl
                    py-2
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none focus:shadow-outline
                  "
                  id="accountName"
                  type="text"
                  placeholder="Account Name"
                />
              </div>

              <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
                <label class="py-2 px-3"> Account Number </label>
                <input
                  style="width: 400px"
                  class="
                    shadow
                    appearance-none
                    border
                    rounded-3xl
                    py-2
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none focus:shadow-outline
                  "
                  id="accountNumber"
                  type="text"
                  placeholder="Account Number"
                />
              </div>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; margin-top: 50px; width: 100%">
          <span style="display: flex; font-size: x-large"
            >3. Payment Information</span
          >
          <div style="display: flex; flex-direction: column; align-items: flex-end;">
            <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
              <label class="py-2 px-3"> Amount N$ </label>
              <input
                style="width: 400px"
                class="
                  shadow
                  appearance-none
                  border
                  rounded-3xl
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="amount"
                type="text"
                placeholder="Amount"
              />
            </div>

            <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
              <label class="py-2 px-3"> Debtor Reference </label>
              <input
                style="width: 400px"
                class="
                  shadow
                  appearance-none
                  border
                  rounded-3xl
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="debtorReference"
                type="text"
                placeholder="Debtor Reference"
              />
            </div>

            <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
              <label class="py-2 px-3"> Refernce </label>
              <input
                style="width: 400px"
                class="
                  shadow
                  appearance-none
                  border
                  rounded-3xl
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="reference"
                type="text"
                placeholder="Reference"
              />
            </div>

            <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
              <label class="py-2 px-3"> Reason for Payment </label>
              <input
                style="width: 400px"
                class="
                  shadow
                  appearance-none
                  border
                  rounded-3xl
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="reasonForPayment"
                type="text"
                placeholder="Reason for Payment"
              />
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; margin-top: 50px; width: 100%">
          <span style="display: flex; font-size: x-large"
            >4. Proof of Payment</span
          >
          <div style="display: flex; flex-direction: column; align-items: flex-end;">
            <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
              <label class="py-2 px-3"> Email Address </label>
              <input
                style="width: 400px"
                class="
                  shadow
                  appearance-none
                  border
                  rounded-3xl
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="emailAddress"
                type="text"
                placeholder="Email Address"
              />
            </div>

            <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
              <label class="py-2 px-3"> Addressed To </label>
              <input
                style="width: 400px"
                class="
                  shadow
                  appearance-none
                  border
                  rounded-3xl
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="addressedTo"
                type="text"
                placeholder="Addressed To"
              />
            </div>
          </div>
        </div>

        <div class="mt-10">
          <label class="flex flex-row py-2 px-3"> Debit Date </label>
          <div style="display: flex; flex-direction: row">
            <div class="w-3/5">
              <litepie-datepicker
                :formatter="formatter"
                :auto-apply="false"
                as-single
                v-model="dateValue"
              ></litepie-datepicker>
            </div>
            <div class="ml-4">
              <button
                class="
                  bg-gold
                  border border-gray-700
                  transition-colors
                  duration-700
                  transform
                  hover:bg-yellow-400
                  text-gray-700
                  px-4
                  mty-8
                  rounded-lg
                  focus:outline-none focus:shadow-outline
                "
                type="button"
              >
                <div class="py-2">Schedule Debit</div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import LitepieDatepicker from "litepie-datepicker";

export default {
  name: "OnceOffDebit",
  components: {
    LitepieDatepicker,
  },
  setup() {
    const dateValue = ref([]);
    const formatter = ref({
      date: "DD MMMM YYYY",
      month: "MMMM",
    });

    return {
      dateValue,
      formatter,
    };
  },
  methods: {
    switchVisible() {
      if (document.getElementById("Div1")) {
        if (document.getElementById("Div1").style.display == "none") {
          document.getElementById("Div1").style.display = "block";
          document.getElementById("Div2").style.display = "none";
        } else {
          document.getElementById("Div1").style.display = "none";
          document.getElementById("Div2").style.display = "block";
        }
      }
    },
  },
};
</script>

<style scoped>
#Div2 {
  display: none;
}
</style>