const findPlan = (periods, quantity) =>
  periods.find((plan) => +plan.start <= quantity && +plan.end >= quantity);

export default findPlan;
