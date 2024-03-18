"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { IsLoadingContext } from "../../layout";
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
    setIsLoading(true);
    setOpen(true);
    router.push(`/v3/categories/${categoryId}/treatments`);
  };

  return (
    <ul className="flex flex-col gap-4">
      {categories?.map((category: Category) => (
        <li key={category.id}>
          <Button size="large" onClick={() => showTreatment(category.id)}>
            {category.name}
          </Button>
        </li>
      ))}
    </ul>
  );
}
