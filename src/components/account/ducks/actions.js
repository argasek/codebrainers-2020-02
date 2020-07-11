export const NEWSLETTER_INCREMENT = 'Increment newsletter amount';
export const NEWSLETTER_DECREMENT = 'Decrement newsletter amount';

export const incrementNewsletter = () => {
  return {
    type: NEWSLETTER_INCREMENT
  };
};
export const decrementNewsletter = () => {
  return {
    type: NEWSLETTER_DECREMENT
  };
};