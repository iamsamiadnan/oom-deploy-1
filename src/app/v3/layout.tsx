"use client";
import React, { createContext, useState } from "react";

import { Avatar, Badge, Drawer } from "antd";
import Categories from "./categories/partials/Categories";
import { useRouter } from "next/navigation";

export const CartContext = createContext([]);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  const onClose = () => {
    setOpen(false);
  };

  const containerStyle: React.CSSProperties = {
    position: "relative",
    height: 852,
    padding: 48,
    overflow: "hidden",
    background: "#fafafa",
    border: `1px solid #fafafa`,
    width: 393,
    margin: "auto",
  };

  const showCart = () => {
    setOpen(true);
    router.push("/v3/cart");
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <main className="w-[375px] h-[812px] m-auto bg-white p-6 relative overflow-hidden">
        <div className="mb-4 flex justify-end">
          <a className="cursor-pointer" onClick={showCart}>
            <Badge count={cartCount} showZero={true}>
              <Avatar shape="square" size="large" />
            </Badge>
          </a>
        </div>
        <Categories setOpen={setOpen} />

        <Drawer
          title="Treatments"
          placement="bottom"
          closable={true}
          onClose={onClose}
          open={open}
          getContainer={false}
          size="large"
        >
          <CartContext.Provider
            value={{ setCartCount, cartItems, setCartItems }}
          >
            {children}
          </CartContext.Provider>
        </Drawer>
      </main>
    </div>
  );
}