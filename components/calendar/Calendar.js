import React from "react";
import { Calendar } from "react-native-calendario";

const Calendar1 = () => {
  return (
    <Calendar
      onChange={(range) => console.log(range)}
      minDate={new Date(2018, 3, 20)}
      //   Calendar Starting Date
      startDate={new Date(2021, 8, 1)}
      //   Highlight the Period of Growth
      endDate={new Date(2021, 8, 1)}
      theme={{
        activeDayColor: {},
        monthTitleTextStyle: {
          color: "#00996D",
          fontWeight: "300",
          fontSize: 16,
          marginTop: 70,
        },
        emptyMonthContainerStyle: {},
        emptyMonthTextStyle: {
          fontWeight: "200",
        },
        weekColumnsContainerStyle: {},
        weekColumnStyle: {
          paddingVertical: 10,
        },
        weekColumnTextStyle: {
          color: "#00996D",
          fontSize: 14,
        },
        nonTouchableDayContainerStyle: {},
        nonTouchableDayTextStyle: {},
        startDateContainerStyle: {},
        endDateContainerStyle: {},
        dayContainerStyle: {},
        dayTextStyle: {
          color: "#00996D",
          fontWeight: "200",
          fontSize: 15,
        },
        dayOutOfRangeContainerStyle: {},
        dayOutOfRangeTextStyle: {},
        todayContainerStyle: {},
        todayTextStyle: {
          color: "#00996D",
        },
        activeDayContainerStyle: {
          backgroundColor: "#00996D",
        },
        activeDayTextStyle: {
          color: "white",
          fontWeight: "bold",
        },
        nonTouchableLastMonthDayTextStyle: {},
      }}
    />
  );
};

export default Calendar1;
