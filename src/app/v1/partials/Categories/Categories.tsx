import { Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Category = { id: number; name: string };
type Treatment = {
  id: number;
  name: string;
  price: number;
  desc: string;
  beautyCategoryId: number;
};

export default function Categories({ setOpenDrawer }) {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/api/v1/beauty-category");
      const result = await res.json();
      //console.log(result);
      setCategories(result.data);
    };
    fetchData();
  }, []);

  const handleOnClick = () => {
    setOpenDrawer(true);
    router.push("../treatments");
  };

  return (
    <ul className="flex flex-col gap-2">
      {categories?.map((category: Category) => (
        <li key={category.id}>
          <Button size="large" onClick={handleOnClick}>
            {category.name}
          </Button>
        </li>
      ))}
    </ul>
  );
}
