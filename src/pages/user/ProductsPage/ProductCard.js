import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlanItem from "../../../components/PlanItem";
import QuantityInput from "../../../components/QuantityInput";
import useCalcPrice from "../../../hooks/useCalcPrice";
import findPlan from "../../../utils/findPlan";
import toK from "../../../utils/toK";

function ProductCard({ item }) {
  const { periods, maxOrder, label, id } = item;
  const navigate = useNavigate();
  // const [quantity, setQuantity] = useState(0);
  // const [price, setPrice] = useState(0);
  // const [initial, setInitial] = useState(true);
  const { price, quantity, setQuantity } = useCalcPrice(periods);
  // const currentPlan = findPlan(periods, quantity);

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
            <QuantityInput setQuantity={setQuantity} quantity={quantity} />
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
          <button
            onClick={() =>
              navigate(`/products/${id}?qty=${quantity}`, {
                state: { item, quantity },
              })
            }
            className="mt-6 inline-block rounded-2xl bg-gradient-to-tr from-blue-400 to-blue-500 p-3  text-white duration-200 hover:bg-gradient-to-tl hover:from-blue-500 hover:to-blue-400 "
          >
            ثبت سفارش
          </button>
        </form>
      </div>
    </article>
  );
}

export default ProductCard;
