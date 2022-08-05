import React, { useContext, useState, useReducer } from "react";
import axios from "../../../api/axios";
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
import PropertyCard from "./PropertyCard";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_FROM_REQUEST":
      return {
        ...state,
        item: payload.item,
        properties: payload.properties,
        loading: false,
      };
    case "GET_FROM_NAVIGATE":
      return {
        ...state,
        item: payload.item,
        qty: payload.qty,
        properties: payload.properties,
        loading: false,
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
    id: "",
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
  const [link, setLink] = useState(null);
  const [media, setMedia] = useState(null);
  const submitHandler = () => {};
  const {
    item: { periods, label, product_label, maxOrder, id },
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
      axios
        .get(`services/${productId}?domain=https://shahin.iraniad.com`)
        .then((res) => res.data.data)
        .then((data) =>
          dispatch({
            type: "GET_FROM_REQUEST",
            payload: {
              item: {
                periods: data.periods,
                label: data.label,
                product_label: data.product_label,
                maxOrder: data.maxOrder,
                id: data.id,
              },
              properties: data.properties,
            },
          })
        );
    }
  }, []);

  const submitOrderHandler = () => {
    axios.post("orders", {
      id,
      count: quantity,
      order_time: time.getHours(),
      order_date: date.getTime(),
      properties: [
        {
          id,
          value: link,
        },
        { id, value: media },
      ],
    });
  };

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="pb-4">
      <ul className="flex  cursor-pointer flex-wrap justify-center gap-x-8 rounded-lg border border-gray-200 bg-white leading-10 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800  dark:hover:bg-gray-700">
        {periods.map((plan, i) => [
          <PlanItem plan={plan} key={i} quantity={quantity} />,
        ])}
      </ul>
      <form onSubmit={submitHandler} className="mt-10">
        <div className=" grid items-start justify-items-center gap-y-5 gap-x-2 sm:grid-cols-3">
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
            <label htmlFor="">ساعت شروع</label>
            <DatePicker
              disableDayPicker
              className={`${userTheme === "Dark" ? "bg-dark" : ""} `}
              format="HH:mm"
              minDate={Date.now()}
              plugins={[<TimePicker hideSeconds />]}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={time}
              onChange={(value) => setTime(value.toDate())}
            />
          </div>
        </div>
        <div className="mt-20 grid justify-items-center gap-4 sm:grid-cols-2 ">
          {properties.map((property, i) => (
            <PropertyCard key={i} property={property}></PropertyCard>
          ))}
          <OrderCard
            quantity={quantity}
            price={price}
            time={time}
            curPlan={curPlan}
            date={date}
          />
        </div>
      </form>
    </div>
  );
}

export default ProductDetail;
