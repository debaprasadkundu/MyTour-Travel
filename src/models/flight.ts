export interface Flight {
  airline: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  img: string;
  depertureTime: string;
  arrivalTime: string;
  duration: string;
  noOfStop: number;
  stops: string[];
  basicPrice: string;
  mainPrice: string;
  economyPrice: string;
}

export interface SearchCriteria {
  from: string;
  to: string;
  noOfTraveller: number;
  depDate: Date;
  returnDate: Date;
  class: string;
}