<template>
  <div style="padding: 20px 30px; height: 100%">
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
          src="../../../assets/svg/back-button.svg"
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
            src="../../../assets/svg/download-chart-report.svg"
            alt=""
          />
          <span style="font-size: xx-large">Generate Report</span>
        </div>
      </div>
    </div>
    <div class="flex flex-row h-5/6">
      <div
        style="
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          margin: 10px;
          border: 2px;
        "
      >
        <div class="flex flex-row">
          <h1 style="font-size: large; margin: 5px">
            Select a date range and download your CSV
          </h1>
        </div>
        <div style="display: flex; flex-direction: row">
          <div class="w-3/5">
            <litepie-datepicker
              :formatter="formatter"
              :auto-apply="false"
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
              <div class="py-2">Download CSV</div>
            </button>
          </div>
        </div>

        <div class="flex flex-col mt-16">
          <span style="font-weight: 600">Build on what you have</span>
          <div
            style="
              display: flex;
              flex-wrap: wrap;
              justify-content: flex-start;
              margin-top: 20px;
              flex-basis: 50%;
            "
          >
            <div class="button-group">
              <div class="button">
                <router-link to="/launchpad/debitorders/calendar">
                  <div class="link-item active">
                    <img class="link-icon" src="@/assets/svg/reports.svg" />
                  </div>
                </router-link>
              </div>
              <div class="flex flex-col">
                <router-link to="/launchpad/debitorders/calendar">
                  <span class="top-span">Calendar</span>
                </router-link>
                <span class="bottom-span">View Scheduled Debit Dates</span>
              </div>
            </div>

            <div class="button-group">
              <div class="button">
                <router-link to="/launchpad/manageclients">
                  <div class="link-item active">
                    <img class="link-icon" src="@/assets/svg/management.svg" />
                  </div>
                </router-link>
              </div>
              <div class="flex flex-col">
                <router-link to="/launchpad/manageclients">
                  <span class="top-span">Manage Client</span>
                </router-link>
                <span class="bottom-span"
                  >Manage Clients, Create Contracts</span
                >
              </div>
            </div>

            <div class="button-group">
              <div class="button">
                <router-link to="/launchpad/debitorders/once-off-debit">
                  <div class="link-item active">
                    <img
                      class="link-icon"
                      src="@/assets/svg/create-report.svg"
                    />
                  </div>
                </router-link>
              </div>
              <div class="flex flex-col">
                <router-link to="/launchpad/debitorders/once-off-debit">
                  <span class="top-span">Once-Off Debit</span>
                </router-link>
                <span class="bottom-span">Debit Quick Bills As Payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- here -->
      <div
        style="
          display: flex;
          flex-direction: column;
          width: 35%;
          border-left: 4px solid;
          min-height: 80%;
        "
      >
        <div>
          <span style="display: flex; margin-left: 8px; font-weight: 600"
            >Learn More</span
          >
          <div class="flex flex-col mt-4">
            <router-link to="/launchpad/debitorders/calendar">
              <span class="top-span">Tutorials</span>
            </router-link>
            <span class="bottom-span">How to do's and many more</span>
          </div>
          <div class="flex flex-col mt-4">
            <router-link to="/launchpad/debitorders/calendar">
              <span class="top-span">Ask a question</span>
            </router-link>
            <span class="bottom-span">Connect, share and learn</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import LitepieDatepicker from "litepie-datepicker";

export default {
  name: "GenerateReport",
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
};
</script>

<style scoped>
.link-icon {
  width: 30px;
  height: 30px;
}

.link-item {
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: space-around;
  color: #2e004b;
  /* position: absolute; */
}

.link-item:hover {
  background-color: white;
  transition: 100ms linear;
  box-shadow: 0px 0px 20px gray;
}

.button {
  max-width: 50px;
  position: relative;
}
.top-span {
  display: flex;
  margin-left: 8px;
  font-weight: 600;
  color: #2e004b;
}
.bottom-span {
  display: flex;
  margin-left: 8px;
}

.button-group {
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 10px;
}
</style>