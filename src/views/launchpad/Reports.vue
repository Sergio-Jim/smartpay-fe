<template>
  <div style="padding: 20px 30px">
    <div style="display: flex; flex-direction: row; justify-content: center">
      <div style="display: flex; flex-direction: row; margin-bottom: 50px">
        <img src="../../assets/svg/reports.svg" alt="" />
        <span style="padding: 10px; font-size: xx-large">Reports</span>
      </div>
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 50px;
      "
    >
      <router-link to="/launchpad/reports/calendar-report">
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
          <span>CALENDAR REPORTS</span>
        </button>
      </router-link>

      <router-link to="/launchpad/reports/create-report">
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
              src="../../assets/svg/create-report.svg"
              style="width: 120px; height: 100%; margin-bottom: 25px"
            />
          </div>
          <span>CREATE REPORT</span>
        </button>
      </router-link>

      <router-link to="/launchpad/reports/generate-report">
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
              src="../../assets/svg/download-chart-report.svg"
              style="width: 120px; height: 100%; margin-bottom: 25px"
            />
          </div>
          <span>GENERATED REPORTS</span>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reports",
};
</script>

<style scoped>
</style>
