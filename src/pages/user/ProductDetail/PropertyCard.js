import React from "react";
import { useState } from "react";
import { BiInfoCircle } from "../../../assets/icons";
/* 
[
    {
        "id": 6,
        "name": "لینک کانال تلگرام",
        "placeholder": "لینک کانال تلگرام",
        "help": "لطفا لینک کانال تلگرام را بصورت خالی بدون @ یا آدرس سایت تلگرام وارد نمایید",
        "minSize": "4",
        "maxSize": "50",
        "sizeUnit": "کاراکتر",
        "type": "TEXT",
        "dataType": "TEXT",
        "required": "YES"
    }
]
*/
function PropertyCard({ property }) {
  const {
    dataType,
    help,
    name,
    id,
    maxSize,
    minSize,
    placeholder,
    required,
    sizeUnit,
    type,
  } = property;

  const [userLink, setUserLink] = useState("");

  return (
    <div className="w-full rounded-lg border bg-white px-2 py-3 pt-6 text-gray-700  dark:border-gray-400 dark:bg-gray-800  dark:text-gray-300 lg:max-w-[450px]">
      <label className="mb-2 block text-sm font-medium ">{name}</label>
      <div className="flex">
        <span className="inline-flex items-center rounded-r-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
          @
        </span>
        <input
          value={userLink}
          onChange={(e) => setUserLink(e.target.value)}
          type="text"
          id="website-admin"
          className="block w-full min-w-0 flex-1 rounded-none rounded-l-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder={placeholder}
        />
      </div>

      <div className="mt-6">
        <BiInfoCircle className="ml-2 inline text-blue-600 dark:text-blue-400" />
        <span className="">اطلاعات مفید</span>
        <p className="text-gray-600 dark:text-gray-400  ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit ullam tempora cumque a, doloremque deserunt esse libero
          enim laudantium nemo, corporis provident hic. Iusto consectetur quas,
          aperiam ipsum repudiandae rem!
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;
