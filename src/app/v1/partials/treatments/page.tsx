"use client";
import React, { useState } from "react";
type Treatment = {
  id: number;
  name: string;
  price: number;
  desc: string;
  beautyCategoryId: number;
};

export default function Treatments() {
  const [treatments, setTreatments] = useState<Treatment[] | null>(null);

  return (
    <ul className="flex flex-col gap-2">
      {treatments?.map((treatment: Treatment) => (
        <li key={treatment.id}>
          <li>
            <div className="border border-gray-300 p-4 flex flex-col gap-1 rounded-md cursor-pointer hover:bg-gray-100">
              <span>{treatment.name}</span>
              <p>{treatment.desc}</p>
              <span>{treatment.price}</span>
            </div>
          </li>
        </li>
      ))}
    </ul>
  );
}
