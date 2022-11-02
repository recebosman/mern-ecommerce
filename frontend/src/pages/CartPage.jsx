import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeAllCart,
  calcucalteTotal,
} from "../features/CartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calcucalteTotal());
  }, [cart]);

  return (
    <div className="flex flex-row items-center bg-[#ECF5FF] justify-center h-screen">
      <div className="h-[600px] w-[1000px] rounded-3xl bg-white shadow-xl">
        <div className="flex items-start justify-between px-8 py-4">
          <h1 className="font-semibold text-xl font-Heebo flex items-center gap-2">
            <Link to="/">
              <i className="ri-arrow-left-line"></i>
            </Link>
            Shopping Cart
          </h1>
          <h1
            onClick={() => dispatch(removeAllCart())}
            className="font-semibold text-xl font-Heebo border-b-2 border-b-red-500 text-red-600"
          >
            Remove All
          </h1>
        </div>
        {cart.cart.map((item, index) => {
          return (
            <div key={index}>
              {item.cartQuantity > 0 ? (
                <div className="flex justify-between  px-8 py-4">
                  <img
                    src={item.img}
                    alt=""
                    className="h-[100px] w-[200px] object-cover"
                  />
                  <div className="flex flex-row items-center  gap-4 justify-center">
                    <h1 className="font-semibold text-xl font-Heebo">
                      {item.name}
                    </h1>
                    <button
                      onClick={() => dispatch(increaseQuantity(item))}
                      className="bg-[#8BC2D7] text-white font-semibold text-xl font-Heebo px-1 py-1 rounded-lg"
                    >
                      +
                    </button>
                    <h1 className="font-semibold text-xl font-Heebo">
                      {item.cartQuantity}
                    </h1>
                    <button
                      onClick={() => dispatch(decreaseQuantity(item))}
                      className="bg-[#8BC2D7] text-white font-semibold text-xl font-Heebo px-2 py-1 rounded-lg"
                    >
                      -
                    </button>
                    <h1 className="font-semibold text-xl font-Heebo px-8 py-4 md:flex">
                      $ {item.price}
                    </h1>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
        <div className="flex flex-col items-end mt-12">
          <div className="flex gap-2  mr-6">
            <div className="flex">
              <h1>Sub Total</h1>
            </div>
            <div>$ {cart.total}</div>
          </div>
          <div>
           <Link to="/checkout">
              <button className="bg-[#A6CAF7] px-12 py-2 rounded-2xl font-light text-lg  ">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
