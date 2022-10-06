<template>
  <div style="padding: 20px 30px">
    <div style="display: flex; flex-direction: row; justify-content: center">
      <div style="display: flex; flex-direction: row; margin-bottom: 50px">
        <img src="../../assets/svg/reports.svg" alt="" />
        <span style="padding: 10px; font-size: xx-large">Debit Orders</span>
      </div>
    </div>
    <div class="link-group">
      <div class="button">
        <router-link to="/launchpad/debitorders/calendar">
          <div class="link-item active">
            <img class="link-icon" src="../../assets/svg/reports.svg" />
            <span class="link-text">CALENDAR</span>
          </div>
        </router-link>
      </div>

      <div class="button">
        <router-link to="/launchpad/debitorders/once-off-debit">
          <div class="link-item active">
            <img class="link-icon" src="../../assets/svg/create-report.svg" />
            <span class="link-text">ONCE-OFF DEBIT</span>
          </div>
        </router-link>
      </div>

      <div class="button">
        <router-link to="/launchpad/debitorders/generate-report">
          <div class="link-item active">
            <img
              class="link-icon"
              src="../../assets/svg/download-chart-report.svg"
            />
            <span class="link-text">DOWNLOAD DEBIT REPORTS</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DebitOrders",
};
</script>

<style scoped>
.link-icon {
  width: 120px;
  height: 120px;
}

.link-item {
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 40px;
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  color: #2e004b;
  /* position: absolute; */
}

.link-item:hover {
  background-color: white;
  transition: 100ms linear;
  box-shadow: 0px 0px 20px gray;
  margin-top: -5px;
  height: 210px;
  width: 210px;
}

.link-group {
  display: flex;
  justify-content: space-evenly;
  max-height: 200px;
  min-width: 800px;
  margin-bottom: 50px;
}

.button {
  max-width: 200px;
  position: relative;
}
</style>
