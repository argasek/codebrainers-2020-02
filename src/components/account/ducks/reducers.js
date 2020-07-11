import {NEWSLETTER_DECREMENT, NEWSLETTER_INCREMENT} from "./actions";

export const newsletterDaysReducer = (state=7, action) => {
  switch (action.type) {
    case NEWSLETTER_INCREMENT:
      state += 1;
      break;
    case NEWSLETTER_DECREMENT:
      state -= 1;
      break;
    default:
      return state;
  }
  return state;
}