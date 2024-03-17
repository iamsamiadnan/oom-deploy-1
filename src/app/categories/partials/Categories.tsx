"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
type Category = { id: number; name: string };

export default function Categories({ setOpen }) {
  console.log(setOpen);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const router = useRouter();
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
    router.push(`/categories/${categoryId}/treatments`);
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