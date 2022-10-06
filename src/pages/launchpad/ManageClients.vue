<template>
  <div style="padding: 20px 30px">
    <div
      style="display: flex; flex-direction: row; justify-content: space-between"
    >
      <div style="display: flex; flex-direction: row">
        <img src="../../assets/svg/management.svg" alt="" />
        <span style="padding: 10px; font-size: xx-large">Manage Clients</span>
      </div>

      <!-- search button -->
      <div style="display: flex; flex-direction: row">
        <form class="flex items-center">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div
              class="
                flex
                absolute
                inset-y-0
                left-0
                items-center
                pl-3
                pointer-events-none
              "
            >
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                pl-10
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              placeholder="Search"
              required=""
            />
          </div>
          <button
            type="submit"
            class="
              p-2.5
              ml-2
              text-sm
              font-medium
              text-white
              bg-blue-700
              rounded-lg
              border border-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            "
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: center;
      "
    >
      <div
        style="
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 50px;
        "
      >
      
        <div class="client-background-btn">
          <div class="client-initial-icon">
            C
          </div>
          <div class="client-info">
            <p style="font-size: 15px; margin-bottom: 10px;">Client Name</p>
            <div>CN12345 | Bank of Namibia | 2 contracts | value = N$105 000 000.00</div>
          </div>
        </div>

        <div class="client-background-btn">
          <div class="client-initial-icon">
            C
          </div>
          <div class="client-info">
            <p style="font-size: 15px; margin-bottom: 10px;">Client Name</p>
            <div>CN12345 | Bank of Namibia | 2 contracts | value = N$105 000 000.00</div>
          </div>
        </div>

        <div class="client-background-btn">
          <div class="client-initial-icon">
            C
          </div>
          <div class="client-info">
            <p style="font-size: 15px; margin-bottom: 10px;">Client Name</p>
            <div>CN12345 | Bank of Namibia | 2 contracts | value = N$105 000 000.00</div>
          </div>
        </div>

        <div class="client-background-btn">
          <div class="client-initial-icon">
            C
          </div>
          <div class="client-info">
            <p style="font-size: 15px; margin-bottom: 10px;">Client Name</p>
            <div>CN12345 | Bank of Namibia | 2 contracts | value = N$105 000 000.00</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManageClients",
};
</script>

<style scoped>
  .client-background-btn{
    display: flex;
            flex-direction: row;
            padding: 5px 10px;
            background-color: white;
            margin: 10px 10px;
            width: 470px;
            height: 70px;
            align-items: center;
            border-radius: 25px;
            color: #2e004b;
            max-width: 470px;
  }

  .client-initial-icon {
    width: 52px;
              height: 52px;
              background-color: #d8cd22;
              color: white;
              border-radius: 100%;
              margin-top: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 28px;
              font-weight: bolder;
  }

  .client-info{
    font-size: 12px;
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
  }
</style>
