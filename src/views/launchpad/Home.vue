<template>
  <div style="padding: 20px 30px">
    <div style="display: flex; flex-direction: row; justify-content: center">
      <img src="../../assets/svg/what.svg" style="margin-bottom: 50px" />
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 50px;
      "
    >
      <button
        class="
          bg-yellow-400
          hover:bg-gray-200
          text-gray-500
          py-2
          px-4
          border border-yellow-400
          rounded-lg
          focus:outline-none focus:shadow-outline
          w-48
          h-56
        "
        type="button"
      >
        <div
          style="display: flex; flex-direction: row; justify-content: center"
        >
          <img
            src="../../assets/svg/customer.svg"
            style="width: 120px; height: 100%; margin-bottom: 25px"
          />
        </div>
        <span>CREATE CLIENTS</span>
      </button>

      <button
        class="
          bg-yellow-400
          hover:bg-gray-200
          text-gray-500
          py-2
          px-4
          border border-yellow-400
          rounded-lg
          focus:outline-none focus:shadow-outline
          w-48
          h-56
        "
        type="button"
      >
        <div
          style="display: flex; flex-direction: row; justify-content: center"
        >
          <img
            src="../../assets/svg/management.svg"
            style="width: 120px; height: 100%; margin-bottom: 25px"
          />
        </div>
        <span>MANAGE CLIENTS</span>
      </button>

      <button
        class="
          bg-yellow-400
          hover:bg-gray-200
          text-gray-500
          py-2
          px-4
          border border-yellow-400
          rounded-lg
          focus:outline-none focus:shadow-outline
          w-48
          h-56
        "
        type="button"
      >
        <div
          style="display: flex; flex-direction: row; justify-content: center"
        >
          <img
            src="../../assets/svg/reports.svg"
            style="width: 120px; height: 100%; margin-bottom: 25px"
          />
        </div>
        <span>VIEW REPORTS</span>
      </button>
    </div>

    <div style="display: flex; flex-direction: row; justify-content: center">
      <img src="../../assets/svg/smartpay.svg" alt="smartpay-logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
</style>
