"use client";

import { CartContext, IsLoadingContext } from "@/app/v3/layout";
import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
type Treatment = {
  id?: number;
  name?: string;
  price?: number;
  desc?: string;
  beautyCategoryId?: number;
};

export default function TreatmentDetails({
  params,
}: {
  params: { treatmentId: number };
}) {
  const [treatment, setTreatment] = useState<Treatment | null>(null);
  const { setCartCount, setCartItems } = useContext(CartContext);
  const { setIsLoading } = useContext(IsLoadingContext);

  const fetchTreatmentById = async (categoryId: number) => {
    const res = await fetch(
      `http://localhost:8000/api/v1/treatment/${params.treatmentId}`
    );
    const result = await res.json();

    setTreatment(result.data);
  };

  useEffect(() => {
    fetchTreatmentById(params.treatmentId);
  }, []);

  const addToCart = (treatment: Treatment) => {
    setCartCount((prev: number) => prev + 1);
    setCartItems((prev: Treatment[]) => [...prev, treatment]);
  };
  return (
    <div className="flex flex-col gap-4">
      <span>{treatment?.name}</span>
      <span>{treatment?.price}</span>
      <span>{treatment?.desc}</span>
      <Button
        type="primary"
        onClick={() =>
          addToCart({
            id: treatment?.id,
            name: treatment?.name,
            price: treatment?.price,
            desc: treatment?.desc,
            beautyCategoryId: treatment?.beautyCategoryId,
          })
        }
      >
        Add To Cart
      </Button>
    </div>
  );
}
