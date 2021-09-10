import React, { useState } from "react";
import { format, startOfMonth } from "date-fns";

import {
  MonthlyBody,
  MonthlyDay,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
  WeeklyCalendar,
  WeeklyBody,
  WeeklyContainer,
  WeeklyDays,
  DefaultWeeklyEventItem,
} from "@zach.codes/react-calendar";

export const Calendar = ({ events, monthly }) => {
  const formatedEvents = events.map((event) => {
    return {
      title: event.name,
      date: new Date(event.startDate),
    };
  });
  let [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));

  return (
    <>
      {monthly && (
        <MonthlyCalendar
          currentMonth={currentMonth}
          onCurrentMonthChange={(date) => setCurrentMonth(date)}
        >
          <MonthlyNav />
          <MonthlyBody events={formatedEvents}>
            <MonthlyDay
              renderDay={(data) =>
                data.map((item, index) => (
                  <DefaultMonthlyEventItem
                    key={index}
                    title={item.title}
                    // Format the date here to be in the format you prefer
                    date={format(item.date, "k:mm")}
                  />
                ))
              }
            />
          </MonthlyBody>
        </MonthlyCalendar>
      )}

      {!monthly && (
        <WeeklyCalendar week={new Date()}>
          <WeeklyContainer>
            <WeeklyDays />
            <WeeklyBody
              events={formatedEvents}
              renderItem={({ item, showingFullWeek }) => (
                <DefaultWeeklyEventItem
                  key={item.date.toISOString()}
                  title={item.title}
                  date={
                    showingFullWeek
                      ? format(item.date, "MMM do k:mm")
                      : format(item.date, "k:mm")
                  }
                />
              )}
            />
          </WeeklyContainer>
        </WeeklyCalendar>
      )}
    </>
  );
};
