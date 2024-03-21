"use client";
import Image from "next/image";
import React from "react";
import { Tabs, type TabsProps } from "antd";
import style from "./style/style.module.scss";
import Cards from "./components/Cards";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

const subCategories: TabsProps["items"] = [
  {
    key: "1",
    label: "Blowout",
    children: <Cards />,
  },
  {
    key: "2",
    label: "Hair cut",
    children: <Cards />,
  },
  {
    key: "3",
    label: "Coloration",
    children: <Cards />,
  },
  {
    key: "4",
    label: "Nails",
    children: <Cards />,
  },
  {
    key: "5",
    label: "Face Treatment",
    children: <Cards />,
  },
];

export default function Page({ params }: { params: { hotelId: string } }) {
  const router = useRouter();

  Router.events.on("routeChangeStart", () => {
    console.log("hello ....");
  });

  const showCatalogue = (categoryId: number) => {
    switch (categoryId) {
      case 1:
        router.push("/1");
        break;
      case 2:
        router.push("/2");
        break;
    }
  };

  return (
    <div className="bg-white h-screen relative">
      <div
        className={`w-full h-[207px] bg-[url('/placeholders/placeholder-hotel-cover-photo.png')] mb-[10px]`}
      ></div>

      <div className="mx-4 mb-6">
        <h1 className="font-semibold text-2xl tracking-[-0.33px] mb-1">
          Excelsior Gallia
        </h1>
        <div className="flex gap-1">
          <Image src="/Icons/MapPin.svg" width="16" height="16" alt="" />
          <span className="font-normal text-[15px] tracking-[-0.33px] text-[#737373]">
            Piazza Duca d&apos;Aosta, 9, 20124 Milano MI, Italie
          </span>
        </div>
      </div>

      <div className="pl-4 pb-8 bg-white overflow-y-auto h-max">
        <div className="flex gap-4 mb-3">
          <span
            onClick={() => showCatalogue(1)}
            className={`font-semibold text-[15px] leading-[18.15px] tracking-[-0.33px] cursor-pointer ${Number(params.hotelId) === 1 ? "text-black" : "text-[#7d7d7d]"}`}
          >
            WOMEN&apos;S MENU
          </span>
          <span
            onClick={() => showCatalogue(2)}
            className={`font-semibold text-[15px] leading-[18.15px] tracking-[-0.33px] cursor-pointer ${Number(params.hotelId) === 2 ? "text-black" : "text-[#7d7d7d]"}`}
          >
            MEN&apos;S MENU
          </span>
        </div>

        <Tabs
          className={style.ctabs}
          defaultActiveKey="1"
          items={subCategories}
          //   onChange={onChange}
        />
      </div>
    </div>
  );
}
