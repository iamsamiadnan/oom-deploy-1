"use client";
import { Skeleton } from "antd";
import React from "react";

export default function Loading() {
  console.log("hello");
  return (
    <div className="absolute w-full h-screen bg-white top-[57px] p-4 flex flex-col gap-6">
      <Skeleton active />
      <Skeleton active />
    </div>
  );
}
