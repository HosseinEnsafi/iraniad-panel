import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
function ProductsPage() {
  const [search] = useSearchParams();
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios
      .get("/services", {
        params: {
          cat_id: +search.get("cat_id"),
          domain: "https://shahin.iraniad.com",
        },
      })
      .then((res) => setProductsData(res.data.data));
  }, [search]);
  // console.log(productsData);
  return (
    <>
      {productsData.map((data) => (
        <section className="py-10" key={data.id}>
          <h1 className="mb-10 text-center text-2xl md:mb-14 md:text-3xl ">
            {data.label}
          </h1>
          <div className=" grid grid-cols-1 content-center justify-items-center  gap-x-4 gap-y-9 md:grid-cols-2  xl:grid-cols-3">
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
