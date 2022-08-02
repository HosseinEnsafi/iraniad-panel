import React from "react";
import { BiMinus, BiPlus } from "../assets/icons";
import e2p from "../utils/e2p";
function QuantityInput({
  quantityStep = 100,
  quantity,
  setQuantity,
  maxOrder,
  className,
}) {
  return (
    <>
      <div className="inline-flex min-w-[90px] max-w-[160px] items-center justify-between  rounded-lg  bg-gray-50 p-1  text-black shadow-lg dark:bg-gray-500  ">
        <span
          className="cursor-pointer rounded-lg p-[6px] hover:bg-gray-300 hover:bg-opacity-30 "
          onClick={() => setQuantity((prevQty) => prevQty + quantityStep)}
        >
          <BiPlus className="h-[15px] w-[15px] dark:text-white" />
        </span>
        <input
          className="hide-arrow w-full border-transparent bg-inherit text-center focus:border-transparent focus:outline-none focus:ring-0  dark:text-gray-100"
          value={quantity}
          type="number"
          name="quantity"
          id="quantity"
          onChange={(e) => setQuantity(+e.target.value)}
          step={100}
          min={0}
        ></input>
        <span
          onClick={() =>
            setQuantity((prevQuantity) => {
              if (quantity < quantityStep) return prevQuantity;
              return prevQuantity - quantityStep;
            })
          }
          className="cursor-pointer rounded-lg p-[6px] hover:bg-gray-300 hover:bg-opacity-30"
        >
          <BiMinus className="h-[15px] w-[15px] dark:text-white" />
        </span>
      </div>
      {/* <div
        className={` inline-flex max-h-12 rounded-lg border-2 border-gray-500  border-opacity-50 dark:border-gray-300 ${className} `}
      >
        <span
          onClick={() => setQuantity((prevQty) => prevQty + quantityStep)}
          className="flex  w-8  cursor-pointer select-none items-center  justify-center rounded-tr-md rounded-br-md bg-[#ccc] bg-opacity-80 dark:bg-slate-900"
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
            setQuantity((prevQuantity) => {
              if (quantity < quantityStep) return prevQuantity;
              return prevQuantity - quantityStep;
            })
          }
          className="flex  w-8 cursor-pointer select-none items-center  justify-center rounded-tl-md rounded-bl-md bg-[#ccc]  bg-opacity-80  dark:bg-slate-900"
        >
          -
        </span>
      </div> */}
    </>
  );
}

export default QuantityInput;
