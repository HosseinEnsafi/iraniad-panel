import React from "react";

function NotFound() {
  return (
    <div className="flex h-[calc(100vh-200px)] flex-col items-center justify-center gap-3">
      <h1 className=" text-2xl md:text-4xl">
        <span className="text-red-500">خطا</span> ۴۰۴
      </h1>
      <p>صفحه مورد نظر یافت نشد</p>
    </div>
  );
}

export default NotFound;
