import { filtersInitialState } from "../contexts/filters-context";
import {
  CLEAR_FILTERS,
  MAX_PRICE,
  MIN_PRICE,
  RATING,
  SORT_BY,
} from "./../constants/filtersConstants";

export const filtersReducer = (state, action) => {
  switch (action.type) {
    case CLEAR_FILTERS:
      return filtersInitialState;
    case MIN_PRICE:
      return { ...state, minPrice: action.payload };
    case MAX_PRICE:
      return { ...state, maxPrice: action.payload };
    case SORT_BY:
      return { ...state, sortBy: action.payload };
    case RATING:
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};
