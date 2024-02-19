import { Flight } from "../models/flight";

export const sort = (sortBy: string, arr: Flight[]): Flight[] => {
  switch (sortBy) {
    case "Price (Lowest to Highest)":
      return arr.sort((x, y) => x.basicPrice - y.basicPrice);

    case "Price (Highest to Lowest)":
      return arr.sort((x, y) => y.basicPrice - x.basicPrice);

    case "Duration (Shortest to Longest)":
      return arr.sort((x, y) => x.duration.localeCompare(y.duration));

    case "Duration (Longest to Shortest)":
      return arr.sort((x, y) => y.duration.localeCompare(x.duration));

    case "Departure (Earlier to Latest)":
      return arr.sort((x, y) => x.depertureTime.localeCompare(y.depertureTime));

    case "Arrival (Earlier to Latest)":
      return arr.sort((x, y) => x.arrivalTime.localeCompare(y.arrivalTime));

    case "Airline (A to Z)":
      return arr.sort((x, y) => x.airline.localeCompare(y.airline));

    case "Airline (Z to A)":
      return arr.sort((x, y) => y.airline.localeCompare(x.airline));

    default:
      return arr;
  }
};

export const filter = (filterBy: string[], arr: Flight[]): Flight[] => {
  if (filterBy && filterBy.length) {
    return arr.filter((item: Flight) => filterBy.includes(item.airline));
  } else return arr;
};
