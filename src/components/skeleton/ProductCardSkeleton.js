import React from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function ProductCardSkeleton() {
  return (
    <SkeletonTheme baseColor="#333" highlightColor="#444">
      <div className="flex w-full flex-col gap-4 px-10 md:px-4">
        <div className="mt-12">
          <Skeleton
            direction="rtl"
            count={5}
            inline
            className=" mb-5 h-4 w-full"
          ></Skeleton>
        </div>

        <div className="grid w-full grid-cols-2 items-center gap-5">
          <Skeleton direction="rtl" className="h-10" />
          <Skeleton direction="rtl" width={15} height={20} />
        </div>

        <div className=" w-24">
          <Skeleton direction="rtl" className="mt-3 h-10" />
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default ProductCardSkeleton;
