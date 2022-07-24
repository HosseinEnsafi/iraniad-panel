import React, { useEffect, useState } from "react";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
import findPlan from "../../../utils/findPlan";
import isInRange from "../../../utils/isInRange";
import toK from "../../../utils/toK";
import isFirstPlan from "../../../utils/isFirstPlan";
import PlanItem from "./PlanItem";

function ProductCard({ item }) {
  const { periods, maxOrder, label, id } = item;

  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [initial, setInitial] = useState(true);
  const quantityStep = 100;

  const currentPlan = findPlan(periods, quantity);
  useEffect(() => {
    if (initial) {
      setInitial(false);
      return;
    }

    if (!currentPlan) {
      setPrice("خارج از بازه");
      return;
    }

    setPrice(quantity * currentPlan.cost + " تومان ");
  }, [quantity]);

  return (
    <article className="relative  w-full max-w-md bg-gray-200  p-5  transition-shadow hover:shadow-lg dark:bg-neutral-500">
      <div className="pricing__label absolute left-4 -top-[12px] flex h-20 w-[4.375rem] items-center justify-center whitespace-nowrap bg-gradient-to-tl  from-blue-400 to-blue-500  text-[15px] text-white">
        <span>{label}</span>
      </div>
      <div className="flex h-full flex-col">
        <ul className=" pt-6 leading-10">
          {periods.map((plan, i) => (
            <PlanItem key={i} plan={plan} quantity={quantity} />
          ))}
        </ul>

        <form className="mt-auto pt-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex gap-2">
            <div className="flex  max-h-12 rounded-lg border-2 border-gray-500 border-opacity-50 dark:border-gray-300">
              <span
                onClick={() =>
                  setQuantity((prevQty) => prevQty + quantityStep)
                }
                className="flex h-full w-8  cursor-pointer select-none items-center  justify-center rounded-tr-md rounded-br-md bg-[#ccc] bg-opacity-80 dark:bg-slate-900"
              >
                +
              </span>
              <input
                dir="ltr"
                className=" hide-arrow  w-20 p-2 outline-none dark:bg-slate-700"
                type="number"
                name="quantity"
                id="quantity"
                step={100}
                min={0}
                value={quantity}
                onChange={(e) => setQuantity(+e.target.value)}
              />
              <span
                onClick={() =>
                  setQuantity((prevquantity) => {
                    if (quantity < quantityStep) return prevquantity;
                    return prevquantity - quantityStep;
                  })
                }
                className="flex h-full w-8 cursor-pointer select-none items-center  justify-center rounded-tl-md rounded-bl-md bg-[#ccc]  bg-opacity-80  dark:bg-slate-900"
              >
                -
              </span>
            </div>
            {quantity > maxOrder && (
              <p className="self-center text-sm text-red-500  dark:text-white md:text-base">
                نمیتوانید بیش از {toK(maxOrder)} انتخاب کنید
              </p>
            )}
            ‍
            {quantity < maxOrder && (
              <p className=" mr-2 self-center  text-sm md:text-base">
                {price}{" "}
              </p>
            )}
          </div>
          <Link
            to={`/products/${id}?qty=${quantity}`}
            className="mt-6 inline-block rounded-2xl bg-gradient-to-tr from-blue-400 to-blue-500 p-3  text-white duration-200 hover:bg-gradient-to-tl hover:from-blue-500 hover:to-blue-400 "
          >
            ثبت سفارش
          </Link>
        </form>
      </div>
    </article>
  );
}

export default ProductCard;
