import { useEffect, useState } from "react";
import findPlan from "../utils/findPlan";

function useCalcPrice(periods, qty) {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(qty || 0);
  const [initial, setInitial] = useState(true);
  const currentPlan = findPlan(periods, quantity);
  useEffect(() => {
    if (initial && !qty) {
      setInitial(false);
      return;
    }

    if (!currentPlan) {
      setPrice("خارج از بازه");
      return;
    }

    setPrice(quantity * currentPlan.cost + " تومان ");
  }, [quantity, currentPlan]);

  return {
    price,
    quantity,
    setQuantity,
  };
}

export default useCalcPrice;
