import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useQuery } from "react-query";
import { addToCart } from "../features/cartSlice";

const Product = () => {
  const { data, isLoading, isError } = useQuery("products", async () => {
    return await axios
      .get("http://localhost:3000/api/admin/all-products")
      .then((res) => res?.data);
  });

  const { id } = useParams();
  const dispatch = useDispatch();

  const product = data?.find((item) => item?._id === id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <div>
      <Navbar />
      <div className="w-full flex items-center justify-center h-screen md:mt-20">
        <div className="bg-slate-300 w-[1200px] h-[800px] grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <img
              src={product?.img}
              alt="product"
              className=" h-[800px] w-full object-cover"
            />
          </div>
          <div className="flex flex-col  uppercase items-start p-10 gap-10 justify-center">
            <h1 className="text-black font-Heebo font-semibold text-4xl">
              {product?.name}
            </h1>
            <h1 className="text-green-600 font-semibold text-4xl">
              ${product?.price}
            </h1>
            <p className="text-slate-900 normal-case font-Heebo font-semibold text-2xl">
              {product?.desc}
            </p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-white text-black font-semibold py-2 px-4 rounded-md hover:bg-black hover:text-white transition duration-300 ease-in-out md:bg-black md:text-white md:hover:text-black md:hover:bg-green-500 "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
