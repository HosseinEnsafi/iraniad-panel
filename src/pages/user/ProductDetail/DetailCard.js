import React from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { useSelector } from "react-redux";

function DetailCard({ time, date, quantity, price, curPlan }) {
  const { user } = useSelector((state) => state.auth);

  const processTime = +curPlan?.time;
  console.log(processTime);
  const startDate = new DateObject({
    date: new Date(date).getTime(),
    calendar: persian,
    locale: persian_fa,
  }).format("YYYY/MM/DD");

  const startTime = new DateObject({
    date: new Date(time).getTime(),
    calendar: persian,
    locale: persian_fa,
  }).format("HH:mm");

  const finishedDate = new DateObject({
    date: new Date(date).getTime() + processTime * 1000 * 60 * 60,
    calendar: persian,
    locale: persian_fa,
  }).format("YYYY/MM/DD");

  const finishedTime = new DateObject({
    date: new Date(time).getTime() + processTime * 1000 * 60 * 60,

    calendar: persian,
    locale: persian_fa,
  }).format("HH:mm");

  return (
    <div className="border-gray- w-full max-w-sm  rounded-md border-2  px-2 py-3 ">
      <ul className="grid grid-cols-2 justify-items-center gap-x-2 gap-y-4">
        <li className="whitespace-nowrap text-sm   sm:text-base">
          قیمت واحد : {curPlan && curPlan.cost} تومان
        </li>
        <li className=" whitespace-nowrap text-sm sm:text-base">
          تعداد نهایی : {curPlan && quantity}
        </li>
        <li className="whitespace-nowrap text-sm sm:text-base">
          تاریخ شروع : {curPlan && startDate}
        </li>
        <li className=" whitespace-nowrap text-sm sm:text-base">
          ساعت شروع : {curPlan && startTime}
        </li>
        <li className=" whitespace-nowrap text-sm sm:text-base">
          تاریخ پایان : {curPlan && finishedDate}
        </li>
        <li className=" whitespace-nowrap text-sm sm:text-base">
          ساعت پایان : {curPlan && finishedTime}
        </li>
      </ul>
      <h4 className="mt-5 text-center tracking-wide">قیمت نهایی : {price}</h4>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {!user && (
          <div className="flex flex-col gap-1">
            <label className=" text-sm sm:text-base" htmlFor="">
              شماره موبایل
            </label>
            <input className="checkout__input" type="text" />
          </div>
        )}

        {!user && (
          <div className="flex flex-col gap-1">
            <label className=" text-sm sm:text-base" htmlFor="">
              شماره تایید
            </label>
            <input className="checkout__input" type="text" />
          </div>
        )}
        <div className="flex w-full justify-center">
          <button className="pricing__btn mt-2 w-24">پرداخت</button>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
