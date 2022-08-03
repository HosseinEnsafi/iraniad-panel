import { useEffect, useState } from "react";
import findPlan from "../utils/findPlan";

function useCalcPrice(periods, qty) {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(qty || 0);
  const [initial, setInitial] = useState(true);
  const currentPlan = findPlan(periods, quantity);

  const formatter = new Intl.NumberFormat("fa-IR", {
    // style: "currency",
    currency: "IRR",
  });
  useEffect(() => {
    if (initial && !qty) {
      setInitial(false);
      return;
    }

    if (!currentPlan) {
      quantity === 0 ? setPrice("") : setPrice("خارج از بازه");
      return;
    }

    setPrice(formatter.format(quantity * currentPlan.cost) + " تومان");
  }, [quantity, currentPlan]);

  return {
    price,
    quantity,
    setQuantity,
  };
}

export default useCalcPrice;
