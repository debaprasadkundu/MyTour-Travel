export interface Flight {
  id: number;
  airline: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  date: string;
  img: string;
  depertureTime: string;
  arrivalTime: string;
  duration: string;
  noOfStop: number;
  stops: string[];
  basicPrice: number;
  mainPrice: number;
  economyPrice: number;
  currency: string;
}

export interface SearchCriteria {
  from: string;
  to: string;
  noOfTraveller: number;
  depDate: string;
  returnDate: string;
  class: string;
}
