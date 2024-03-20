"use client";
import React, { Suspense, createContext, useRef, useState } from "react";

import { Avatar, Badge, Button, Drawer } from "antd";
import Categories from "./categories/partials/Categories";
import { useRouter, useSearchParams } from "next/navigation";
import Skeleton from "./loading";
import { usePathname } from "next/navigation";
import Loading from "./loading";
import CButton from "./components/CButton/CButton";
import Image from "next/image";

export const CartContext = createContext([]);
export const ChildrenContext = createContext([]);
export const IsLoadingContext = createContext([]);

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isChildrenVisible, setIsChildrenVisible] = useState(true);

  const router = useRouter();

  const searchParams = useSearchParams();
  console.log(searchParams.get("uuid"));
  const onClose = () => {
    setOpen(false);
    setIsChildrenVisible(false);
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
    router.push("/v3/cart");
    setOpen(true);
  };

  return (
    <main className="max-w-[393px] h-screen m-auto bg-white relative overflow-hidden bg-[url('/oom-home-image.png')] bg-cover bg-center">
      {/* <div className="mb-4 flex justify-end">
        <a className="cursor-pointer" onClick={showCart}>
          <Badge count={cartCount} showZero={true}>
            <Avatar shape="square" size="large" />
          </Badge>
        </a>
      </div> */}
      <div className="h-[56px] bg-white py-3 px-4 flex justify-between">
        <Image width="24" height="24" src={`/Icons/FunnelSimple.svg`} alt="" />
        <Image width="132" height="32" src={`/oom-logo.png`} alt="" />

        <Badge
          count={cartCount}
          showZero={true}
          className="!flex"
          onClick={showCart}
        >
          <Image width="24" height="24" src={`/Icons/ShoppingBag.svg`} alt="" />
        </Badge>
      </div>
      <div className="absolute bottom-6 w-full">
        <div className="mb-[53px]">
          <div className="max-w-[320px] mx-auto text-white text-center">
            <div className="mb-3">
              <h1 className="font-bold text-2xl">Beauty Room Service</h1>
            </div>
            <p className="font-medium text-base">
              Indulge yourself with a luxury in-room hair or beauty treatment
            </p>
          </div>
        </div>
        <Categories setOpen={setOpen} />
      </div>

      {/* <Categories setOpen={setOpen} /> */}

      <Drawer
        title="Treatments"
        placement="bottom"
        closable={true}
        onClose={onClose}
        open={open}
        getContainer={false}
        size="large"
        destroyOnClose={true}
      >
        <CartContext.Provider value={{ setCartCount, cartItems, setCartItems }}>
          <Suspense key={searchParams?.get("uuid")} fallback={<Loading />}>
            {children}
          </Suspense>
        </CartContext.Provider>
      </Drawer>
    </main>
  );
}
