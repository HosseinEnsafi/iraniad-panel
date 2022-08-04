import axios from "axios";
import React, { useContext, useState, useReducer } from "react";
import { useEffect } from "react";
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
import OrderCard from "./OrderCard";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_FROM_REQUEST":
      return state;
    case "GET_FROM_NAVIGATE":
      return {
        ...state,
        item: payload.item,
        qty: payload.qty,
        loading: false,
        properties: payload.properties,
      };
    default:
      return state;
  }
};

const productState = {
  item: {
    periods: [],
    label: "",
    product_label: "",
    maxOrder: 0,
  },
  qty: 0,
  properties: [],
  loading: true,
};

function ProductDetail() {
  const [state, dispatch] = useReducer(reducer, productState);
  const params = useParams();
  const location = useLocation();
  const { productId } = params;
  const { screenSize, userTheme } = useContext(UIContext);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const submitHandler = () => {};
  const {
    item: { periods, label, product_label, maxOrder },
    qty,
    properties,
    loading,
  } = state;
  const { price, quantity, setQuantity } = useCalcPrice(
    periods,
    location.state?.qty || qty
  );
  const curPlan = findPlan(periods, quantity);

  useEffect(() => {
    if (location.state) {
      dispatch({
        type: "GET_FROM_NAVIGATE",
        payload: {
          qty: location.state.qty,
          item: location.state.item,
          properties: location.state.properties,
        },
      });
    } else {
      axios.get(`services/${productId}`).then((res) => console.log(res.data));
    }
  }, []);

  const submitOrder = () => {
    axios.post("orders", {
      count: quantity,
      order_time: time.getHours(),
      order_date: date.toISOString(),
      properties: [],
    });
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="pb-4">
      <ul className="flex cursor-pointer flex-wrap justify-center gap-x-8 rounded-lg border border-gray-200 bg-white leading-10 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800  dark:hover:bg-gray-700">
        {periods.map((plan, i) => [
          <PlanItem plan={plan} key={i} quantity={quantity} />,
        ])}
      </ul>
      <form
        onSubmit={submitHandler}
        className="mt-10 grid items-start justify-items-center gap-y-5 gap-x-2 sm:grid-cols-3"
      >
        <div className="  inline-flex flex-1 flex-col items-start gap-3">
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="">تعداد</label>
            <QuantityInput quantity={quantity} setQuantity={setQuantity} />
          </div>
          {quantity > maxOrder && (
            <p className=" text-sm text-red-700  dark:text-white md:text-base">
              ww حداکثر تعداد {toK(maxOrder)} میباشد
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
            inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={time}
            onChange={(value) => setTime(value.toDate())}
          />
        </div>
      </form>

      <div className=" mt-16 grid justify-items-center gap-4 sm:grid-cols-2 ">
        {properties.map((property, i) => (
          <p key={i}>Hello</p>
        ))}
        <OrderCard
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
