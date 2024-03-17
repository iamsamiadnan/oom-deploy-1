"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
type Treatment = {
  id: number;
  name: string;
  price: number;
  desc: string;
  beautyCategoryId: number;
};

export default function Treatments({
  params,
}: {
  params: { categoryId: number };
}) {
  const [treatments, setTreatments] = useState<Treatment[] | null>(null);
  const router = useRouter();

  const fetchTreatments = async (categoryId: number) => {
    const res = await fetch("http://localhost:8000/api/v1/treatment");
    const result = await res.json();

    if (result) {
      const r = result.data.filter(
        (treatment: Treatment) =>
          treatment.beautyCategoryId === Number(categoryId)
      );
      setTreatments(r);
    }
  };

  const handleShowTreatmentDetails = (treatmentId: number) => {
    router.push(`/v2/treatments/${treatmentId}/details`);
  };

  useEffect(() => {
    fetchTreatments(params.categoryId);
    console.log("Sami", treatments);
  }, []);

  return (
    <ul className="flex flex-col gap-2">
      {treatments?.map((treatment: Treatment) => (
        <li key={treatment.id}>
          <li>
            <div
              className="border border-gray-300 p-4 flex flex-col gap-1 rounded-md cursor-pointer hover:bg-gray-100"
              onClick={() => handleShowTreatmentDetails(treatment.id)}
            >
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
