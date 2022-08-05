import React from "react";
import { useState } from "react";
import { useMemo } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { useSelector } from "react-redux";

function OrderCard({ time, date, quantity, price, curPlan }) {
  const { user } = useSelector((state) => state.auth);
  const deliveredTime = +curPlan?.time;
  const [phone, setPhone] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const startDate = useMemo(() => {
    return new DateObject({
      date: new Date(date).getTime(),
      calendar: persian,
      locale: persian_fa,
    }).format("YYYY/MM/DD");
  }, [date]);

  const startTime = useMemo(() => {
    return new DateObject({
      date: new Date(time).getTime(),
      calendar: persian,
      locale: persian_fa,
    }).format("HH:mm");
  }, [time]);

  const finishedDate = useMemo(() => {
    return new DateObject({
      date: new Date(date).getTime() + deliveredTime * 1000 * 60 * 60,
      calendar: persian,
      locale: persian_fa,
    }).format("YYYY/MM/DD");
  }, [date, deliveredTime]);

  const finishedTime = useMemo(() => {
    return new DateObject({
      date: new Date(time).getTime() + deliveredTime * 1000 * 60 * 60,
      calendar: persian,
      locale: persian_fa,
    }).format("HH:mm");
  }, [deliveredTime, time]);

  return (
    <div className=" w-full rounded-lg border bg-white px-2 py-3 text-gray-700  dark:border-gray-400 dark:bg-gray-800  dark:text-gray-300 lg:max-w-[450px] ">
      <ul className="grid grid-cols-2 justify-items-center gap-x-2 gap-y-4">
        <li className="whitespace-nowrap text-sm   md:text-base">
          قیمت واحد : {curPlan && curPlan.cost} تومان
        </li>
        <li className=" whitespace-nowrap text-sm md:text-base">
          تعداد نهایی : {curPlan && quantity}
        </li>
        <li className="whitespace-nowrap text-sm md:text-base">
          تاریخ شروع : {curPlan && startDate}
        </li>
        <li className=" whitespace-nowrap text-sm md:text-base">
          زمان شروع : {curPlan && startTime}
        </li>
        <li className=" whitespace-nowrap text-sm md:text-base">
          تاریخ پایان : {curPlan && finishedDate}
        </li>
        <li className=" whitespace-nowrap text-sm md:text-base">
          زمان پایان : {curPlan && finishedTime}
        </li>
      </ul>
      <h4 className="my-5 text-center text-lg tracking-wide text-white">
        قیمت نهایی : {price}
      </h4>

      <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-2">
        {!user && (
          <div className="flex flex-col gap-1">
            <label className=" text-sm md:text-base" htmlFor="">
              شماره موبایل
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              type="text"
            />
          </div>
        )}

        {!user && (
          <div className="flex flex-col gap-1">
            <label className=" text-sm md:text-base" htmlFor="">
              شماره تایید
            </label>
            <input
              value={confirmCode}
              onChange={(e) => setConfirmCode(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              type="text"
            />
          </div>
        )}
        <div className="flex w-full justify-center">
          <button
            type="submit"
            disabled={!price}
            className="pricing__btn mt-2 w-24 "
          >
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
