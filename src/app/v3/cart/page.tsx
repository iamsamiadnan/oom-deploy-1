"use client";
import React, { useContext } from "react";
import { CartContext } from "../layout";

type Treatment = {
  id: number;
  name: string;
  price: number;
  desc: string;
  beautyCategoryId: number;
};

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div className="mb-8">Cart</div>
      <ul>
        {cartItems?.map((cartItem: Treatment) => (
          <li
            key={cartItem.id}
            className="border border-gray-200 p-4 rounded mb-4"
          >
            <span>
              {cartItem.name} - {cartItem.price}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
