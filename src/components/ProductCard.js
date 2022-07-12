import React, { useState } from "react";
import { useEffect } from "react";
import { BiCheck } from "react-icons/bi";
function ProductCard({ item }) {
  // const { id, name, label, items } = data;

  const { periods, maxOrder, label } = item;
  // console.log(item);
  // console.log(periods);
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(amount);
  const [initial, setInitial] = useState(true);
  const amountStep = 100;

  const toK = (num) => Math.floor(num / 1000) + "K";
  const isInRange = (start, end, amount) => +start <= amount && +end >= amount;
  const currentPlan = periods.find(
    (plan) => +plan.start <= amount && +plan.end >= amount
  );

  useEffect(() => {
    if (initial) {
      setInitial(false);
      return;
    }

    if (!currentPlan) {
      setPrice("خارج از بازه");
      return;
    }

    setPrice(amount * currentPlan.cost + " تومان ");
  }, [amount]);

  return (
    <article className="relative w-full max-w-md bg-gray-200  p-5 shadow transition-shadow hover:shadow-lg dark:bg-neutral-500">
      <div className="pricing__label absolute left-4 -top-[12px] flex h-20 w-[4.375rem] items-center justify-center whitespace-nowrap bg-gradient-to-tl  from-blue-400 to-blue-500  text-[15px] text-white">
        <span className="">{label}</span>
      </div>
      <div className="flex h-full flex-col">
        <ul className=" pt-6 leading-10">
          {periods &&
            periods.map((plan, i) => {
              if (+plan.start === 1)
                return (
                  <li
                    key={i}
                    className={`
                  flex items-baseline gap-3 
                  ${
                    isInRange(plan.start, plan.end, amount) &&
                    " text-green-600 dark:text-green-400"
                  }`}
                  >
                    <p>
                      تا {toK(plan.end)} هر عدد {plan.cost} تومان
                    </p>
                    <BiCheck
                      className={` h-5 w-5 rounded-full bg-green-400 text-lg  text-white ${
                        isInRange(plan.start, plan.end, amount)
                          ? "block"
                          : "hidden"
                      }`}
                    />
                  </li>
                );
              else
                return (
                  <li
                    key={i}
                    className={`
                  flex items-baseline gap-3 
                  ${
                    isInRange(plan.start, plan.end, amount) &&
                    " text-green-600 dark:text-green-400"
                  }`}
                  >
                    <p>
                      از {toK(plan.start)} تا {toK(plan.end)} هر عدد {plan.cost}{" "}
                      تومان
                    </p>
                    <BiCheck
                      className={` h-5 w-5 rounded-full bg-green-400 text-lg  text-white ${
                        isInRange(plan.start, plan.end, amount)
                          ? "block"
                          : "hidden"
                      }`}
                    />
                  </li>
                );
            })}
        </ul>

        <form className="mt-auto pt-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex gap-2">
            <div className="flex  max-h-12 rounded-lg border-2 border-gray-500 border-opacity-50 dark:border-gray-300">
              <span
                onClick={() =>
                  setAmount((prevAmount) => prevAmount + amountStep)
                }
                className="flex h-full w-8  cursor-pointer select-none items-center  justify-center rounded-tr-md rounded-br-md bg-[#ccc] bg-opacity-80 dark:bg-slate-900"
              >
                {" "}
                +{" "}
              </span>
              <input
                dir="ltr"
                className=" hide-arrow  w-20 p-2 outline-none dark:bg-slate-700"
                type="number"
                name="amount"
                id="amount"
                step={100}
                min={0}
                value={amount}
                onChange={(e) => setAmount(+e.target.value)}
              />
              <span
                onClick={() =>
                  setAmount((prevAmount) => {
                    if (amount < amountStep) return prevAmount;
                    return prevAmount - amountStep;
                  })
                }
                className="flex h-full w-8 cursor-pointer select-none items-center  justify-center rounded-tl-md rounded-bl-md bg-[#ccc]  bg-opacity-80  dark:bg-slate-900"
              >
                {" "}
                -{" "}
              </span>
            </div>
            {amount > maxOrder && (
              <p className="self-center text-sm text-red-500  dark:text-white md:text-base">
                نمیتوانید بیش از {toK(maxOrder)} انتخاب کنید
              </p>
            )}
            ‍
            {amount < maxOrder && (
              <p className=" mr-2 self-center  text-sm md:text-base">
                {price}{" "}
              </p>
            )}
          </div>
          <button className="mt-6 rounded-2xl bg-gradient-to-tr  from-blue-400 to-blue-500 p-3 text-white ">
            ثبت سفارش
          </button>
        </form>
      </div>
    </article>
  );
}

export default ProductCard;
