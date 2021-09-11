import React, { useState } from "react";
import { format, startOfMonth, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

let allViews = Object.keys(Views).map((k) => Views[k]);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue",
    },
  });

export const MyCalendar = ({ events, monthly }) => {
  console.log(events);
  const formatedEvents = events.map((event) => {
    return {
      title: event.name,
      start: new Date(event.startDate),
      end: new Date(event.endDate),
    };
  });
  let [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));

  return (
    <Calendar
      events={formatedEvents}
      views={allViews}
      step={60}
      showMultiDayTimes
      defaultDate={currentMonth}
      components={{
        timeSlotWrapper: ColoredDateCellWrapper,
      }}
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  );
};
