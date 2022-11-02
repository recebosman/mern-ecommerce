import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
// import data from "../data/data";

const Products = () => {
  const { data, isLoading, isError } = useQuery("products", async () => {
    return await axios
      .get("http://localhost:3000/api/admin/all-products")
      .then((res) => res?.data);
  });
  const [products, setProducts] = useState();

  const filterType = (type) => {
    const newProducts = data?.filter((product) => product?.cat === type);
    setProducts(newProducts);
    if (type === "all") {
      setProducts(data);
    }
  };

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <div className="w-full h-full flex items-center flex-col ">
      <div className="pt-[100px] tracking-wider">
        <h1 className="font-bold text-center text-4xl font-Heebo">
          Our Products
        </h1>
        <ul className="flex justify-center pt-5 font-semibold text-lg items-center gap-10">
          <li onClick={() => filterType("all")}>All</li>
          <li onClick={() => filterType("shoes")}>Shoes</li>
          <li onClick={() => filterType("shirt")}>Shirts</li>
          <li>Others</li>
        </ul>
      </div>
      <div>
        <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-[150px] pt-10">
          {products?.map((item, index) => {
            return (
              <Link to={`/product/${item?._id}`} key={index}>
                <div className="flex flex-col items-centerw-[400px] h-[400px]">
                  <img
                    src={item?.img}
                    alt="product"
                    className="w-[300px] h-[400px] object-contain"
                  />
                  <div className="flex flex-col items-center gap-2">
                    <h1 className="text-black font-semibold text-lg">
                      {item?.name}
                    </h1>
                    <h1 className="text-black font-semibold text-lg">
                      ${item?.price}
                    </h1>
                    <button className="bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-[#8BC2D7]">
                      Go to Product
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
