const isInRange = (start, end, quantity) =>
  +start <= quantity && +end >= quantity;

export default isInRange;
