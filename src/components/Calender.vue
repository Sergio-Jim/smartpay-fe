<template>
  <div class="calendar-wrapper" data-app>
    <v-sheet tile height="54" class="d-flex">
      <v-row>
        <v-col>
          <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-select
            v-model="type"
            :items="types"
            dense
            outlined
            hide-details
            class="ma-2"
            label="type"
          >
          </v-select>
        </v-col>
        <v-col>
          <v-select
            v-model="mode"
            :items="modes"
            dense
            outlined
            hide-details
            label="event-overlap-mode"
            class="ma-2"
          ></v-select>
        </v-col>
        <v-col>
          <v-select
            v-model="weekday"
            :items="weekdays"
            dense
            outlined
            hide-details
            label="weekdays"
            class="ma-2"
          ></v-select>
        </v-col>
        <v-col>
          <v-spacer></v-spacer>
        </v-col>
        <v-col>
          <v-btn icon class="ma-2" @click="$refs.calendar.next()">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        @change="getEvents"
        @click:event="showEvent"
        @click:more="viewDay"
        @click:date="viewDay"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Calender",
  data() {
    return {
      token: localStorage.getItem("apollo-token"),
      getTransactions: [],
      type: "month",
      types: ["month", "week", "day", "4day"],
      mode: "stack",
      modes: ["stack", "column"],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
        { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
        { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
        { text: "Mon, Wed, Fri", value: [1, 3, 5] },
      ],
      value: "",
      events: [],
      colors: [
        "blue",
        "indigo",
        "deep-purple",
        "cyan",
        "green",
        "orange",
        "grey darken-1",
      ],
      start: "",
      end: "",
    };
  },
  methods: {
    getEvents({ start, end }) {
      this.start = start.date;
      this.end = end.date;
    },
    getEventColor(event) {
      return event.color;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";

      fetch(
        process.env.NODE_ENV !== "production"
          ? `http://localhost:3000/downloadCSV?date=${date}&token=${this.token}`
          : `https://smartpay.com.na/downloadCSV?date=${date}&token=${this.token}`
      )
        .then((response) => response.blob())
        .then((blob) => {
          var url = window.URL.createObjectURL(blob);
          var a = document.createElement("a");
          a.href = url;
          a.download = "filename.csv";
          document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
          a.click();
          a.remove();
        });
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
  },
  apollo: {
    getTransactions: {
      query: gql`
        query GetTransactions($start: String!, $end: String!) {
          getTransactions(start: $start, end: $end) {
            clientID
            clientFullname
            paymentMethod
            noInstallment
            dateOfirstInstallment
            installmentAmount
            tracking
            installmentDates
            collectionReason
            contractID
            date
          }
        }
      `,
      // Static parameters
      variables() {
        return {
          start: this.start,
          end: this.end,
        };
      },
      result({ data }) {
        const events = [];
        var transactions = data.getTransactions;
        console.log(transactions, " <===========transactions");

        transactions.forEach((transaction) => {
          // console.log(new Date((transaction.dateOfirstInstallment)))
          events.push({
            name: transaction.clientFullname,
            start: new Date(transaction.date),
            color: this.colors[this.rnd(0, this.colors.length - 1)],
          });
        });

        this.events = events;
      },
    },
  },
};
</script>

<style scoped>
</style>