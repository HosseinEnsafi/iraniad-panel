import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  const [search] = useSearchParams();
  const { productId } = params;

  return (
    <div>
      {productId}
      <p>
        {search.get("qty")}
        عدد
      </p>
    </div>
  );
}

export default ProductDetail;
