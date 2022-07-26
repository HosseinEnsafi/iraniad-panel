import React, { useContext, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/opacity";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { useLocation, useParams } from "react-router-dom";
import PlanItem from "../../../components/PlanItem";
import QuantityInput from "../../../components/QuantityInput";
import { UIContext } from "../../../context/UIState/UIContext";
import useCalcPrice from "../../../hooks/useCalcPrice";
import findPlan from "../../../utils/findPlan";
import toK from "../../../utils/toK";
import DetailCard from "./DetailCard";
function ProductDetail() {
  const params = useParams();
  const location = useLocation();
  const { item, quantity: qty } = location.state;
  const { productId: id } = params;
  const { label, product_label, maxOrder, periods } = item;
  const { price, quantity, setQuantity } = useCalcPrice(periods, qty);
  const { screenSize, userTheme } = useContext(UIContext);
  const [date, setDate] = useState(Date.now());
  const [time, setTime] = useState(Date.now());
  const submitHandler = () => {};
  const curPlan = findPlan(periods, quantity);
  return (
    <div className="pb-4">
      <ul className=" leading-10">
        {periods.map((plan, i) => [
          <PlanItem plan={plan} key={i} quantity={quantity} />,
        ])}
      </ul>
      <form
        onSubmit={submitHandler}
        className="mt-10 grid items-start justify-items-center gap-y-5 xs:grid-cols-2 sm:grid-cols-3"
      >
        <div className="  inline-flex flex-1 flex-col items-start gap-3">
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="">تعداد</label>
            <QuantityInput quantity={quantity} setQuantity={setQuantity} />
          </div>
          {quantity > maxOrder && (
            <p className=" text-sm text-red-700  dark:text-white md:text-base">
              حداکثر تعداد {toK(maxOrder)} میباشد
            </p>
          )}
        </div>

        <div
          className="flex flex-1 flex-col items-center gap-2"
          style={{ direction: "rtl" }}
        >
          <label htmlFor="" className=" whitespace-nowrap">
            تاریخ شروع
          </label>
          <DatePicker
            className={`${screenSize < 600 ? "rmdp-mobile" : ""} ${
              userTheme === "Dark" ? "bg-dark" : ""
            }  `}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            format="MM/DD/YYYY"
            value={date}
            onChange={(value) => setDate(value.toDate())}
            minDate={Date.now()}
            inputClass="data-picker__input"
            animations={[opacity()]}
          />
        </div>
        <div className="flex flex-1 flex-col items-center gap-2">
          <label htmlFor="">ساعت</label>
          <DatePicker
            disableDayPicker
            className={`${userTheme === "Dark" ? "bg-dark" : ""} `}
            format="HH:mm"
            plugins={[<TimePicker />]}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            inputClass="data-picker__input"
            value={time}
            onChange={(value) => setTime(value.toDate())}
          />
        </div>
      </form>

      <div className=" mt-16 grid justify-items-center gap-4 sm:grid-cols-2 ">
        <DetailCard
          quantity={quantity}
          price={price}
          time={time}
          curPlan={curPlan}
          date={date}
        />
      </div>
    </div>
  );
}

export default ProductDetail;
