"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { IsLoadingContext } from "../../layout";
import shortUUID from "short-uuid";
import CButton from "../../components/CButton/CButton";

type Category = { id: number; name: string };

export default function Categories({ setOpen }) {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const router = useRouter();
  const { setIsLoading } = useContext(IsLoadingContext);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("http://localhost:8000/api/v1/beauty-category");
      const result = await res.json();
      setCategories(result.data);
    };
    fetchCategories();
  }, []);

  const showTreatment = (categoryId: number) => {
    setOpen(true);
    router.push(
      `/v3/categories/${categoryId}/treatments?uuid=${shortUUID.generate()}`
    );
  };

  return (
    // <ul className="flex flex-col gap-4">
    //   {categories?.map((category: Category) => (
    //     <li key={category.id}>
    //       <Button size="large" onClick={() => showTreatment(category.id)}>
    //         {category.name}
    //       </Button>
    //     </li>
    //   ))}
    // </ul>

    <div className="px-[18px]">
      {categories && (
        <>
          <div className="mb-2">
            <CButton
              onClick={() => showTreatment(categories[0].id)}
              text={`${categories[0].name}'s Menu`}
              invertStyle={false}
            />
          </div>
          <CButton
            onClick={() => showTreatment(categories[1].id)}
            text={`${categories[1].name}'s Menu`}
            invertStyle={true}
          />
        </>
      )}
    </div>
  );
}
