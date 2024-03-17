import React from "react";

export default function page({ params }: { params: { categoryId: number } }) {
  console.log("Treatment Details", params);
  return (
    <div className="border border-gray-300 p-4 flex flex-col gap-1 rounded-md cursor-pointer hover:bg-gray-100"></div>
  );
}
