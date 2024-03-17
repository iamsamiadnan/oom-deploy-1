"use client";
import { Button, Drawer } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
type Category = { id: number; name: string };

export default function Layout({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("http://localhost:8000/api/v1/beauty-category");
      const result = await res.json();
      setCategories(result.data);
    };
    fetchCategories();
  }, []);

  const onClose = () => {
    setOpen(false);
  };

  const handleShowTreatment = (categoryId: number) => {
    setOpen(true);
    router.push(`/v2/treatments/${categoryId}`);
  };

  return (
    <div className="h-screen flex items-center">
      <main className="p-4 bg-gray-200 w-[375px] h-[812px] mx-auto relative overflow-hidden">
        <ul className="flex flex-col gap-2">
          {categories?.map((category: Category) => (
            <li key={category.id}>
              <Button
                size="large"
                onClick={() => handleShowTreatment(category.id)}
              >
                {category.name}
              </Button>
            </li>
          ))}
        </ul>

        <Drawer
          title="Treatments"
          placement="bottom"
          closable={true}
          onClose={onClose}
          open={open}
          getContainer={false}
          size="large"
        >
          {children}
        </Drawer>
      </main>
    </div>
  );
}
