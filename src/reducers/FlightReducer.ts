import { Flight } from "../models/flight";
import { filter, sort } from "../utilities/sort_utility";

interface State {
  result: Flight[];
}

interface Action {
  type: string;
  data: Flight[];
  sortBy?: string;
  filterBy?: string[];
}

export function reducer(state: State, action: Action) {
  if (action.type === "InitialState") {
    return {
      result: action.data,
    };
  } else if (action.type === "condition") {
    return {
      result: sort(
        action?.sortBy || "",
        filter(action?.filterBy || [], action.data)
      ),
    };
  }
  throw Error("Unknown action.");
}
