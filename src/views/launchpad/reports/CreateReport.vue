<template>
  <div style="padding: 20px 30px">
    <div style="display: flex; flex-direction: row; justify-content: center">
      <div style="display: flex; flex-direction: row; padding: 10px">
        <img
          style="width: 68px; height: 48px"
          src="../../../assets/svg/create-report.svg"
          alt=""
        />
        <span style="font-size: xx-large">Create Report</span>
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
  name: "CreateReport",
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