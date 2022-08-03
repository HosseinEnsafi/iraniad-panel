import React from "react";
import { BiCheck } from "../assets/icons";
import isFirstPlan from "../utils/isFirstPlan";
import isInRange from "../utils/isInRange";
import toK from "../utils/toK";
function PlanItem({ plan, quantity }) {
  return (
    <li
      className={`
  flex items-baseline  gap-3 
  ${
    isInRange(plan.start, plan.end, quantity) &&
    " text-green-600 dark:text-green-400"
  }`}
    >
      <p className="flex items-center gap-3">
        {!isFirstPlan(plan.start)
          ? ` از ${toK(plan.start)} تا ${toK(plan.end)} هر عدد ${
              plan.cost
            } تومان
`
          : ` تا ${toK(plan.end)} هر عدد ${plan.cost} تومان
          `}
        <BiCheck
          className={` h-5 w-5  rounded-full bg-green-400 text-lg  text-white ${
            isInRange(plan.start, plan.end, quantity) ? "block" : "hidden"
          }`}
        />
      </p>
    </li>
  );
}

export default PlanItem;
