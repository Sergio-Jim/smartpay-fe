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
        <div style="display: flex; flex-direction: column; margin-top: 50px">
          <span style="display: flex; font-size: x-large"
            >1. Who would you like to debit?</span
          >
          <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
            <label class="py-2 px-3"> First Name </label>
            <input
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

        <div style="display: flex; flex-direction: column; margin-top: 50px">
          <span style="display: flex; font-size: x-large">2. Bank Details</span>
          <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
            <label class="py-2 px-3"> First Name </label>
            <input
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

          <div style="display: flex; margin-top: 8px; margin-bottom: 8px">
            <label class="py-2 px-3"> Identification Number </label>
            <input
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

    return {
      dateValue,
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