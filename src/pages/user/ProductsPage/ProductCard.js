import React from "react";
import { useNavigate } from "react-router-dom";
import PlanItem from "../../../components/PlanItem";
import QuantityInput from "../../../components/QuantityInput";
import useCalcPrice from "../../../hooks/useCalcPrice";
import toK from "../../../utils/toK";

function ProductCard({ item }) {
  const { periods, maxOrder, label, id } = item;
  const navigate = useNavigate();
  const { price, quantity, setQuantity } = useCalcPrice(periods);
  console.log(price);
  return (
    <article className="relative  w-full max-w-md items-center rounded-lg  bg-white  p-5 transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      {label && (
        <div className="pricing__label absolute left-4 -top-[12px] flex h-20 w-[4.375rem] items-center justify-center whitespace-nowrap bg-gradient-to-tl  from-blue-400 to-blue-500  text-[15px] text-white">
          <span>{label}</span>
        </div>
      )}
      <div className="flex h-full flex-col">
        <ul className=" pt-6 leading-10">
          {periods.map((plan, i) => (
            <PlanItem key={i} plan={plan} quantity={quantity} />
          ))}
        </ul>

        <form className="mt-auto pt-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-[60fr_40fr] gap-2 md:grid-cols-2">
            <QuantityInput setQuantity={setQuantity} quantity={quantity} />
            {quantity < maxOrder ? (
              <p className=" mr-2 select-none self-center md:text-lg">
                {price}
              </p>
            ) : (
              <p className="select-none self-center text-sm text-red-500 dark:text-white md:text-base">
                نمیتوانید بیش از {toK(maxOrder)} انتخاب کنید
              </p>
            )}
          </div>
          ‍
          <button
            disabled={quantity > maxOrder}
            onClick={() =>
              navigate(`/products/${id}`, {
                state: { item, quantity },
              })
            }
            className="pricing__btn"
          >
            ثبت سفارش
          </button>
        </form>
      </div>
    </article>
  );
}

export default ProductCard;
