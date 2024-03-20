"use client";
import { ChildrenContext, IsLoadingContext } from "@/app/v3/layout";
import { Button, Tabs } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import CTabs from "./components/CTabs/CTabs";
import SubCategories from "./partials/SubCategories/SubCategories";

type Treatment = {
  id: number;
  name: string;
  price: number;
  desc: string;
  beautyCategoryId: number;
};

export default function Treatments({
  params,
  children,
}: {
  params: { categoryId: number };
}) {
  const [subCategories, setSubCategories] = useState([]);
  // const [treatments, setTreatments] = useState<Treatment[] | null>(null);
  // const router = useRouter();
  // const [isLoading, setIsLoading] = useState(false);

  // const fetchTreatments = async (categoryId: number) => {
  //   const res = await fetch("http://localhost:8000/api/v1/treatment");
  //   const result = await res.json();

  //   if (result) {
  //     const r = result.data.filter(
  //       (treatment: Treatment) =>
  //         treatment.beautyCategoryId === Number(categoryId)
  //     );
  //     setTreatments(r);
  //   }
  // };

  // useEffect(() => {
  //   fetchTreatments(params.categoryId);
  // }, []);

  // const showTreatmentDetails = (treatmentId: number) => {
  //   setIsLoading(true);
  //   router.push(
  //     `/v3/categories/${params.categoryId}/treatments/${treatmentId}`
  //   );
  // };

  const fetchSubCategories = (categoryId: number) => {
    const subCategories = [
      {
        key: "1",
        label: "Blowout",
        children: <span>Hello 1</span>,
      },
      {
        key: "2",
        label: "Hair cut",
        children: <span>Hello 2</span>,
      },
    ];

    setSubCategories(subCategories);
  };

  return (
    <>
      <Button onClick={() => fetchSubCategories(2)}>Women's Menu</Button>
      <Button onClick={() => fetchSubCategories(1)}>Men's Menu</Button>
      <SubCategories subCategories={subCategories} />
    </>
  );
}
