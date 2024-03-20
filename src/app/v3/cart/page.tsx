"use client";
import React, { useContext } from "react";
import { CartContext } from "../layout";
import { Button } from "antd";
import { useRouter } from "next/navigation";

type Treatment = {
  id: number;
  name: string;
  price: number;
  desc: string;
  beautyCategoryId: number;
};

export default function Cart() {
  const router = useRouter();

  const showCheckout = () => {
    router.push("/v3/checkout");
  };
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

      {cartItems && (
        <Button type="primary" onClick={showCheckout}>
          Go To Checkout
        </Button>
      )}
    </>
  );
}
