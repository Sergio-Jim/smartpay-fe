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
    <div style="display: flex; flex-direction: row; justify-content: center">
      <!-- body begins -->
      <div class="flex">
        <litepie-datepicker v-model="dateValue"></litepie-datepicker>
      </div>
      <!-- body ends -->
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
};
</script>

<style scoped>
</style>