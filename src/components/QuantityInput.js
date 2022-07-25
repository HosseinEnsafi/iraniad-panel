import React from "react";

function QuantityInput({
  quantityStep = 100,
  quantity,
  setQuantity,
  className,
  maxOrder,
}) {
  return (
    <>
      <div
        className={` inline-flex max-h-12 rounded-lg border-2 border-gray-500 border-opacity-50 dark:border-gray-300 ${className} `}
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
      </div>
    </>
  );
}

export default QuantityInput;
