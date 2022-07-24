import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "../../../api/axios";
import PlanItem from "../../../components/PlanItem";
import QuantityInput from "../../../components/QuantityInput";
import useCalcPrice from "../../../hooks/useCalcPrice";
import toK from "../../../utils/toK";

function ProductDetail() {
  const params = useParams();
  const location = useLocation();
  const [search] = useSearchParams();
  const item = location.state.item;
  const { productId: id } = params;
  const { label, product_label, maxOrder, periods } = item;
  const { price, quantity, setQuantity } = useCalcPrice(periods);
  console.log(price);
  return (
    <div>
      <ul className=" leading-10">
        {periods.map((plan, i) => [
          <PlanItem plan={plan} key={i} quantity={quantity} />,
        ])}
      </ul>
      <div className=" mt-4 inline-flex flex-col items-start gap-3">
        <QuantityInput
          quantity={quantity}
          setQuantity={setQuantity}
          // className={"mt-5"}
        />
        {quantity > maxOrder && (
          <p className="self-center text-sm text-red-700  dark:text-white md:text-base">
            نمیتوانید بیش از {toK(maxOrder)} انتخاب کنید
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
