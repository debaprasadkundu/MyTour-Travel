import { months } from "../constants";

export function formatDate(date: Date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export const compareDates = (d1: string, d2: string) => {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  if (date1 < date2) {
    return "less";
  } else if (date1 > date2) {
    return "greater";
  } else {
    return "equal";
  }
};

export const getDateFormat = (date: Date) => {
  return months[new Date(date).getMonth()] + " " + new Date(date).getDate();
};
