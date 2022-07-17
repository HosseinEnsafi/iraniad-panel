import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

import ProductCardSkeleton from "../../components/skeleton/ProductCardSkeleton";

function ProductsPage() {
  const [search] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setProductsData([]);
    axios
      .get("/services", {
        params: {
          cat_id: +search.get("cat_id"),
          domain: "https://shahin.iraniad.com",
        },
      })
      .then((res) => {
        setProductsData(res.data.data);
        setLoading(false);
      });
  }, [search]);
  // console.log(productsData);
  return (
    <>
      {loading && (
        <div className="products__list mt-20">
          {Array.from("foo").map(() => (
            <ProductCardSkeleton />
          ))}
        </div>
      )}
      {productsData.map((data) => (
        <section className="py-10" key={data.id}>
          <h1 className="mb-10 text-center text-2xl md:mb-14 md:text-3xl ">
            {data.label}
          </h1>

          <div className=" products__list">
            {data.items.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

export default ProductsPage;
